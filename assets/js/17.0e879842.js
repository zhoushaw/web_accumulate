(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{259:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("我们都知道，JavaScript 是单线程的，在同一时刻只能处理一个任务，我们会通过 setTimeout()、setInterval()、ajax 和事件处理程序等技术模拟“并行”。但都不是真正意义上的并行:")]),t._v(" "),e("p",[t._v("Web Worker 是 HTML5 标准的一部分，这一规范定义了一套 API，它允许一段 JavaScript 程序运行在主线程之外的另外一个线程中。")]),t._v(" "),e("p",[t._v("这在很大程度上利用了现在不断升级的电脑计算能力：能够在同一时间平行处理两个任务。")]),t._v(" "),e("blockquote",[e("p",[t._v("游泳、健身了解一下："),e("a",{attrs:{href:"http://obkoro1.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"http://obkoro1.com/web_accumulate/accumulate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端积累文档"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/1631b6f52f7e7015.jpeg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("公众号"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/OBKoro1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("这样就让 JS 变成多线程的环境了，我们可以把高延迟、花费大量时间的运算，分给 worker 线程，最后再把结果返回给主线程就可以了，因为时间花费多的任务被 web worker 承担了，主线程就会很流畅了！")]),t._v(" "),e("hr"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/JevMZY?editors=1000",target:"_blank",rel:"noopener noreferrer"}},[t._v("codepen"),e("OutboundLink")],1),t._v(",这里我写了一个 class，里面有详细注释，可以参考一下。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("ol",[t._m(9),t._v(" "),e("li",[e("p",[t._v("字符串形式：")]),t._v(" "),t._m(10),e("p",[e("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/JevMZY?editors=1000",target:"_blank",rel:"noopener noreferrer"}},[t._v("栗子"),e("OutboundLink")],1),t._v("中就是使用这种形式的，方便我们演示。")]),t._v(" "),e("p",[t._v("在项目中：我们可以把worker线程的逻辑写在js文件里面，然后字符串化，然后再export、import，配合webpack进行模块化管理,这样就很容易使用了。")])])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("值得注意的是：它们之间通信是通过拷贝的形式来传递数据的，进行传递的对象需要经过序列化，接下来在另一端还需要反序列化。这就意味着：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),e("p",[t._v("Worker 线程一旦新建成功，就会始终运行，这样有利于随时响应主线程的通信。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),e("p",[t._v("也可以像我给出的"),e("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/JevMZY?editors=1000",target:"_blank",rel:"noopener noreferrer"}},[t._v("栗子"),e("OutboundLink")],1),t._v("一样,把两个报错放在一起写，有报错把信息传出来就好了。")]),t._v(" "),e("hr"),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),e("p",[t._v("Worker 线程能够访问一个全局函数 imprtScripts()来引入脚本，该函数接受 0 个或者多个 URI 作为参数。")]),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),e("p",[t._v("因为 worker 创造了另外一个线程，不在主线程上，相应的会有一些限制，我们无法使用下列对象：")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),e("hr"),t._v(" "),t._m(40),t._v(" "),e("ol",[e("li",[t._m(41),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/JevMZY?editors=1010",target:"_blank",rel:"noopener noreferrer"}},[t._v("栗子"),e("OutboundLink")],1),t._v("最下方有。")])]),t._v(" "),t._m(42)]),t._v(" "),t._m(43),t._v(" "),e("p",[t._v("因为主线程与 worker 线程之间的通信是拷贝关系，当我们要传递一个巨大的二进制文件给 worker 线程处理时(worker 线程就是用来干这个的)，这时候使用拷贝的方式来传递数据，无疑会造成性能问题。")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),e("p",[t._v("下方栗子出自"),e("a",{attrs:{href:"https://juejin.im/post/59c1b3645188250ea1502e46#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈 HTML5 Web Worker"),e("OutboundLink")],1)]),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),e("p",[t._v("没有找到具体的制定日期，有篇博客是在 10 年的 7 月份写的，也就是说 web worker 至少出现了八年了，以下兼容摘自"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v("：")]),t._v(" "),e("p",[t._v("Chrome：4, Firefox：3.5, IE：10.0, Opera：10.6, Safari：4")]),t._v(" "),e("p",[t._v("现在兼容还是做的比较好的，如果实在不放心的话：")]),t._v(" "),t._m(51),e("hr"),t._v(" "),t._m(52),t._v(" "),e("p",[t._v("Web Worker的出现，给浏览器带来了后台计算的能力，把耗时的任务分配给worker线程来做，在很大程度上缓解了主线程UI渲染阻塞的问题，提升页面性能。")]),t._v(" "),e("p",[t._v("使用起来也不复杂，以后有复杂的问题，记得要丢给我们浏览器的后台(web worker)来处理")]),t._v(" "),e("p",[t._v("看完之后，一定要研究一下文中的栗子，自己鼓捣鼓捣，实践出真知！")]),t._v(" "),e("p",[t._v("PS: 推荐一下我上个月写的"),e("a",{attrs:{href:"https://juejin.im/post/5bcad1326fb9a05cda779d0b",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手教你使用WebSocket"),e("OutboundLink")],1),t._v("，感兴趣的可以看一下。")]),t._v(" "),e("p",[t._v("以上2018.11.25")]),t._v(" "),e("p",[t._v("参考资料：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker 使用教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/59c1b3645188250ea1502e46",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈HTML5 Web Worker"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"点个star支持我一下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),e("a",{attrs:{href:"https://github.com/OBKoro1/web_accumulate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),e("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),e("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前端er来学习一下webworker吧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端er来学习一下webworker吧","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端er来学习一下webWorker吧")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("当我们有些任务需要花费大量的时间，进行复杂的运算")]),this._v("，就会导致页面卡死：用户点击页面需要很长的时间才能响应，因为前面的任务还未完成，后面的任务只能排队等待。对用户来说，这样的体验无疑是糟糕的，web worker 就是为了解决这种花费大量时间的复杂运算而诞生的！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"webworker-的作用：创建-worker-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webworker-的作用：创建-worker-线程","aria-hidden":"true"}},[this._v("#")]),this._v(" WebWorker 的作用：创建 worker 线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("WebWorker 允许在主线程之外再创建一个 worker 线程，"),s("strong",[this._v("在主线程执行任务的同时，worker 线程也可以在后台执行它自己的任务，互不干扰")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"主线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 主线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"我们先来看一下栗子："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我们先来看一下栗子：","aria-hidden":"true"}},[this._v("#")]),this._v(" 我们先来看一下栗子：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建-worker-对象："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-worker-对象：","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建 worker 对象：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主线程调用"),s("code",[this._v("new Worker()")]),this._v("构造函数，新建一个 worker 线程，构造函数的参数是一个 url，生成这个 url 的方法有两种：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("脚本文件：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://~.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("因为 worker 的两个限制：")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源")]),t._v("。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("worker 不能读取本地的文件")]),t._v("(不能打开本机的文件系统"),e("code",[t._v("file://")]),t._v(")，它所加载的脚本必须来自网络。")])])]),t._v(" "),e("p",[t._v("可以看到限制还是比较多的，如果要使用这种形式的话，在项目中推荐把文件放在静态文件夹中，打包的时候直接拷贝进去，这样我们就可以拿到固定的链接了，")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n    //  worker线程 do something\n    `")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转成二进制对象")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blob "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成url")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载url")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"主线程的其他-api："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主线程的其他-api：","aria-hidden":"true"}},[this._v("#")]),this._v(" 主线程的其他 API：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1-主线程与-worker-线程通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-主线程与-worker-线程通信","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 主线程与 worker 线程通信:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("worker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("它们"),e("strong",[t._v("相互之间的通信可以传递对象和数组")]),t._v("，这样我们就可以根据相互之间传递的信息来进行一些操作，比如可以设置一个"),e("code",[t._v("type")]),t._v("属性，当值为"),e("code",[t._v("hello")]),t._v("时执行什么函数，当值为"),e("code",[t._v("world")]),t._v("的时候执行什么函数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("strong",[this._v("我们不能传递不能被序列化的数据")]),this._v("，比如函数，会抛出错误的。")]),this._v(" "),s("li",[this._v("在一端改变数据，另外一端不会受影响，因为数据不存在引用，是拷贝过来的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_2-监听-worker-线程返回的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-监听-worker-线程返回的信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 监听 worker 线程返回的信息")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("worker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'父进程接收的数据：'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// doSomething();")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_3-主线程关闭-worker-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-主线程关闭-worker-线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 主线程关闭 worker 线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这也是 Worker 比较耗费计算机的计算资源("),s("code",[this._v("CPU")]),this._v(")的原因，一旦使用完毕，就应该关闭 worker 线程。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("worker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("terminate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主线程关闭worker线程")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_4-监听错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-监听错误","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 监听错误")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// worker线程报错")]),t._v("\nworker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.filename - 发生错误的脚本文件名；e.lineno - 出现错误的行号；以及 e.message - 可读性良好的错误消息")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onerror'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"worker-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-线程","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker 线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"self-代表-worker-进程自身"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#self-代表-worker-进程自身","aria-hidden":"true"}},[this._v("#")]),this._v(" self 代表 worker 进程自身")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("worker 线程的执行上下文是一个叫做"),s("code",[this._v("WorkerGlobalScope")]),this._v("的东西跟主线程的上下文(window)不一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以使用"),s("code",[this._v("self")]),this._v("/"),s("code",[this._v("WorkerGlobalScope")]),this._v("来访问全局对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"监听主线程传过来的信息："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听主线程传过来的信息：","aria-hidden":"true"}},[this._v("#")]),this._v(" 监听主线程传过来的信息：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主线程传来的信息：'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"发送信息给主线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送信息给主线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 发送信息给主线程")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这条信息'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'来自worker线程'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"worker-线程关闭自身"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-线程关闭自身","aria-hidden":"true"}},[this._v("#")]),this._v(" worker 线程关闭自身")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"worker-线程加载脚本："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-线程加载脚本：","aria-hidden":"true"}},[this._v("#")]),this._v(" worker 线程加载脚本：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("importScripts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http~.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http~2.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("脚本中的全局变量都能被 worker 线程使用。")])]),this._v(" "),s("li",[s("p",[this._v("脚本的下载顺序是不固定的，但执行时会按照传入 importScripts() 中的文件名顺序进行，这个过程是同步的。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"worker-线程限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-线程限制","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker 线程限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("window 对象")]),this._v(" "),s("li",[this._v("document 对象")]),this._v(" "),s("li",[this._v("DOM 对象")]),this._v(" "),s("li",[this._v("parent 对象")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("我们可以使用下列对象/功能")]),this._v("：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("浏览器：navigator 对象")])]),t._v(" "),e("li",[e("p",[t._v("URL：location 对象，只读")])]),t._v(" "),e("li",[e("p",[t._v("发送请求：XMLHttpRequest 对象")])]),t._v(" "),e("li",[e("p",[t._v("定时器：setTimeout/setInterval，在 worker 线程轮询也是很棒！")])]),t._v(" "),e("li",[e("p",[t._v("应用缓存：Application Cache")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"多个-worker-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个-worker-线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 多个 worker 线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("在主线程内可以创建多个 worker 线程")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[e("strong",[t._v("worker 线程内还可以新建 worker 线程，使用同源的脚本文件创建")]),t._v("。")]),t._v(" "),e("p",[t._v("在 worker 线程内再新建 worker 线程就不能使用"),e("code",[t._v("window.URL.createObjectURL(blob)")]),t._v("，需要使用同源的脚本文件来创建新的 worker 线程，因为我们无法访问到"),e("code",[t._v("window")]),t._v("对象。")]),t._v(" "),e("p",[t._v("这里不方便演示，跟在主线程创建 worker 线程是一个套路，只是改成了脚本文件形式创建 worker 线程。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"线程间转移二进制数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程间转移二进制数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程间转移二进制数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("幸运的是，Web Worker 提供了一中转移数据的方式，允许主线程把二进制数据直接转移给子线程")]),this._v("。这种方式比原先拷贝的方式，有巨大的性能提升。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("一旦数据转移到其他线程，原先线程就无法再使用这些二进制数据了，这是为了防止出现多个线程同时修改数据的麻烦局面")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建二进制数据")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" uInt8Array "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uint8Array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 32MB")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uInt8Array "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uInt8Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uInt8Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递前长度:33554432")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串形式创建worker线程")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myTask "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n    onmessage = function (e) {\n        var data = e.data;\n        console.log('worker:', data);\n    };\n`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myTask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myWorker "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用这个格式(a,[a]) 来转移二进制数据")]),t._v("\nmyWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uInt8Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buffer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("uInt8Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buffer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送数据、转移数据")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uInt8Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递后长度:0，原先线程内没有这个数据了")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("二进制数据有：File、Blob、ArrayBuffer 等类型，也允许在 worker 线程之间发送，"),s("strong",[this._v("这对于影像处理、声音处理、3D 运算等就非常方便了，不会产生性能负担")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"应用场景："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景：","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用场景：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("数学运算")])]),t._v(" "),e("li",[e("p",[t._v("图像、影音等文件处理")])]),t._v(" "),e("li",[e("p",[t._v("大量数据检索")]),t._v(" "),e("p",[t._v("比如用户输入时，我们在后台检索答案，或者帮助用户联想，纠错等操作.")])]),t._v(" "),e("li",[e("p",[t._v("耗时任务都丢到 webworker 解放我们的主线程。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"兼容："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容：","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Worker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"结语："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语：","aria-hidden":"true"}},[this._v("#")]),this._v(" 结语：")])}],!1,null,null,null);r.options.__file="webWorker上手.md";s.default=r.exports}}]);