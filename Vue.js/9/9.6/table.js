Vue.component('vTable', {
  props: {
    // 表头内容：columns——数组，描述每列的信息，渲染在<thead>中，可以指定某一列是否需要排序
    columns: {
      type: Array,
      default: function(){
        return []
      }
    },
    // 行数据：data——数组，每一行的数据，由columns决定每一行里各列的顺序
    data: {
      type: Array,
      default: function(){
        return []
      }
    }
  },
  data() {
    return {
      // 为了让排序后的columns和data不影响原始数据，组件的所有操作都将在以下两个数据上完成，不对原始数据做任何处理
      currentColumns: [],
      currentData: []
    }
  },
  render(h) {
    // 构造出表格的DOM结构
    var _this = this;
    // 表头的thead中有多列，即多个th
    var ths = [];
    this.currentColumns.forEach(function(col, index){
      if(col.sortable){
        ths.push(h('th', [
          h('span', col.title),
          // 实现升序排序
          h('a', {
            class: {on: col._sortType === "asc"},
            on: {click: function(){
              _this.handleSortByAsc(index);
            }}
          }, '↑'),
          // 实现降序排序
          h('a', {
            class: {on: col._sortType === "desc"},
            on: {click: function(){
              _this.handleSortByDesc(index);
            }}
          }, '↓')
        ]))
      }else{
        // 如果col.sortable没有定义，或值是false，就直接把col.title渲染出来
        ths.push(h('th', col.title));
      }
    });
    // 表格的主体tbody中是多行多列，即多个tr，多个td
    var trs = [];//一个二维数组，数据由currentColumns和currentData组成
    // 遍历所有的行(row)
    this.currentData.forEach(function(row){
      var tds = [];
      // 遍历所有列
      _this.currentColumns.forEach(function(cell){
        tds.push(h('td', row[cell.key]));
      });
      trs.push(h('tr', tds));
    });
    return h('table', [
      h('thead', [h('tr', ths)]),
      h('tbody', trs)
    ])
  },
  methods: {
    // 将父级数据columns传递给v-table的currentColumns
    makeColumns: function(){
      // 使用map()方法根据传入的函数重新构造一个新数组
      this.currentColumns = this.columns.map(function(col, index){
        // 添加一个字段标识当前列排序的状态，后续使用
        // 为了标识当前列的排序状态，默认给每列添加一个_sortType字段，赋值normal，表示默认(即不排序)
        col._sortType = 'normal';
        // 添加一个字段标识当前列在数组中的索引，后续使用
        // _index字段代表当前数据在原始数据中的索引
        col._index = index;
        return col;
      });
    },
    // 将父级数据data传递给v-table的currentData
    makeData: function(){
      this.currentData = this.data.map(function(row, index){
        // 添加一个字段标识当前行在数组中的索引，后续使用
        row._index = index;
        return row;
      });
    },
    // 升序的方法handleSortByAsc
    handleSortByAsc: function(index){
      var key = this.currentColumns[index].key;
      this.currentColumns.forEach(function(col){
        col._sortType = 'normal';
      });
      // 告知排序方式为升序
      this.currentColumns[index]._sortType = "asc";
      this.currentData.sort(function(a, b){
        return a[key] > b[key] ? 1 : -1;
      })
    },
    // 降序的方法handleSortDesc
    handleSortByDesc: function(index){
      var key = this.currentColumns[index].key;
      this.currentColumns.forEach(function(col){
        col._sortType = 'normal';
      });
      // 告知是降序排序
      this.currentColumns[index]._sortType = "desc";
      this.currentData.sort(function(a, b){
        return a[key] < b[key] ? 1 : -1;
      })
    }
  },
  // 监听：如果父级修改了data数据——增加或者删除，v-table的currentData也随之更新
  watch: {
    data() {
      // 调用赋值的方法
      this.makeData();
      // 过滤：确定是已排序的列
      var sortedColumn = this.currentColumns.filter(function(col){
        return col._sortType !== 'normal';
      });
      // 更新后，做一次排序
      if(sortedColumn.length > 0){
        if(sortedColumn[0]._sortType === 'asc'){
          this.handleSortByAsc(sortedColumn[0]._index);
        }else{
          this.handleSortByDesc(sortedColumn[0]._index);
        }
      }
    }
  },
  mounted() {
    // v-table初始化时调用
    this.makeColumns();
    this.makeData();
  }
});