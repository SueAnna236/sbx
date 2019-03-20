// 验证输入框里输入的是数字
function isValueNumber(value){
  // 开头可以有一个-号，至少有一个数字，有一个小数点，小数点后面至少有个数字
  // 开头可以有一个-号，有一个在1到9之间的数字，后面可以跟人一多个任意数字
  // 开头可以有一个-号，跟一个0
  return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value + '');
}
// 数字输入框组件
Vue.component('input-number', {
  // 定义组件的根节点
  template: '<div class="input-number">\
    <input type="text" :value="currentValue" @change="handleChange" autofocus="autofocus" @keydown="addRed">\
    <button @click="handleDown" :disabled="currentValue <= min" v-model="currentValue">-</button>\
    <button @click="handleUp" :disabled="currentValue >= max">+</button>\
  </div>',
  // 因为是独立的组件，应该对每个props进行验证
  props: {
    // 最大值，数字类型，无限大
    max: {
      type: Number,
      default: Infinity
    },
    // 最小值，数字类型，无限小
    min: {
      type: Number,
      default: -Infinity
    },
    // 默认值，数字类型
    value: {
      type: Number,
      default: 0
    },
    // 控制步伐的prop-step
    step: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  // 监听
  watch: {
    // 监听currentValue，是为了当currentValue改变时，更新value
    currentValue: function(val){
      this.$emit('input', val);
      this.$emit('on-change', val);
    },
    // 监听value，即监听父组件是否修改了value的值
    value: function(val){
      this.updateValue(val);
    }
  },
  methods: {
    // 在键盘上按上键+1，按 下键-1
    addRed: function(e){
      if(e.keyCode == 40){
        this.currentValue -= 1;
      }
      if(e.keyCode == 38){
        this.currentValue += 1;
      }
    },
    // 只要不小于最小值就可以减1
    handleDown: function(event){
      if(this.currentValue <= this.min){
        return;
      }
      this.currentValue -=1;
    },
    // 只要不大于最大值就可以加1
    handleUp: function(){
      if(this.currentValue >= this.max){
        return;
      }
      // 点击+号，每次加step=10
      this.currentValue += this.step;
    },
    handleChange: function(event){
      // 去除首尾的空格
      var val = event.target.value.trim();
      var max = this.max;
      var min = this.min;
      // 判定输入的内容是否是数字
      if(isValueNumber(val)){
        // 将输入的内容强制转换为数字类型
        val = Number(val);
        // 将转换后的内容赋给模板内的变量
        this.currentValue = val;
        // 如果输入的值大于规定的最大值，就将规定的最大值赋给模板变量
        if(val > max){
          this.currentValue = max;
        // 如果输入的值小于规定的最小值，就将规定的最小值赋给模板变量
        }else if(val < min){
          this.currentValue = min;
        }
      }else{
        // 将模板变量赋给value
        event.target.value = this.currentValue;
      }
    },
    // 过滤currentValue的值是否符合要求
    updateValue: function(val){
      // 当大于最大值时，取最大值
      if(val > this.max){
        val = this.max;
      }
      // 当小于最小值时，取最小值
      if(val < this.min){
        val = this.min;
      }
      // 将筛选出来符合要求的值赋给currentValue
      this.currentValue = val;
    }
  },
  mounted() {
    // 实例挂载后调用过滤函数
    this.updateValue(this.value);
  }
});