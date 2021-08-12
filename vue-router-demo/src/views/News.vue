<template>
  <section>
    <div class="news" style="border: 1px solid #ccc">
      <h2>嵌套路由</h2>
      <router-link to="/news/today">今日新闻</router-link> |
      <router-link to="/news/history">历史新闻</router-link>
      <router-view></router-view>
    </div>
  </section>
</template>
