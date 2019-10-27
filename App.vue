<script>
  import Test from './Test.vue';

  export default {
    data: function() {
      return {
        text: "",
        message: "Hello World"
      };
    },
    methods: {
      handleBtnPress: function() {
        alert('Btn Press');
      }
    },
    components: {
      Test
    }
  }
</script>

<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
      <Test/>
      <button v-bind:title="message" v-bind:on-press="handleBtnPress"/>
  </view>
</template>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.text-color-primary {
  color: blue;
}
</style>
