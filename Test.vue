<template>
    <view class="soft-container">
        <view class="searchPart">
            <text-input
                class="text-input"
                placeholder="What item are you looking for?"
                v-model="search"
                v-on:keyup.enter="getSearch"
            />

            <button title="Go" v-bind:on-press="getSearch" />
        </view>

        <view class="data">
            <text>Name | Price | Store</text>
            <flat-list :style="{ height: 200, overflow: 'hidden'}" :data=items>
                <view render-prop-fn="renderItem">
                    <text>{{args.item.name}} | {{args.item.price}} | {{args.item.store}}</text>
                </view>
            </flat-list>
        </view>
    </view>
</template>

<script>
import SheetService from './SheetService';

export default {
    name:'Test',
    data() {
        return {
            search: '',
            items: '',
        }
    },
    methods: {
        async getSearch() {
            this.items = await SheetService.getSearch(this.search);
        },
    }
};
</script>

<style>
.soft-container {
  background-color: #EEEEEE;
}
.text-input {
    font-size: 30px;
}
.searchPart {
    padding-top: 170px;
}
.data {
    background-color: lightgray;
}
</style>