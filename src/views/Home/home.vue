<template>
  <div class="container">
    <div class="content">
      <!-- 导航 -->
      <div class="nav">
        <div class="nav-wrap">
          <div class="nav-left">
            <span class="nav-wrap-left-item">
              <el-icon class="icon"><HomeFilled /></el-icon>
              <span class="nav-wrap-left-item-text">首页</span>
            </span>
            <span class="nav-wrap-left-item">
              <!-- <img src="@/assets/images/icon/icon-liuyan.png" class="nav-wrap-left-item-icon"/> -->
              <el-icon class="icon"><Comment /></el-icon>
              <span class="nav-wrap-left-item-text">留言</span>
            </span>
            <span class="nav-wrap-left-item" @click="handleClassIfy">
              <el-icon class="icon"><MoreFilled /></el-icon>
              <el-dropdown ref="classify" trigger="contextmenu" style="margin-right: 30px">
                <span class="nav-wrap-left-item-text"> 分类 </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>选项一</el-dropdown-item>
                    <el-dropdown-item>选项二</el-dropdown-item>
                    <el-dropdown-item>选项三</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </span>
          </div>
          <div class="nav-right">
            <el-input class="w-50 m-2" size="large" placeholder="Please Input" :prefix-icon="Search"/>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="main">
        <!-- 侧边栏 -->
        <!-- wrap -->
        <div class="main-wrap">
          <el-button>测试</el-button>
        </div>
      </div>
      <!-- 背景切换/回到顶部 -->
      <themeCut />
    </div>
  </div>
</template>

<script lang='ts' setup>
import themeCut from './component/themeCut.vue';
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
let classify = ref();
const handleClassIfy = () => {
  classify.value.handleOpen()
}
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
    // opacity: 0.8;
  filter: brightness(var(--dead-colour));
  background-color: rgba(var(--color-bgcolor));
  background-image: url('@/assets/images/bg/bg-img_1.png');
  background-size: cover;
  // background-size: 100%;
  // object-fit: cover;
  background-repeat: no-repeat;
  // box-shadow: 100px 100px 100px 100px rgba(var(--color-bgcolor)) inset;

  .content {
    opacity: 0.7;
    
    // 导航
    .nav {
      height: 70px;
      width: 100%;
      font-size: 16px;
      // background-color: var(--color-custom-color);

      .nav-wrap {
        max-width: 1500px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav-wrap-left-item {
          padding: 0 20px;

          .icon {
            vertical-align: middle;
          }

          .nav-wrap-left-item-text {
            color: var(--color-font-color);
            height: 21px;
            vertical-align: middle;
            line-height: 21px;
            margin-left: 5px;
          }


        }

        .nav-right {
          ::v-deep .is-focus {
            box-shadow: none;
          }
          ::v-deep .el-input__wrapper {
            box-shadow: none;
            background-color: var(--color-custom-color);
            
            
            // &:hover {
            //   box-shadow:0 , 0, 0 , 1 var(--color-custom-color);
            // }

            // &:focus {
            //   box-shadow:0 , 0, 0 , 1 var(--color-custom-color) inset!important;;
            // }

            .el-input__inner::placeholder {
              color: var(--color-font-color);
            }
       

            .el-icon {
              color: var(--color-font-color);
            }
          }


        }
      }
    }


  }
}

</style>