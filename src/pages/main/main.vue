<template>
    <view class="content">
        <view v-if="hasLogin" class="hello">
            <uni-list>
                <uni-list-item title="标题文字" show-arrow="false"></uni-list-item>
                <uni-list-item title="标题文字"></uni-list-item>
                <uni-list-item title="标题文字" show-badge="true" badge-text="12"></uni-list-item>
                <uni-list-item title="禁用状态" disabled="true" show-badge="true" badge-text="12"></uni-list-item>
            </uni-list>
            <uni-list>
                <uni-list-item title="标题文字" note="描述信息"></uni-list-item>
                <uni-list-item title="标题文字" note="描述信息" show-badge="true" badge-text="12"></uni-list-item>
            </uni-list>
            <uni-list>
                <uni-list-item title="标题文字" thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
            </uni-list>
            <uni-list>
                <uni-list-item title="标题文字" 
                    show-extra-icon="true" 
                    :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
                </uni-list-item>
            </uni-list>
            <uni-list>
                <uni-list-item title="标题文字" show-switch="true" show-arrow="false"></uni-list-item>
            </uni-list>
            <view style="margin-top: 20px;">
                <button type="primary" @tap="navigateToList">测试跳转至列表页</button>
            </view>
        </view>
        <view v-if="!hasLogin" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view>
    </view>
</template>

<script>
    import { mapState } from 'vuex'
	import uniList from '../../components/uni-list/uni-list.vue'
	import uniListItem from '../../components/uni-list-item/uni-list-item.vue'

    export default {
		components: {
			uniList,
			uniListItem
		},
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		methods: {
			navigateToList () {
				uni.navigateTo({
					url: '../list/list'
				})
			}
		}
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 25px;
    }

    .ul {
        font-size: 15px;
        color: #8f8f94;
        margin-top: 25px;
    }

    .ul>view {
        line-height: 25px;
    }
</style>
