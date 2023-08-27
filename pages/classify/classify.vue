<template>
  <van-tree-select
    :items="items"
    height="100vh"
    :main-active-index="mainActiveIndex"
    :active-id="activeId"
    @click-nav="onClickNav"
    @click-item="onClickItem"
  >
    <!-- <image src="https://img.yzcdn.cn/vant/apple-1.jpg"  /> -->
    <van-card
      v-for="item in dataPro"
      slot="content"
      :desc="item.shopDesc"
      :title="item.name"
      :thumb="item.coverImage"
    >
      <view
        slot="bottom"
        style="
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
        "
      >
        <text style="width: 60px; display: flex; flex-wrap: wrap">
          <text style="color: red; display: inline-block; width: 100%">{{
            item.discountPrice
          }}</text>
          <text style="color: #cccccc">{{ item.marketPrice }}</text>
        </text>
        <text
          style="
            display: inline-block;
            background-color: #924aff;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border-radius: 50%;
            color: white;
            font-size: 15px;
          "
          @click="add(item)"
        >
          +
        </text>
      </view>
    </van-card>
  </van-tree-select>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import http from "../../api/api.ts";
import useStore from "../../store/index";
const store = useStore;
console.log(888, store);
const dataPro = ref([]);
const items = ref([
  {
    // 导航名称
    text: "新鲜水果",
  },
  {
    // 导航名称
    text: "蔬瓜彩品",
  },
  {
    // 导航名称
    text: "满地飞禽",
  },
  {
    // 导航名称
    text: "酒水饮料",
  },
  {
    // 导航名称
    text: "海鲜水产",
  },
]);
const mainActiveIndex = ref(0);
const activeId = ref([]);
const onClickNav = async (val) => {
  console.log(val.detail.index);
  const { data } = await http.get("/good/lists", {
    page: 1,
    limit: 20,
    discountPrice: "asc",
    category: val.detail.index + 1,
  });
  data.forEach((item) => {
    item.quantity = 1;
  });
  console.log(data);
  dataPro.value = data;
};
const add = (val) => {
  console.log(val);
  console.log(999, store);
  store.commit("pushCar", val);
};
onMounted(async () => {
  const { data } = await http.get("/good/lists", {
    page: 1,
    limit: 20,
    discountPrice: "asc",
    category: 1,
  });
  data.forEach((item) => {
    item.quantity = 1;
  });
  dataPro.value = data;
  console.log(1111, data);
});
</script>

<style lang="scss"></style>
