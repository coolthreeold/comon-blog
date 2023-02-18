<template>
  <!-- 暗色/亮色 -->
  <div class="theme-set">
      <div class="theme-cut" @click="themeSwitchClick">
        <!-- <img src="@/assets/images/icon/icon-yueliang.png" class="icon"/> -->
        <el-icon v-if="cut" class="icon"><TurnOff /></el-icon>
        <el-icon v-else class="icon"><Open /></el-icon>
      </div>
      
      <div class="theme-cut">
        <el-popover :visible="visible" placement="right" :width="200" :heihgt="500" :popper-class="'el-popover-set'">
          <div class="theme-cut-set">
            <div style="text-align: right; margin: 0">
                <img src="@/assets/images/icon/icon-close.png" @click="visible = false" class="icon"/>
                <!-- <el-icon class="icon"><Open /></el-icon> -->
            </div>
            <div class="color-picker">
              <span>背景色设置</span>
              <el-color-picker v-model="switchColor" show-alpha :predefine="predefineColors" @change="colorChange"/>
            </div>
            
          </div>
          <template #reference>
            <div @click="visible = true" class="theme-cut-btn">
              <!-- <img src="@/assets/images/icon/icon-shezhi.png" class="icon"/> -->
              <el-icon class="icon"><Setting /></el-icon>
            </div>
          </template>
        </el-popover>
      </div>
      <!-- 弹出设置 -->
    
  </div>
</template>

<script lang='ts' setup>

import { ref } from 'vue';
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

// 设置
const visible = ref(false);

</script>

<style scoped lang='scss'>
.theme-set {
  position: fixed;
  bottom: 50px;
  left: 20px;
  
  .theme-cut {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bgcolor);
    border-radius: 5px;

    .theme-cut-btn {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .theme-cut-set {
      display: flex;
      justify-content: flex-end;
    }

    &:hover {
      background-color: var(--color-custom-color);
      color: #fff;
    }

  }

  .theme-cut:first-child {
    margin-bottom: 10px;
  }

}

.icon {
  width: 18px;
  height: 18px;
}


.theme-cut-set {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  &>div {
    width: 100%;
  }

  .color-picker {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  ::v-deep {
    .el-color-picker__trigger {
      border: none;

      &:hover {
        border: none;
      }
    }

    .el-icon {
      display: none;
    }
  }
}
  
</style>