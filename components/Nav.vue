<template>
    <nav class="sidebar">

      <!-- 图标 -->
      <ul class="icon-list">


        <!-- 1 首页 -->
        <li class="icon-item">

          <!-- 使用nuxt-link进行页面跳转index -->
          <nuxt-link to="/" class="icon-link">
            <img src="/public/img/Nav/shouye.png" alt="首页" class="icon-image">
          </nuxt-link>

        </li>
  
        <!-- 2 分类 -->
        <li class="icon-item">

          <!--href标签跳转-->
          <nuxt-link to="/tags" class="icon-link">
            <img src="/public/img/Nav/fenglei.png" alt="分类" class="icon-image">
          </nuxt-link>

        </li>
      </ul>
  
      <!-- 中间的 -->
      <div class="middle-text">
        <span class="vertical-text">Home</span>
        <span class="vertical-text">☆</span>
        <span class="vertical-text">MyTube</span>
      </div>
    </nav>
  </template>
  

  <style scoped>
  .sidebar {
    background-color: #ffffff;
    width: 80px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 0%;
    border-right: 2px solid pink;
    z-index: 100;
  }
  
  .icon-list {
    list-style-type: none;
    padding: 0;
    width: 50%;
    margin-top: 10px; /* 仅设置上外边距 */
  margin-right: 10px; /* 仅设置右外边距 */
  margin-bottom: 40px; /* 仅设置下外边距 */
  margin-left: 15px; /* 仅设置左外边距 */
  }
  
  .icon-item {
    padding: 0;
    /* width: 50px; */
    list-style-type: none;
    margin: 15% 14;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease; 
  }
  
   /* .icon-item:hover {
    transform: translateX(6px);
    box-shadow: 0 5px 15px rgba(44, 38, 38, 0.671);
    } */


  .icon-link {
    padding: 10px 20px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    margin: 5px 0;
    text-align: center;
    width: 80%;
  }
  


  .icon-image {
    width: 90%;
    height: 30px;
  }


  .middle-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 15px;
    padding-bottom: 200%;
    font-family: Arial, sans-serif;
    color: pink;
    font-size: 2em;
  }
  
  .vertical-text {
    writing-mode: vertical-lr; /* 竖排文字 */
    text-orientation: sideways; /* 文字朝左 */
    transform: rotate(-180deg); /* 旋转180度 */
  }
  </style>