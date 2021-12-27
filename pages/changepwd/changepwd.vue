<template>
    <view style="padding: 20px">
        <update-password :hasBackButton="true" />
    </view>
</template>

<script>
    import updatePassword from '@/components/update-password.vue'
    export default {
        components: {
            updatePassword
        },
        data() {
            return {

            }
        },
        onShow() {
            uni.setNavigationBarTitle({
                title: this.$i18n.t('updatePwd.text.title')
            })
        },
        methods: {

        }
    }
</script>

<style>
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}
	/* #endif */
</style>
