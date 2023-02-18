<template>
  <div class="container">
    <div class="content">
    <h1>ihkfslkdjf</h1>
      <!-- 背景切换/回到顶部 -->
      <div class="theme-set">
        <button @click="themeSwitchClick">
          切换
        </button>
        <el-color-picker v-model="switchColor" show-alpha :predefine="predefineColors" @change="colorChange"/>
        <span class="test">测试</span>
      </div>
      <!-- 导航栏 -->
    </div>
  </div>
</template>

<script lang='ts' setup>

import { ref } from 'vue';
import { themeSwitch , customTheme } from '@/theme';

// 引入自定义组件


const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

let model = ref('white');
let switchColor = ref('#F2AA42');

const themeSwitchClick = () => {
  if(model.value == 'white') {
    themeSwitch('--color-bgcolor' , model.value , 'rgba( 0 , 0 , 0 , .6)');
  } else {
    themeSwitch('--color-bgcolor' , model.value , 'rgba( 255 , 255 , 255 , .6)');
  }
  // themeSwitch('--color--bgcolor' , switchColor.value , model.value);
  model.value = model.value == 'white' ? 'black' : 'white';
}

const colorChange = (color: string) => {
  console.log(color);
  customTheme(color);
}



</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100%;
    // opacity: 0.8;
  filter: brightness(var(--dead-colour));
  background-color: rgba(var(--color-bgcolor));
  background-image: url('@/assets/images/bg-img_1.png');
  background-size: cover;
  // background-size: 100%;
  // object-fit: cover;
  background-repeat: no-repeat;
  // box-shadow: 100px 100px 100px 100px rgba(var(--color-bgcolor)) inset;

  .content {
    opacity: 0.7;

    // 主题设置/返回顶部
    .theme-icon {
      font-size: 30px;
    }

    .test {
      font-size: 30px;
    }
  }
}

</style>