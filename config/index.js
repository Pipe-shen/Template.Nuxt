// 根据不同环境切换不同设置的变量
const config = require(`./config.${process.env.NODE_ENV}`)

export default config
