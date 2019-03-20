<template>
  <div>
    <h1>首页</h1>
    <p>{{ count }}</p>
    <div>
      随机增加：
      <Counter :number="number"></Counter>
    </div>
  </div>
</template>

<script>
import Counter from './counter.vue';
export default {
  components: {
    Counter
  },
  data() {
    return {
      number: 0
    }
  },
  created() {
    this.$bus.on('add', this.handleAddRandom);
  },
  computed: {
    count(){
      return this.$store.state.count;
    },
    list(){
      return this.$store.getters.filteredList;
    },
    listCount(){
      return this.$store.getters.listCount;
    }
  },
  methods: {
    handleAddRandom(num){
      this.number += num;
    },
    handleIncrement(){
      this.$store.commit({
        type: 'increment',
        count: 10
      });
    },
    handleDecrease(){
      this.$store.commit('decrease');
    },
    handleAsyncIncrement(){
      this.$store.dispatch('asyncIncrement').then(() => {
        console.log(this.$store.state.count);
      })
    },
    handleActionIncrement(){
      this.$store.dispatch('increment');
    }
  },
  beforeDestroy() {
    this.$bus.off('add', this.handleAddRandom);
  }
}
</script>

