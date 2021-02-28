// // import _ from 'lodash'

// // console.log(_.join(['a', 'b', 'c'], '***'))

// // index.js
// // 异步代码
// import(/* webpackChunkName: 'a'*/ './a').then(function(a) {
//     console.log(a)
//   })
  
//   import(/* webpackChunkName: 'b'*/ './b').then(function(b) {
//     console.log(b)
//   })

// function getComponent() {
//     // 使用异步的形式导入lodash, default: _ 表示用_代指lodash
//     return import('lodash').then(({ default: _ }) => {
//         var element = document.createElement("div")
//         element.innerHTML = _.join(['hello', 'world'], '-')
//         return element
//     })
// }

// getComponent().then(element => {
//     document.body.appendChild(element)
// })

// 异步代码
// import(/* webpackChunkName: 'a'*/ './a').then(function(a) {
//     console.log(a)
// })

// import(/* webpackChunkName: 'b'*/ './b').then(function(b) {
//     console.log(b)
// })

// import(/* webpackChunkName: 'use-lodash'*/ 'lodash').then(function(_) {
//     console.log(_.join(['1', '2']))
// })

// document.addEventListener('click', function () {
//     import(/* webpackChunkName: 'use-lodash' */ 'lodash').then(function (_) {
//         console.log(_.join(['3', '4']))
//     })
// })

// document.addEventListener('click', function () {
//     const element = document.createElement('div')
//     element.innerHTML = 'Hello World'
//     document.body.appendChild(element)
// })

// document.addEventListener('click', function () {
//     import('./click.js').then(({default: func}) => {
//         func()
//     })
// })

document.addEventListener('click', function () {
    import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
        func()
    })
})