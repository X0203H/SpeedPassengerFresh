<template>
  <view class="content">
    <!-- 轮播 -->
    <swiper
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      class="banner"
    >
      <swiper-item>
        <view class="swiper-item">
          <image src="/static/images/home/banner-1.jpg" />
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="/static/images/home/banner-2.jpg" />
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="/static/images/home/banner-3.jpg" />
        </view>
      </swiper-item>
    </swiper>
    <!-- 推荐 -->
    <view class="recommend">
      <navigator
        class="item"
        url="/pages/classify/classify"
        open-type="switchTab"
        v-for="item in store.state.meun"
        :key="item.id"
      >
        <image :src="item.pic"></image>
        <view class="name">{{ item.name }}</view>
      </navigator>
    </view>
    <!-- 限时优惠 -->
    <view class="flash_sale">
      <view class="title">
        <view class="big">限时优惠</view>
        <view class="endTime">
          <view class="pla">距结束：</view>
          <van-count-down use-slot :time="time" @change="onChange">
            <text class="item">{{
              timeData.hours >= 10 ? timeData.hours : "0" + timeData.hours
            }}</text>
            :
            <text class="item">
              {{
                timeData.minutes >= 10
                  ? timeData.minutes
                  : "0" + timeData.minutes
              }}</text
            >
            :
            <text class="item">
              {{
                timeData.seconds >= 10
                  ? timeData.seconds
                  : "0" + timeData.seconds
              }}</text
            >
          </van-count-down>
        </view>
      </view>
      <scroll-view class="list" :scroll-x="true">
        <navigator
          url="/pages/classify/classify"
          open-type="switchTab"
          class="items"
          v-for="item in flashData"
          :key="item.id"
        >
          <image :src="item.coverImage" />
          <view class="qianggo">限时抢购</view>
          <view class="name">{{ item.name }}</view>
          <view class="money">
            <text>{{ item.discountPrice }}元/斤</text>
            <text class="del">{{ item.marketPrice }}元/斤</text>
          </view>
        </navigator>
      </scroll-view>
    </view>
    <!-- 新人专享 -->
    <view class="flash_sale">
      <view class="title">
        <view class="big">新人专享</view>
        <view class="endTime">新人优惠享不停</view>
      </view>
      <scroll-view class="list" :scroll-x="true">
        <navigator
          url="/pages/classify/classify"
          open-type="switchTab"
          class="items"
          v-for="item in newComerList"
          :key="item.id"
        >
          <image :src="item.coverImage" />
          <view class="qianggo">限时抢购</view>
          <view class="name">{{ item.name }}</view>
          <view class="money">
            <text>{{ item.discountPrice }}元/斤</text>
            <text class="del">{{ item.marketPrice }}元/斤</text>
          </view>
        </navigator>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "../../api/api.ts";
import store from "../../store";

const time = ref(new Date("2023-8-25 23:59:59").getTime() - Date.now());
const timeData = ref({});
const flashData = ref([]);
const newComerList = ref([]);

const onChange = (e) => {
  timeData.value = e.detail;
};

console.log(store.state);
const getData = () => {
  http.get("/index", {}, false).then(({ data: res }) => {
    console.log(res);
    flashData.value = res.discountList;
    newComerList.value = res.newComerList;
    console.log(flashData.value, newComerList.value);
  });
};
getData();
</script>

<style lang="scss">
/* 轮播 */
.banner {
  width: 100%;

  .swiper-item {
    width: 100%;

    image {
      width: 100%;
    }
  }
}

/* 公共样式 */
$padding: 0 20rpx;
$margin: 20px 0;

@mixin commity($padding, $margin) {
  padding: $padding;
  margin: $margin;
}

/* 推荐 */
.recommend {
  display: flex;
  justify-content: space-between;
  @include commity($padding, $margin);

  .item {
    width: 24%;
    margin: 0 20rpx;
    text-align: center;

    image {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }

    .name {
      font-size: 24rpx;
    }
  }
}

/* 限时优惠 */
.flash_sale {
  width: 100%;
  white-space: nowrap;

  .title {
    display: flex;
    align-items: center;
    @include commity($padding, $margin);

    .big {
      color: "#333333";
      font-size: 48rpx;
      font-weight: 500;
    }

    .endTime {
      display: flex;
      margin-left: 20rpx;
      color: #999999;

      .item {
        display: inline-block;
        width: 22px;
        margin-right: 5px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #333333;
        border-radius: 2px;
      }
    }
  }

  .list {
    display: flex;
    height: 400rpx;
    padding: 4rpx 20rpx;
    min-width: 100%;

    .items {
      display: inline-block;
      width: 300rpx;
      padding: 0 20rpx;

      image {
        width: 260rpx;
        height: 260rpx;
        background-color: #333333;
      }

      .del {
        margin-left: 10rpx;
        text-decoration: line-through;
        color: #999999;
      }
    }
  }
}
</style>
