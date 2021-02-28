// 全局引入
import '@babel/polyfill'

// 测试 ES6 语法是否通过 babel 转译
const array = [1, 2, 3]
const isEs6 = () => console.log(...array)

isEs6()

const arr = [new Promise(() => {}), new Promise(() => {})]
arr.map(item => console.log(item))

// ES6
// import sum from './vendor/sum'
// console.log('sum(1, 2)=' + sum(1, 2))
// CommonJs
// var minus = require('./vendor/minus')
// console.log('minus(1, 2)=' + minus(1, 2))
// AMD
// require(['./vendor/multi'], function (multi) {
//     console.log('multi(1, 2)=' + multi(1, 2))
// })