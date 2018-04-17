localStorage,sessionStorage：专门用于存储
存储大小均为5M左右，都有同源策略限制，仅在客户端中保存，不参与和服务器的通信

区别：
1、生命周期 —— 数据可以存储多少时间

localStorage: 存储的数据是永久性的，除非用户人为删除否则会一直存在。
sessionStorage: 与存储数据的脚本所在的标签页的有效期是相同的。一旦窗口或者标签页被关闭，那么所有通过 sessionStorage 存储的数据也会被删除。
2、作用域 —— 谁拥有数据的访问权

localStorage: 在同一个浏览器内，同源文档之间共享 localStorage 数据，可以互相读取、覆盖。
sessionStorage: 与 localStorage 一样需要同一浏览器同源文档这一条件。不仅如此，sessionStorage 的作用域还被限定在了窗口中，也就是说，只有同一浏览器、同一窗口的同源文档才能共享数据。

例如你在浏览器中打开了两个相同地址的页面A、B,虽然这两个页面的源完全相同，但是他们还是不能共享数据，因为他们是不同窗口中的。但是如果是一个窗口中，有两个同源的iframe元素的话，这两个iframe的 sessionStorage 是可以互通的

Cookie,用于客户端服务端通信
1、顾名思义，Cookie 确实非常小，它的大小限制为4KB左右

2、主要用途是保存登录信息和标记用户(比如购物车)等，不过随着localStorage的出现，现在购物车的工作Cookie承担的较少了

3、一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效

4、每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题

5、原生API不如storage友好，需要自己封装函数
客户端设置cookie：

document.cookie = "<cookie-name>=<cookie-value>;(可选参数1);(可选参数2)"
可选参数：
Expires=<date>：cookie的最长有效时间，若不设置则cookie生命期与会话期相同

Max-Age=<non-zero-digit>：cookie生成后失效的秒数

Session
Session是在无状态的HTTP协议下，服务端记录用户状态时用于标识具体用户的机制。它是在服务端保存的用来跟踪用户的状态的数据结构，可以保存在文件、数据库或者集群中。

在浏览器关闭后这次的Session就消失了，下次打开就不再拥有这个Session。其实并不是Session消失了，而是Session ID变了，服务器端可能还是存着你上次的Session ID及其Session 信息，只是他们是无主状态，也许一段时间后会被删除。

大多数的应用都是用Cookie来实现Session跟踪的，第一次创建Session的时候，服务端会在HTTP协议中告诉客户端，需要在Cookie里面记录一个SessionID，以后每次请求把这个会话ID发送到服务器

与Cookie的关系与区别：
1、Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中，Cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式。

2、Cookie的安全性一般，他人可通过分析存放在本地的Cookie并进行Cookie欺骗。在安全性第一的前提下，选择Session更优。重要交互信息比如权限等就要放在Session中，一般的信息记录放Cookie就好了。

3、单个Cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个Cookie。

4、当访问增多时，Session会较大地占用服务器的性能。考虑到减轻服务器性能方面，应当适时使用Cookie。

5、Session的运行依赖Session ID，而Session ID是存在 Cookie 中的。也就是说，如果浏览器禁用了Cookie,Session也会失效（但是可以通过其它方式实现，比如在url中传递Session ID,即sid=xxxx）。

