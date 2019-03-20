// 标签页嵌套的组件
Vue.component('pane', {
  name: 'pane',
  // 需要控制标签页的显示与隐藏
  template: '<div class="pane" v-show="show">\
    <slot></slot>\
  </div>',
  data: function(){
    return {
      show: true
    }
  },
  // 用一个唯一的值来标识pane
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  data: function(){
    return {
      show: true
    }
  },
  methods: {
    updateNav(){
      this.$parent.updateNav();
    }
  },
  watch: {
    label(){
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  }
})