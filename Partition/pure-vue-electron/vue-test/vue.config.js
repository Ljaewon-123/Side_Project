// eslint-disable-next-line @typescript-eslint/no-var-requires
var webpack = require('webpack')

module.exports = {
  
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        // extraResources: ['src/settings'],
        appId: 'test',
        productName: 'test',
        win: {
          icon: 'src/assets/logo.png',
        },
        
      },
    },
  }
}
