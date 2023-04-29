const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  devServer: {
    proxy: {
      "/hhh": {
        target: "http://localhost:8082",
        ws: true, // 默认为true，打开websocket
        changeOrigin: false, // 默认为true，用于控制请求头中的host值；如果为false，则会把请求的实际发送端口给后端，否则将告诉后端端口与它一致
        // 让后端服务器收到的url是localhost:8082/users而不是localhost:8082/hhh/users
        pathRewrite: {
          "^/hhh": "",
        },
      },
    },
  },
})
