<template>
  <div class="container">
    <!-- 透明盒子 -->
    <div class="container__content">
      <!-- 导航 -->
      <div class="nav">
        <div class="nav__wrap">
          <div class="nav__wrap__left">
            <span class="nav__wrap__left__item">
              <el-icon class="icon"><HomeFilled /></el-icon>
              <span class="nav__wrap__left__item__text">首页</span>
            </span>
            <span class="nav__wrap__left__item">
              <!-- <img src="@/assets/images/icon/icon-liuyan.png" class="nav-wrap-left-item-icon"/> -->
              <el-icon class="icon"><Comment /></el-icon>
              <span class="nav__wrap__left__item__text">留言</span>
            </span>
            <span class="nav__wrap__left__item" @click="handleClassIfy">
              <el-icon class="icon"><MoreFilled /></el-icon>
              <el-dropdown ref="classify" trigger="contextmenu" style="margin-right: 30px">
                <span class="nav__wrap__left__item__text"> 分类 </span>
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
          <div class="nav__right">
            <span ref="searchShow" @click="searchHide" class="nav__right--btn">
              <el-icon><Search /></el-icon>
            </span>
            <div ref="searchClass" class="nav__right--search">
              <el-input @blur="searchBlur" size="large" placeholder="Please Input" :prefix-icon="Search"/>
            </div>
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
let searchClass = ref();
let searchShow = ref();

const searchHide = () => {
  searchShow.value.style.display = 'none';
  searchClass.value.style.display = 'block';
  searchClass.value.className += ' translate1__x';
}

const searchBlur = () => {
  searchClass.value.className.replace(' translate1__x' , ' translate2__x');
  setTimeout(() => {
    searchClass.value.style.display = 'none';
    searchShow.value.style.display = 'block';
  } , 1500)
}


const handleClassIfy = () => {
  classify.value.handleOpen()
}
</script>

<style scoped lang='scss'>
// @mixin bg-img($url) {
  // filter: brightness(var(--dead-colour));
  // background-color: rgba(var(--color-bgcolor));
  // background-image: var(--bg-url);
  // // background-size: cover;
  // // background-repeat: no-repeat;
  // background-size: 100% 100%;
  // background-attachment: fixed;
// }
.container {
  width: 100%;
  height: 100%;
  // filter: brightness(var(--dead-colour));
  // background-color: rgba(var(--color-bgcolor));
  // background-image: var(--bg-url);
  // background-size: cover;
  // background-repeat: no-repeat;
  // // background-size: 100% 100%;
  // // background-attachment: fixed;
  // overflow: hidden;

  .container__content {
    opacity: 0.7;
    
    // 导航
    .nav {
      height: .875rem;
      width: 100%;
      font-size: .2rem;
      // background-color: var(--color-custom-color);

      .nav__wrap {
        max-width: 17.5rem;
        height: .875rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav__wrap__left__item {
          padding: 0 .25rem;

          .icon {
            height: .2625rem;
            line-height: .2625rem;
            vertical-align: middle;
          }

          .nav__wrap__left__item__text {
            color: var(--color-font-color);
            height: .2625rem;
            font-size: var(--font-size);
            line-height: .2625rem;
            margin-left: .0625rem;
          }
        }

        .nav__right {
          width: 2.75rem;
          height: .875rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;

          ::v-deep .is-focus {
            box-shadow: none;
          }

          .nav__right--btn {
            display: block;
            width: .5rem;
            height: .5rem;
            text-align: center;
            cursor: pointer;

            // .el-icon {
            //   line-height: 40px;
            //   height: 40px;
            // }
          }

          ::v-deep .el-input__wrapper {
            box-shadow: none;
            background-color: var(--color-custom-color);

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