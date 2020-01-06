(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{246:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("前段时间刚看完《JS忍者秘籍》，虽说是15年出版的，有些东西是过时了，但像对原型链、闭包、正则、定时器之类的机制却是不会过时的，里面很多东西都讲的很细，还是值得一读的，本文将对这本书中对定时器机制的部分进行详细的解析，如果喜欢的话可以点波赞/关注，支持一下，希望大家看完本文可以有所收获。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("阅读本文之前，推荐先阅读"),s("a",{attrs:{href:"https://juejin.im/post/5b24b116e51d4558a65fdb70",target:"_blank",rel:"noopener noreferrer"}},[t._v("Js 的事件循环(Event Loop)机制以及实例讲解"),s("OutboundLink")],1),t._v("这篇文章来理解背后发生的事情，本文对事件循环机制不会很仔细的讲解。")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("由于JS的单线程特性，定时器提供了一种跳出单线程限制的方法，即让一段代码在一定毫秒之后，再异步执行。")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("直接引用忍者秘籍中的图片：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("第三点和第四点的解决方法可以参考我之前写的"),s("a",{attrs:{href:"https://juejin.im/post/5a587b46f265da3e3b7a7677#heading-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 实践过程中的几个问题"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("接下来要讲的是第五点和第六点，这两点是最重要，也是本文要重点解析的内容。")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("下面来看忍者秘籍中的栗子：")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("让我们看看这里发生了什么事情：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("让我们回到栗子中：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),s("hr"),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("事实上，关于任务队列并不是只有简单的排队而已，忍者秘籍中提到为了方便，使用了这个概念，如果希望能更清晰的了解背后的机制，再次推荐阅读一下："),s("a",{attrs:{href:"https://juejin.im/post/5b24b116e51d4558a65fdb70",target:"_blank",rel:"noopener noreferrer"}},[t._v("Js 的事件循环(Event Loop)机制以及实例讲解"),s("OutboundLink")],1),t._v("，")]),t._v(" "),t._m(36),t._v(" "),s("p",[t._v("这上面所有一切，都是由js单线程特性导致的，所以会有事件排队、先进先出、setInterval调用被废弃、定时器无法保证准时执行回调函数以及出现setInterval的连续执行，时刻记住这一特性，很多关于事件执行顺序的问题都能想的通，并且找出解决方法。\n")]),t._v(" "),s("h3",{attrs:{id:"点个star支持我一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),s("a",{attrs:{href:"https://github.com/OBKoro1/web_accumulate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),s("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"js忍者秘籍中的定时器机制详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js忍者秘籍中的定时器机制详解","aria-hidden":"true"}},[this._v("#")]),this._v(" JS忍者秘籍中的定时器机制详解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"定时器解决的问题："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时器解决的问题：","aria-hidden":"true"}},[this._v("#")]),this._v(" 定时器解决的问题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"设置和清除定时器："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置和清除定时器：","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置和清除定时器：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/1640c7f6e32c21c3?raw=true",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"注意："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意：","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("定时器的时间间隔设为0，也会有几毫秒的延迟。")]),t._v(" "),s("li",[t._v("在使用"),s("code",[t._v("setTimeout")]),t._v("和"),s("code",[t._v("setInterval")]),t._v("的时候最好将其赋值给一个变量，以便取消定时器。")]),t._v(" "),s("li",[t._v("在使用"),s("code",[t._v("Vue")]),t._v("的时候，"),s("code",[t._v("setTimeout")]),t._v("和"),s("code",[t._v("setInterval")]),t._v("的this指向的是window对象，访问不到组件数据以及方法。")]),t._v(" "),s("li",[t._v("在使用"),s("code",[t._v("Vue")]),t._v("的时候，路由跳转并不会销毁"),s("code",[t._v("setInterval")]),t._v("，但是组件已经销毁了，这会导致问题。")]),t._v(" "),s("li",[t._v("在执行线程中"),s("code",[t._v("setTimeout")]),t._v("/"),s("code",[t._v("setInterval")]),t._v("无法保证准时执行回调函数的。")]),t._v(" "),s("li",[s("code",[t._v("setInterval")]),t._v("调用有可能会被废弃以及"),s("code",[t._v("setInterval")]),t._v("的连续执行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"执行线程中的定时器执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行线程中的定时器执行","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行线程中的定时器执行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/1640ca6240fb3eeb?raw=true",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("首先在0毫秒的时候有一个持续18毫秒的js代码块要执行。")]),t._v(" "),s("li",[t._v("然后在0毫秒的时候设了两个10毫秒延迟的定时器，"),s("code",[t._v("setTimeout")]),t._v("以及"),s("code",[t._v("setInterval")]),t._v(","),s("code",[t._v("setTimeout")]),t._v("先设定。")]),t._v(" "),s("li",[t._v("在第6毫秒的时候有一个发生了鼠标单击事件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件排队。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件排队。","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件排队。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("同时发生了这么多事情，由于js的单线程特性，"),e("strong",[this._v("当线程正在执行状态，有异步事件触发时，它就会排队，并且在线程空闲时才进行执行")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("    这里的异步事件包括：鼠标单击，定时器触发，ajax请求、promise等事件。\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("栗子中首先有一个18毫秒的代码块要执行，在这18毫秒中只能执行这段代码块，"),e("strong",[this._v("其他事件触发了之后只能排队等待执行")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在代码块还在运行期间，第6毫秒的时候，发生了一个鼠标单击事件，以及第10毫秒时的"),e("code",[this._v("setTimeout")]),this._v("和"),e("code",[this._v("setInterval")]),this._v("两个处理程序，这三个事件不能立即执行，而是"),e("strong",[this._v("被添加到等待执行的队列")]),this._v("中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"先进先出-先排队的先执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先进先出-先排队的先执行","aria-hidden":"true"}},[this._v("#")]),this._v(" 先进先出(先排队的先执行)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("18毫秒的时候代码块结束执行，有三个任务在排队等待执行，根据"),e("strong",[this._v("先进先出的原则，此时会先执行click事件")]),this._v("，"),e("code",[this._v("setTimeout")]),this._v("和"),e("code",[this._v("setInterval")]),this._v("将继续排队等待执行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setinterval调用被废弃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setinterval调用被废弃","aria-hidden":"true"}},[this._v("#")]),this._v(" setInterval调用被废弃")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("在click事件执行时，第20毫秒处，第二个"),s("code",[t._v("setInterval")]),t._v("也到期了，因为此时已经click事件占用了线程，所以"),s("code",[t._v("setInterval")]),t._v("还是不能被执行，并且因为此时"),s("strong",[t._v("队列中已经有一个"),s("code",[t._v("setInterval")]),t._v("正在排队等待执行，所以这一次的"),s("code",[t._v("setInterval")]),t._v("的调用将被废弃")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("浏览器不会对同一个setInterval处理程序多次添加到待执行队列。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"settimeout-setinterval无法保证准时执行回调函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-setinterval无法保证准时执行回调函数","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("setTimeout")]),this._v("/"),e("code",[this._v("setInterval")]),this._v("无法保证准时执行回调函数")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("click事件在第28毫秒处结束执行，有两个任务("),s("code",[t._v("setTimeout")]),t._v("和"),s("code",[t._v("setInterval")]),t._v(")正在等待执行，遵循先进先出的原则，"),s("code",[t._v("setTimeout")]),t._v("早于"),s("code",[t._v("setInterval")]),t._v("设定，所以先执行"),s("code",[t._v("setTimeout")]),t._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("so:"),s("strong",[t._v("我们期望在第10毫秒处执行的"),s("code",[t._v("setTimeout")]),t._v("处理程序，最终会在第28毫秒处才开始执行")]),t._v("，这就是上文提到的"),s("code",[t._v("setTimeout")]),t._v("/"),s("code",[t._v("setInterval")]),t._v("无法保证准时执行回调函数。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在30毫秒处，"),e("code",[this._v("setInterval")]),this._v("又触发了，因为队列中已经有"),e("code",[this._v("setInterval")]),this._v("在排队，所以这次的触发又作废了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setinterval的连续执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setinterval的连续执行","aria-hidden":"true"}},[this._v("#")]),this._v(" setInterval的连续执行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("setTimeout")]),this._v("执行结束，在第36毫秒处，队列中的"),e("code",[this._v("setInterval")]),this._v("处理程序才开始执行，"),e("code",[this._v("setInterval")]),this._v("需要执行6毫秒。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("在第40毫秒的时候"),s("code",[t._v("setInterval")]),t._v("再次触发，因为此时"),s("strong",[t._v("上一个"),s("code",[t._v("setInterval")]),t._v("正在执行期间，队列中并没有"),s("code",[t._v("setInterval")]),t._v("在排队，这次触发的"),s("code",[t._v("setInterval")]),t._v("将进入队列等候")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("所以："),e("code",[this._v("setInterval")]),this._v("的处理时长不能比设定的间隔长，否则"),e("code",[this._v("setInterval")]),this._v("将会没有间隔的重复执行")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("第42毫秒的时候，"),s("strong",[t._v("第一个"),s("code",[t._v("setInterval")]),t._v("结束，然后队列中的"),s("code",[t._v("setInterval")]),t._v("立即开始执行")]),t._v("，在48毫秒的时候完成执行。然后50毫秒的时候再次触发"),s("code",[t._v("setInterval")]),t._v("，此时没有任务在排队，将会立即执行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"settimeout按照一定的间隔周期性的触发定时器。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settimeout按照一定的间隔周期性的触发定时器。","aria-hidden":"true"}},[this._v("#")]),this._v(" setTimeout按照一定的间隔周期性的触发定时器。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上文说了，"),e("strong",[e("code",[this._v("setInterval")]),this._v("的处理时长不能比设定的间隔长，否则"),e("code",[this._v("setInterval")]),this._v("将会没有间隔的重复执行")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但是对这个问题，很多情况下，我们并不能清晰的把控处理程序所消耗的时长，为了我们能"),e("strong",[this._v("按照一定的间隔周期性的触发定时器")]),this._v("，忍者秘籍中提供了下面这种使用方法：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际上我不止在忍者秘籍中见过，在很多地方都见过这种技术。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeatMe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repeatMe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行完处理程序的内容后，在末尾再间隔10毫秒来调用该程序，这样就能保证一定是10毫秒的周期调用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"忍者秘籍中关于定时器的其他知识："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#忍者秘籍中关于定时器的其他知识：","aria-hidden":"true"}},[this._v("#")]),this._v(" 忍者秘籍中关于定时器的其他知识：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("定时器不能非常细粒化的控制执行的时间，书中建议在15ms以上。")]),this._v(" "),e("li",[this._v("可以使用定时器来分解长时间运行的任务，这里可以自行谷歌。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"任务队列只有排队这么简单吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务队列只有排队这么简单吗？","aria-hidden":"true"}},[this._v("#")]),this._v(" 任务队列只有排队这么简单吗？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 小结")])}],!1,null,null,null);a.options.__file="忍者秘籍定时器机制.md";e.default=a.exports}}]);