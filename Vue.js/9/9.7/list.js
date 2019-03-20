Vue.component('list', {
  props: {
    list: {
      type: Array,
      default: function(){
        return [];
      }
    }
  },
  // 列表数据list为空时，渲染一个"列表为空"的信息提示点；不为空时，每个list-item应包含昵称、留言内容和回复按钮3个子节点。
  render(h) {
    var _this = this;
    var list = [];
    // 遍历每条留言
    this.list.forEach(function(msg, index){
      var node = h('div', {attrs: {class: 'list-item'}}, [
        h('span', msg.name + ':'),
        h('div', {attrs: {class: 'list-msg'}}, [
          h('p', msg.message),
          h('a', {attrs: {class: 'list-replay'}, on: {
            click: function(){
              _this.handleReply(index);
            }
          }}, '回复'),
          h('b', '/'),
          h('a', {attrs: {class: 'list-delete'}, on: {
            click: function(){
              _this.handleDelete(index);
            }
          }}, '删除')
        ])
      ])
      list.push(node);
    });
    if(this.list.length){
      return h('div', {
        attrs: {class: 'list'},
      }, list);
    }else{
      return h('div', {
        attrs: {class: 'list-nothing'}
      }, '留言列表为空');
    } 
  },
  methods: {
    handleReply: function(index){
      this.$emit('reply', index);
    },
    handleDelete: function(index) {
      this.$emit('delete', index);
    }
  }
})