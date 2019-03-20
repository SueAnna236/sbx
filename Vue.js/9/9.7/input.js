// 通过render函数内的节点使用v-model：动态绑定value，并且监听input事件，把输入的内容通过$emit(input)派发给父组件
Vue.component('vInput', {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  render(h) {
    var _this = this;
    return h('div', [
      h('span', '昵称：'),
      h('input', {
        attrs: {type: 'text'},
        domProps: {value: this.value},
        on: {input: function(event){
          _this.value = event.target.value;
          _this.$emit('input', event.target.value);
        }}
      })
    ]);
  }
})
Vue.component('vTextarea', {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  render(h) {
    var _this = this;
    return h('div', [
      h('span', '留言内容：'),
      h('textarea', {
        attrs: {placeholder: '请输入浏览内容'},
        domProps: {value: this.value},
        ref: 'message',
        on: {input: function(event){
          _this.value = event.target.value;
          _this.$emit('input', event.target.value);
        }}
      })
    ])
  },
  methods: {
    focus(){
      this.$refs.message.focus();
    }
  }
});