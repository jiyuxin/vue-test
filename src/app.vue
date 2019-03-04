<template>
  <div class="container">
    <!-- header -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- content -->
    <router-view></router-view>
    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/first">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/second">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="third">
        <span class="mui-icon mui-icon mui-icon-weixin"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="fouth">
        <span class="mui-icon mui-icon mui-icon-qq"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    color: white;
  }
  .container {
    padding-top: 40px;
    padding-bottom: 50px;
  }
</style>