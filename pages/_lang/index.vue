<template>
  <div>
    <nav>
      <NuxtLink :to="$i18n.path('teachers')" class="Header_Link">{{$t('links.teachers')}}</NuxtLink>
      <NuxtLink :to="$i18n.path('students')" class="Header_Link">{{$t('links.students')}}</NuxtLink>
      <NuxtLink :to="$i18n.path('books')" class="Header_Link">{{$t('links.books')}}</NuxtLink>
      <NuxtLink v-if="$i18n.locale === 'en-US'" :to="`/zh-CN` + $route.fullPath" class="Header_Link" active-class="none" exact>
        {{ $t('links.chinese') }}
      </NuxtLink>
      <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header_Link" active-class="none" exact>
        {{ $t('links.english') }}
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