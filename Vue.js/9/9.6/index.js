var app = new Vue({
  el: '#app',
  data: {
    // columns每一项是一个对象，title和可以是必填的
    columns: [
      // title用来标识这列的表头标题，key是对应data中列内容的字段名
      {title: '姓名', key: 'name'},
      // sortable是选填字段，如果值是true，说明该列需要排序
      {title: '年龄', key: 'age', sortable: true},
      {title: '出生日期', key: 'birthday', sortable: true},
      {title: '地址', key: 'address'}
    ],
    data: [
      {
        name: '王小明',
        age: 18,
        birthday: '1999-02-21',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '1992-01-23',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '李小红',
        age: 30,
        birthday: '1999-02-21',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '周小伟',
        age: 19,
        birthday: '1999-02-21',
        address: '北京市朝阳区芍药居'
      },
    ]
  },
  methods: {
    handleAddData: function(){
      this.data.push({
        name: '刘晓填',
        age: 19,
        birthday: '1998-05-30',
        address: '北京市东城区东直门'
      });
    }
  }
})