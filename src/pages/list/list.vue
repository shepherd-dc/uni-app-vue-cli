<template>
  <view class="content">
    <view class="section">
      <view class="section__title">vertical scroll</view>
      <scroll-view
        scroll-y
        style="height: 400px;"
        @crolltoupper="upper"
        @scrolltolower="lower"
        @scroll="scroll"
        :scroll-into-view="toView"
        :scroll-top="scrollTop"
      >
        <view
          v-for="item in order"
          :key="item"
          :id="item"
          :class="['scroll-view-item', 'bc_'+item]"
          @tap="navigateToDetail(item)"
        ></view>
      </scroll-view>

      <view class="btn-area">
        <button size="mini" @tap="tap">click me to scroll into view</button>
        <button size="mini" @tap="tapMove">click me to scroll</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      toView: 'red',
      scrollTop: 0,
      order: ['red', 'yellow', 'blue', 'green', 'red']
    }
  },
  methods: {
    navigateToDetail (type) {
      uni.navigateTo({
        url: `../detail/detail?type=${type}`
      })
    },
    upper (e) {
      console.log(e)
    },
    lower (e) {
      console.log(e)
    },
    scroll (e) {
      console.log(e)
    },
    tap (e) {
      for (var i = 0; i < this.order.length; ++i) {
        if (this.order[i] === this.toView) {
          this.toView = this.order[i + 1]
          break
        }
      }
    },
    tapMove (e) {
      this.scrollTop = this.scrollTop + 50
    }
  }
}
</script>

<style>
.scroll-view-item {
  height: 200px;
  width: 200px;
  background-color: #0faeff;
}
.bc_green {
  background-color: green;
}
.bc_red {
  background-color: red;
}
.bc_yellow {
  background-color: yellow;
}
.bc_blue {
  background-color: blue;
}
</style>
