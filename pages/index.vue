<template>
  <div>
    <nav>
      <!-- 
        localePath– 返回给定页面的本地化 URL。
        第一个参数可以是路由的路径或名称，也可以是更复杂路由的对象。
        可以将区域设置代码作为第二个参数传递以生成特定语言的链接： 
      -->
      <NuxtLink :to="localePath('teachers')" class="Header_Link">{{$t('links.teachers')}}</NuxtLink>
      <NuxtLink :to="localePath('students')" class="Header_Link">{{$t('links.students')}}</NuxtLink>
      <NuxtLink :to="localePath('books')" class="Header_Link">{{$t('links.books')}}</NuxtLink>

      <!-- switchLocalePath – 以另一种语言返回当前页面的链接 -->
      <NuxtLink :to="switchLocalePath($i18n.locale === 'en' ? 'zh' : 'en')" class="Header_Link" active-class="none" exact>
        	<span v-if="$i18n.locale === 'en'">{{ $t('links.chinese') }}</span>
			    <span v-if="$i18n.locale === 'zh'">{{ $t('links.english') }}</span>		
      </NuxtLink>
    </nav>
    <p class="welcome">{{$t('title')}}</p>
    <ColorModePicker/>
   
  </div>
</template>

<script>
export default {
  head: {
    title: 'Demo of nuxt'
  }
}
</script>

<style>
  .welcome{
    font-size: 30px;
    font-weight: bold;
  }

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