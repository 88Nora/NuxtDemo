<template>
	<div class="Header">
		<NuxtLink :to="localePath('students')" class="Header_Link">{{$t('links.students')}}</NuxtLink>
      	<NuxtLink :to="localePath('books')" class="Header_Link">{{$t('links.books')}}</NuxtLink>
		<NuxtLink :to="localePath('/')" class="Header_Link">{{$t('links.home')}}</NuxtLink>
      	<NuxtLink :to="switchLocalePath($i18n.locale === 'en' ? 'zh' : 'en')" class="Header_Link" active-class="none" exact>
        	<span v-if="$i18n.locale === 'en'">{{ $t('links.chinese') }}</span>
			<span v-if="$i18n.locale === 'zh'">{{ $t('links.english') }}</span>		
      	</NuxtLink>
		<nuxt/>
	</div>
</template>
<style>
.Header{
	margin-top: 50px;
}
.Header_Link {
  font-size: 16px;
  padding: 7px 12px;
  border: 1px solid;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 20px;
}
</style>