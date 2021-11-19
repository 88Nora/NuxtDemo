<template>
	<div>
		<h1>{{$t('books.title')}}</h1>
		<ul>
			<li v-for="item in booksList" :key="item.id" class="books">
				{{item.name}}
			</li>
		</ul>

		<ShowContent/>
	</div>
	
</template>
<script>
import ShowContent from '~/components/ShowContent.vue';

export default {
	//通过layout属性，指定当前页面使用的布局组件
	data(){
		return{
			booksList:this.$t('books.book')
		}
	},
	layout:'booksLayout',
	components:{ShowContent}
}
</script>
<style>
.books{
	font-size: 20px;
}
</style>