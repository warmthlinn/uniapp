<!-- 蓝色简洁登录页面 -->
<template>
	<view class="login-bg">
		<br /><br /><br /><br />
		<view class="t-b">
			您好，
			<br />
			欢迎使用{{$t('login.text.title')}}
		</view>
		<view class="t-login">
			<form class="cl">
				<view class="t-a">
					<image src="@/static/images/user.png"></image>
					<input type="number" name="phone" placeholder="请输入手机号码" maxlength="11" v-model="phone" />
				</view>
				<view class="t-a">
					<image src="@/static/images/pwd.png"></image>
					<input type="password" name="code" maxlength="6" placeholder="请输入密码" v-model="pwd" />
				</view>
				<button @tap="login()">登 录</button>
				<view class="t-c">
					<text class="t-c-txt" @tap="reg()">注册账号</text>
					<text @tap="forgotPwd()">忘记密码</text>
				</view>
			</form>
			<view class="t-f"><text>—————— 其他登录方式 ——————</text></view>
			<view class="t-e cl">
				<view class="t-g" @tap="wxLogin()"><image src="@/static/images/wx2.png"></image></view>
				<view class="t-g" @tap="zfbLogin()"><image src="@/static/images/qq2.png"></image></view>
				<view class="t-g" @tap="zfbLogin()"><image src="@/static/images/wb.png"></image></view>
			</view>
		</view>
		<image class="img-a" src="@/static/images/bg1.png"></image>
	</view>
</template>
<script>
export default {
	/**
	 * 2020年12月9日  李新雷编写（练习）  适用所有app登录
	 * vue版本简洁又美观的登录页面（个人感觉插件市场的登录都不太好看，哈哈 O(∩_∩)O）
	 * 如果需要注册（注册可以设计在登录按钮下方），直接复制该页面稍微改动即可
	 */
	data() {
		return {
			phone: '', //手机号码
			pwd: '' //密码
		};
	},
	onLoad() {},
	methods: {
		//当前登录按钮操作
		login() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入手机号', icon: 'none' });
				return;
			}
			if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
				uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				return;
			}
			if (!that.pwd) {
				uni.showToast({ title: '请输入密码', icon: 'none' });
				return;
			}
			uni.showToast({ title: '登录成功！', icon: 'none' });
		},
		//忘记密码
		forgotPwd() {
			uni.showToast({ title: '忘记密码', icon: 'none' });
		},
		//立刻注册
		reg() {
			uni.showToast({ title: '注册账号', icon: 'none' });
		}
	}
};
</script>
<style>
.img-a {
	width: 100%;
	position: absolute;
	bottom: 0;
}
.login-bg {
	height: 100vh;
	background-image: url(../../static/images/bg3.png);
}

.t-login {
	width: 580rpx;
	padding: 55rpx;
	margin: 0 auto;
	font-size: 28rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
	z-index: 9;
}
.t-login button {
	font-size: 28rpx;
	background: #5677fc;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
}

.t-login input {
	padding: 0 20rpx 0 120rpx;
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	background: #f6f6f6;
	border: 1px solid #f6f6f6;
	font-size: 28rpx;
	border-radius: 50rpx;
}

.t-login .t-a {
	position: relative;
}

.t-login .t-a image {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	left: 40rpx;
	top: 28rpx;
	padding-right: 20rpx;
}

.t-login .t-d {
	text-align: center;
	color: #999;
	margin: 80rpx 0;
}

.t-login .t-c {
	text-align: right;
	color: #666666;
	margin: 30rpx 30rpx 40rpx 0;
}

.t-login .t-c .t-c-txt {
	margin-right: 300rpx;
}

.t-login .t-e {
	text-align: center;
	width: 600rpx;
	margin: 40rpx auto 0;
}

.t-login .t-g {
	float: left;
	width: 33.33%;
}

.t-login .t-e image {
	width: 70rpx;
	height: 70rpx;
}

.t-login .t-f {
	text-align: center;
	margin: 80rpx 0 0 0;
	color: #999;
}

.t-login .t-f text {
	margin-left: 20rpx;
	color: #b9b9b9;
	font-size: 27rpx;
}

.t-login .uni-input-placeholder {
	color: #aeaeae;
}

.cl {
	zoom: 1;
}

.cl:after {
	clear: both;
	display: block;
	visibility: hidden;
	height: 0;
	content: '\20';
}

.t-b {
	text-align: left;
	font-size: 42rpx;
	color: #fff;
	font-weight: bold;
	line-height: 70rpx;
	padding: 0 55rpx;
	margin-bottom: 20rpx;
}

</style>
