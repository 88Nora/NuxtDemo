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
import {defineComponent} from '@nuxtjs/composition-api'
import { Form, FormItem, Input, Button } from 'element-ui'
import {studentStore} from '~/state/student'

export default defineComponent({
	name:'PublicContent',
	components:{ Form, FormItem, Input, Button},
	setup() {	

		const { userInfo , onSave, username, age } = studentStore();
		
		
		return {
			userInfo , onSave, username, age
		}
	},
})

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