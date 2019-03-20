<template>
  <div>Hello {{ name }}
    <v-title title="Vue组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <img src="./images/image.png"/>
    </p>
  </div>
</template>

<script>
// 带入组件
  import vTitle from './title.vue';
  import vButton from './button.vue';

  export default {
    data() {
      return {
        name: 'Vue.js'
      }
    },
    components: {
      vTitle,
      vButton
    },
    methods: {
      handleClick(e){
        console.log(e);
      }
    }
  }
</script>

<style scoped>
  div {
    color: #f60;
    font-size: 24px;
  }
  p>img {
    width: 200px;
  }
</style>