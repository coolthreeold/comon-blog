<template>
  <!-- 工具栏 -->
  <div class="instrument">
    <!-- 背景切换 -->
    <div class="instrument__theme" @click="themeSwitchClick">
      <el-icon v-if="cut" class="icon"><TurnOff /></el-icon>
      <el-icon v-else class="icon"><Open /></el-icon>
    </div>
      
    <!-- 弹出设置 -->
    <div class="instrument__set">
      <el-popover :visible="visible" placement="right" :width="200" trigger="manual" :popper-class="'instrument__set--popover'" @hide="popoverHide">
        <div class="theme__set__aside">
          <div class="theme__set__aside--close" style="text-align: right; margin: 0">
              <el-icon @click="visible = false" class="icon"><CloseBold /></el-icon>
          </div>
          <div class="theme__set__aside--picker">
            <span>背景色设置</span>
            <el-color-picker v-model="switchColor" show-alpha :predefine="predefineColors" @change="colorChange"/>
          </div>
          
        </div>
        <template #reference>
          <div @click="visible = true" class="instrument__set--btn">
            <el-icon class="icon"><Setting /></el-icon>
          </div>
        </template>
      </el-popover>
    </div>
    <!-- 弹出设置 -->
    
  </div>
</template>

<script lang='ts' setup>

import { ref  } from 'vue';
import { themeSwitch , customTheme } from '@/theme';

let model = ref('white');
let cut = ref(false);
const predefineColors = ref([
  'rgba(178, 178, 223)',
  'rgba(247, 101, 167)',
  'rgba(136, 134, 213)'
])


let switchColor = ref('rgba(178, 178, 223)');

const themeSwitchClick = () => {
  if(model.value == 'white') {
    themeSwitch('--color-bgcolor' , model.value , 'rgba( 0 , 0 , 0 , .6)');
  } else {
    themeSwitch('--color-bgcolor' , model.value , 'rgba( 255 , 255 , 255 , .6)');
  }
  // themeSwitch('--color--bgcolor' , switchColor.value , model.value);
  model.value = model.value == 'white' ? 'black' : 'white';
  cut.value = !cut.value;
}

const colorChange = (color: string) => {
  customTheme(color);
}

const popoverHide = () => {
  visible.value = false
}

// 设置
const visible = ref(false);

</script>

<style scoped lang='scss'>
.instrument {
  position: fixed;
  bottom: 50px;
  left: 20px;
  
  @mixin instrument__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: var(--color-bgcolor);

    &:hover {
      color: #fff;
      background-color: var(--color-custom-color);
    }
  }

  // 主题色切换  亮色 / 暗色
  .instrument__theme {
    @include instrument__box;
    margin-bottom: 10px;
  }

  // 弹出设置
  .instrument__set {
    @include instrument__box;

    .instrument__set--btn {
      @include instrument__box;
    }
  }
}

.icon {
  width: 18px;
  height: 18px;
}
</style>