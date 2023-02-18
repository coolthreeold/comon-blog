// 主题切换
export const themeSwitch = (prop: string , model: string , color: string): void => {
  if(model === 'white') {
    document.documentElement.style.setProperty('--color-font-color' , '#fff');
    document.documentElement.style.setProperty('--dead-colour' , '75%');
  } else {
    document.documentElement.style.setProperty('--color-font-color' , '#000');
    document.documentElement.style.setProperty('--dead-colour' , '100%');
  }
  document.documentElement.style.setProperty(prop , color);
}

export const customTheme = (color: string): void => {
  document.documentElement.style.setProperty('--color-custom-color' , color);
}