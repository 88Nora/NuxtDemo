<template>
	<div class="userInfoTable">
		<h2 class="userTitle">用户信息表</h2>
		<el-form class="form">
			<el-form-item>
				<el-input type="primary" placeholder="please enter username" v-model="username" clearable></el-input>
			</el-form-item>
			<el-form-item>
				<el-input placeholder="please enter age" v-model="age" clearable></el-input>
			</el-form-item>	
			<el-row>
				<el-button type="primary" @click="onSave">Save</el-button>
			</el-row>
					
		</el-form>
		
	</div>
</template>

<script>
import {ref,reactive, toRefs, computed} from '@nuxtjs/composition-api'

const userMsg = reactive({
	username:"张三",
	age:12
})

const userInfo = {text:''}

export default {
	name:'PublicContent',
	setup() {	
		userInfo.text = computed(() => {
			return "姓名：" + userMsg.username + "\n\n年龄：" + userMsg.age;
		})

		var onSave = () =>{
			alert("Saved successfully")
		}
		
		return {
			...toRefs(userMsg),onSave
		}
	},
}

export const info = ref(userInfo);
</script>

<style>
.userInfoTable{
	margin-bottom: 50px;
}
.userTitle{
	margin-top: 100px;
}
.form{
	width:300px;
	height: 150px;
}
</style>