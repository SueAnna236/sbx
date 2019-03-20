var app = new Vue({
  el: '#app',
  data: {
    // 留言的昵称、内容、列表数据需要从APP中获取
    username: '',
    message: '',
    list: []
  },
  methods: {
    // 数组存储了所有的留言内容，通过函数handleSend给list添加留言数据，添加成功后，将textarea文本框清空
    handleSend: function(){
      if(this.username === ''){
        window.alert('请输入昵称');
        return
      }
      if(this.message === ''){
        window.alert('请输入留言内容');
        return
      }
      this.list.push({
        name: this.username,
        message: this.message
      });
      this.message = '';
    },
    handleReply: function(index){
      var name = this.list[index].name;
      this.message = '回复@' + name + ':';
      this.$refs.message.focus();
    },
    handleDelete: function(index){
      this.list.splice(index, 1);
    }
  }
})