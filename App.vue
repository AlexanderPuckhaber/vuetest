<script>
  import Test from './Test.vue';

  export default {
    components: {
      Test
    }
  }
</script>

<template>
  <view class="container">
    <Test/>
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
