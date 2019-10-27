<template>
    <view class="soft-container">
        <text-input
          class="text-input"
          placeholder="What item are you looking for?"
          v-model="text"
          v-on:keyup.enter="submit"
        />
        <text>{{text}}</text>
        <text>{{stuff}}</text>
        <button title="Go" v-bind:on-press="submit" />
    </view>
</template>

<script>
import axios from 'axios';

export default {
    name:"Test",
    data: {
        text: "Banana",
        stuff: "test2"
    },
    methods: {
        submit: function (event) {
            
            let url = 'http://128.61.29.108:3000/api/merchants?s=' + this.text;
            axios.get(url)
            .then((response) => {
                Vue.set(data.stuff, "ok");
                Vue.set(data.stuff, response);
                alert(response.name);
            })
            .catch(error => alert(error));
        }
    }
}
</script>

<style>
.soft-container {
  background-color: #EEEEEE;
}
.text-input {
    font-size: 30px;
}
</style>