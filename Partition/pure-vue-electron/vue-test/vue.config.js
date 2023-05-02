// eslint-disable-next-line @typescript-eslint/no-var-requires
var webpack = require('webpack')

module.exports = {
  
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        // extraResources: ['src/settings'],  패키지에 추가후 별도로 읽기 
        appId: 'test',
        productName: 'test',
        win: {
          icon: 'src/assets/logo.png',
        },
        linux: {
          icon: 'src/assets/logo.png' // 'build/icons/icon.png'  해볼것 
        }
      },
    },
  }
}
