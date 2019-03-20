var vm = new Vue({
  el: "#app",
  data: {
    list: [
      {id: 1, name: 'iPhone7', price: 6188, count: 1, isSelected: false},
      {id: 2, name: 'iPad Pro', price: 5888, count: 1, isSelected: false},
      {id: 3, name: 'MacBook Pro', price: 21488, count: 1, isSelected: false}
    ],
    isAllSelected: false,
    checked: []
  },
  computed: {
    // 计算总价的方法
    totalPrice: function(){
      var total = 0;
      for(var i = 0; i < this.list.length; i++){
        var item = this.list[i];
        total += item.price * item.count;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
    }
  },
  methods: {
    handleReduce: function (index) {
      if(this.list[index].count === 1) return;
      this.list[index].count--;
    },
    handleAdd: function(index){
      this.list[index].count++;
    },
    handleRemove: function (index) {
      this.list.splice(index, 1);
    },
    // 全选
    checkedAll: function(){
      // 遍历list，将每个对象的isSelected都改为isAllSelected
      for(var i = 0; i < this.list.length; i++){
        this.list[i].isSelected = this.isAllSelected;
      }
    },
    // 选中或者取消选中
    handleSelect: function(){
      var result = true;
      for(var i=0;i<this.list.length;i++){
        result = result && this.list[i].isSelected;
      }
      this.isAllSelected = result;
    }
  }
})