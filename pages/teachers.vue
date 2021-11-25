<template>
	<div>
		<h1>{{$t('teachers.title')}}</h1>
		<ul>
			<li v-for="item in teacherList" :key="item.id" class="teacher">
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
			teacherList:this.$t('teachers.teacher')
		}
	},
	layout:'teacherLayout',
	components:{PublicContent,ShowContent}
}
</script>
<style>
.teacher{
	font-size: 20px;
}
</style>