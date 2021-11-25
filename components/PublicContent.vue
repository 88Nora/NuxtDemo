<template>
	<div class="userInfoTable">
		<h2 class="userTitle">用户信息表</h2>
		<Form class="form">
			<FormItem>
				<Input type="primary" placeholder="please enter username" v-model="username" clearable></Input>
			</FormItem>
			<FormItem>
				<Input placeholder="please enter age" v-model="age" clearable></Input>
			</FormItem>	
			<el-row>
				<Button type="primary" @click="onSave">Save</Button>
			</el-row>
					
		</Form>
		
	</div>
</template>

<script>
import {ref,reactive, toRefs, computed} from '@nuxtjs/composition-api'
import { Form, FormItem, Input, Button } from 'element-ui'
const userMsg = reactive({
	username:"张三",
	age:12
})

const userInfo = {text:''}

export default {
	name:'PublicContent',
	components:{ Form, FormItem, Input, Button},
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