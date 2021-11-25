<template>
	<div class="showMsg">
		<p>用户信息输出：</p>{{userInfo}}
	</div>
	
</template>
<script>

import { studentStore } from '~/state/student'

export default {
	name:'teachers',
	setup(){
		const { userInfo } = studentStore()
		return{
			userInfo
		}
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