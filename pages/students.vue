<template>
	<div>
		<h1>{{$t('students.title')}}</h1>
		<ul>
			<li v-for="item in studentList" :key="item.id" class="student">
				{{item.name}}
			</li>
		</ul>

		<PublicContent/>
		<ShowContent/>
	</div>
	
</template>
<script>
import PublicContent from '~/components/PublicContent.vue';
import ShowContent from '~/components/ShowContent.vue';

export default {
	//通过layout属性，指定当前页面使用的布局组件
	data(){
		return{
			studentList:this.$t('students.student')
		}
	},
	layout:'studentLayout',
	components:{PublicContent,ShowContent}
}
</script>
<style>
.student{
	font-size: 20px;
}
</style>