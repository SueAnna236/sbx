Vue.directive('clickoutside', {
  bind: function(el, binding, vnode){
    function documentHandler(e){
      // contains判断元素A是否包含了元素B
      if(el.contains(e.target)){
        return false;
      }
      // 判断当前的指令v-clickoutside有没有写表达式
      if(binding.expression){
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    // 将函数documentHandler作为句柄绑定在document的click事件上
    document.addEventListener('click', documentHandler);
  },
  unbind: function(el, binding){
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
})