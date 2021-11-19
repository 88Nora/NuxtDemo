<template>
	<div class="showMsg">
		<p>用户信息输出：</p>{{userInfo.value.text}}
	</div>
	
</template>
<script>
import {info} from './PublicContent.vue'

export default {
	name:'teachers',
	data() {
		return {
			userInfo:info
		};
	}
}
</script>
<style>
.teacher{
	font-size: 20px;
}
.showMsg{
	white-space: pre-wrap;
}
</style>