(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{258:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("在浏览器众多缓存中的HTTP缓存可能很多人对这个的概念并没有很清晰，每个人都知道进入一次网页之后再刷新一次页面，加载速度会比首次加载快非常多，每个人都知道这是浏览器缓存的magic，但是对此背后的原因可能不甚了解...")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("我们实际上是在谈论下面这两种情况:")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("如上图，浏览器对静态资源的HTTP缓存有两种情况，一种是强缓存(本地缓存)，另一种是弱缓存(协商缓存)。")]),t._v(" "),s("hr"),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("由上图可以知道当浏览器请求一个静态资源时的HTTP流程：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("强缓存不发送请求，直接从缓存中取。")]),t._v(" "),s("p",[t._v("弱缓存需要发送一个请求，验证这个文件是否可以使用（有没有被改动过）。")]),t._v(" "),s("hr"),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("强缓存是利用Expires或者Cache-Control，让原始服务器为文件设置一个过期时间，在多长时间内可以将这些内容视为最新的。")]),t._v(" "),s("p",[t._v("若时间未过期，则命中强缓存，使用缓存文件不发送请求。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("可缓存性:")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("到期设置：")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("其他设置：")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("更多设置，移动"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1)]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("指定缓存到期GMT的绝对时间，如果设了max-age，max-age就会覆盖expires，如果expires到期需要重新请求。")]),t._v(" "),t._m(28),s("p",[t._v("有一个问题是由于使用具体时间，如果时间表示出错或者没有转换到正确的时区都可能造成缓存生命周期出错。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),s("p",[t._v("在测试的时候，看到命中强缓存时，有两种状态，200 (from memory cache) cache & 200 (from disk cache)，于是去找了一下这两者的区别：")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("更详细的介绍推荐这篇"),s("a",{attrs:{href:"https://blog.csdn.net/baidu_38742725/article/details/77181078",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),t._m(36),t._v(" "),s("p",[t._v("如果强缓存时间过期，或者没有设置，导致未命中的话。就进入到了弱缓存的阶段了，")]),t._v(" "),t._m(37),t._v(" "),s("p",[t._v("Last-Modified与If-Modified-Since是一对报文头，属于http 1.0。")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),s("p",[t._v("ETag与If-None-Match是一对报文，属于http 1.1。")]),t._v(" "),t._m(43),t._v(" "),s("p",[t._v("ETag机制类似于乐观锁机制，如果请求报文的ETag与服务器的不一致，则表示该资源已经被修改过来，需要发最新的内容给浏览器。")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),s("hr"),t._v(" "),t._m(55),t._v(" "),s("p",[t._v("F5刷新导致强缓存失效。")]),t._v(" "),s("p",[t._v("ctrl+F5强制刷新页面强缓存，弱缓存都会失效。")]),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),s("hr"),t._v(" "),t._m(59),t._v(" "),s("p",[t._v("通过网络重复请求资源既缓慢，成本又高，缓存和重用以前获取的资源的能力成为优化性能很关键的一个方面,也是大厂面试时很频繁出现的内容，掌握好这块知识点是非常重要的，希望本文能给你带来些收获。")]),t._v(" "),t._m(60),t._v(" "),s("h3",{attrs:{id:"点个star支持我一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),s("a",{attrs:{href:"https://github.com/OBKoro1/web_accumulate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),s("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"谈论http缓存时我们在谈论什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#谈论http缓存时我们在谈论什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 谈论HTTP缓存时我们在谈论什么")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"当我们在谈论http缓存时我们在谈论什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当我们在谈论http缓存时我们在谈论什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 当我们在谈论HTTP缓存时我们在谈论什么:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e32ac608a1146?raw=true",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"缓存流程："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存流程：","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存流程：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"浏览器第一次请求资源时："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器第一次请求资源时：","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器第一次请求资源时：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e323d0879019f?raw=true",alt:"图片出自网络"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("浏览器"),e("strong",[this._v("第一次请求资源时，必须下载所有的资源，然后根据响应的header内容来决定，如何缓存资源")]),this._v("。可能采用的是强缓存，也可能是弱缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"浏览器后续请求资源时的匹配流程："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器后续请求资源时的匹配流程：","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器后续请求资源时的匹配流程：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e33ba0484fb14?raw=true",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("强缓存阶段：先在本地查找该资源，如果发现该资源，并且其他限制也没有问题(比如:缓存有效时间)，就命中强缓存，返回200，直接使用强缓存，并且不会发送请求到服务器")]),this._v(" "),e("li",[this._v("弱缓存阶段：在本地缓存中找到该资源，发送一个http请求到服务器，服务器判断这个资源没有被改动过，则返回304，让浏览器使用该资源。")]),this._v(" "),e("li",[this._v("缓存失败阶段(重新请求)：当服务器发现该资源被修改过，或者在本地没有找到该缓存资源，服务器则返回该资源的数据。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"强缓存与弱缓存的区别："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存与弱缓存的区别：","aria-hidden":"true"}},[this._v("#")]),this._v(" 强缓存与弱缓存的区别：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("获取资源形式")]),this._v("： 都是从缓存中获取资源的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("状态码")]),this._v("： 强缓存返回200(from cache),弱缓存返回304状态码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("请求(最大区别)")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"强缓存："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存：","aria-hidden":"true"}},[this._v("#")]),this._v(" 强缓存：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Cache-Control")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Cache-Control 是http1.1中为了弥补"),e("code",[this._v("Expires")]),this._v("的缺陷而加入的，当Expires和Cache-Control同时存在时，Cache-Control优先级高于Expires。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("选项")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("public")]),this._v("： 服务器端和浏览器端都能缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("private")]),this._v(": 只能浏览器端缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("no-cache")]),this._v(":  强制浏览器在使用cache拷贝之前先"),e("strong",[this._v("提交一个http请求到源服务器进行确认")]),this._v("。http请求没有减少，会减少一个响应体(文件内容),这种个选项类似弱缓存。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("only-if-cached")]),this._v(": 表明客户端只接受已缓存的响应，并且不要向原始服务器检查是否有更新的拷贝。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("max-age=60")]),this._v("：设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。 这里是60秒")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("no-store")]),this._v(": 不缓存，使用协商缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("must-revalidate")]),this._v(": 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\nCache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" must"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("revalidate\nCache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31536000")]),t._v("\nCache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" must"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("revalidate\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"http1-0时代的缓存-expires-pragma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http1-0时代的缓存-expires-pragma","aria-hidden":"true"}},[this._v("#")]),this._v(" http1.0时代的缓存 Expires+Pragma")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Expires用于设置缓存到期时间")]),this._v("：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Expires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" Jun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Pragma禁用缓存：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Pragma : no-cache")]),this._v(" 表示防止客户端缓存，需要强制从服务器获取最新的数据；")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Pragma "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只有这一个用法 禁用缓存，强制从服务器获取最新的数据； ")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"强缓存命中-from-memory-cache-from-disk-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存命中-from-memory-cache-from-disk-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" 强缓存命中 from memory cache & from disk cache")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("memory cache: 将资源存到"),e("strong",[this._v("内存")]),this._v("中，从内存中获取。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("disk cache：将资源缓存到"),e("strong",[this._v("磁盘")]),this._v("中，从磁盘中获取。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("二者最大的区别在于："),e("strong",[this._v("当退出进程时，内存中的数据会被清空，而磁盘的数据不会")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"弱缓存："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弱缓存：","aria-hidden":"true"}},[this._v("#")]),this._v(" 弱缓存：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Last-Modified & if-modified-since:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("last-modified是web服务器认为文件的最后修改时间，"),e("code",[this._v("last-modified")]),this._v("是第一次请求文件的时候，"),e("strong",[this._v("服务器返回")]),this._v("的一个属性。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Last"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" Jun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("第二次请求这个文件时，浏览器把"),e("code",[this._v("If-Modified-Since")]),e("strong",[this._v("发送给服务器")]),this._v("，询问该时间之后文件是否被修改过。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("If"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Since"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" Jun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跟Last-Modified的值一样")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("ETag & If-None-Match")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("ETag是一个文件的唯一标志符")]),this._v("。就像一个哈希或者指纹，每个文件都有一个单独的标志，只要这个文件发生了改变，这个标志就会发生变化。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("ETag")]),this._v("也是首次请求的时候，服务器返回的:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ETag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8F759D4F67D66A7244638AD249675BE2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 长这样")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("If-None-Match")]),this._v("也是浏览器发送到服务器验证，文件是否改变的:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("If"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("None"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8F759D4F67D66A7244638AD249675BE2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跟ETag的值一样")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"etag-lastmodified过程如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-lastmodified过程如下","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("Etag/lastModified过程如下:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("客户端第一次向服务器发起请求,服务器将附加"),s("code",[t._v("Last-Modified/ETag")]),t._v("到所提供的资源上去")]),t._v(" "),s("li",[t._v("当再一次请求资源,"),s("strong",[t._v("如果没有命中强缓存")]),t._v(",在执行在验证时,"),s("strong",[t._v("将上次请求时服务器返回的Last-Modified/ETag一起传递给服务器")]),t._v("。")]),t._v(" "),s("li",[t._v("服务器检查该Last-Modified或ETag，并判断出该资源"),s("strong",[t._v("页面自上次客户端请求之后还未被修改，返回响应304和一个空的响应体")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"同时使用两个报文头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同时使用两个报文头","aria-hidden":"true"}},[this._v("#")]),this._v(" 同时使用两个报文头:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("同时使用这两个报文头，"),e("strong",[this._v("两个都匹配才会命中弱缓存")]),this._v("，否则将重新请求资源。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e3d5d5e2119a5?raw=true",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"etag-主要为了解决-last-modified-无法解决的一些问题："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-主要为了解决-last-modified-无法解决的一些问题：","aria-hidden":"true"}},[this._v("#")]),this._v(" Etag 主要为了解决 Last-Modified 无法解决的一些问题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("一些文件也许内容并不改变(仅仅改变的修改时间)，这个时候我们不希望文件重新加载。（Etag值会触发缓存，Last-Modified不会触发）")]),this._v(" "),e("li",[this._v("If-Modified-Since能检查到的粒度是秒级的，当修改非常频繁时，Last-Modified会触发缓存，而Etag的值不会触发，重新加载。")]),this._v(" "),e("li",[this._v("某些服务器不能精确的得到文件的最后修改时间。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"用户操作行为与缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户操作行为与缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 用户操作行为与缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e4019ed29d0ae?raw=true",alt:"图片出自网络"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如何设置？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何设置？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何设置？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一般是服务器端设置这些请求头的，我自己试了用阿里云服务器设置"),e("code",[this._v("Cache-Control")]),this._v("，设置一下很方便的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 小结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("文章如有不正确的地方欢迎各位路过的大佬鞭策！喜欢的话，赶紧点波"),e("s",[this._v("订阅")]),this._v("关注/喜欢。\n")])}],!1,null,null,null);r.options.__file="http缓存.md";e.default=r.exports}}]);