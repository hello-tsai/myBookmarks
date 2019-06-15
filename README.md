# 作品集
### （一）导航页面
预览地址：https://hello-tsai.github.io/myBookmarks/nav-demo/index.html 

代码地址：https://github.com/hello-tsai/myBookmarks/blob/master/nav-demo/index.html

功能介绍：仿照 http://www.36start.com/ 做出的网站，头部左边是网站名，右边是一个搜索栏，可以选择谷歌搜索或者百度搜索，中间部分是一个键盘的样子，当用户按键盘上相对应的按键的时，就会跳转至键盘左下图标对应的网站，若没有网站或者图标加载失败时显示的是一个爱心，当鼠标移到单个键盘上时右下角会出现编辑按钮，点击可以编辑网站，然后按下相应的按键的时候就可以跳转到更改的页面上了。

代码构思：**先初始化数据**，即将键盘上的字母及其对应的用网站用hash保存起来，**然后生成键盘**，将键盘分为三行，每行为一个div，再往div里面放入相应的每行键盘的内容用kbd抱歉并赋予id、class和内容，在kbd里面放入button标签，作用是让每个键对应的网站可以进行编辑并保存，kbd里面放img标签，路径指的是某个键盘所对应的网站的图标在/favicon.ico,当网站发生更改的时候，利用浏览器的localStorage存网站，如果网页图标不能显示或者没有就用一张固定的图片代替（爱心），**然后监听键盘**，用户按下了相应的键就打开这个键所对应的网站。

作品心得：js好难哦0.0 ，做的时候发现代码很混乱，对于代码的优化还是挺弱的，有些是不知道意思，但是直接套用，学会如何使用google去查找如何实现相应的功能很重要，一定要熟记经常用的API

### （二）画板
预览地址：https://hello-tsai.github.io/myBookmarks/canvas/index.html

代码地址：https://github.com/hello-tsai/myBookmarks/blob/master/canvas/index.html

功能介绍：是一个画布，可以直接开始画，默认颜色为黑色，当点击橡皮擦的时候就可以将画的东西擦掉了，可以选择不同颜色，不同粗细的笔，还可以将屏幕清空，和将画的内容保存为一张png图片

代码构思：运用canvas标签来做一个画布，先获取第一个点位置坐标，然后鼠标移动中也获取坐标，结束的时候也获取坐标，在这些坐标之间绘制路径，橡皮擦功能就使清除矩形来完成，清空功能，就是让整个画布重新画了一个矩形，下载功能就是canvas.toDataURL("image/png")能获取整个画布图片的地址，然后赋予一个a标签点击就可以下载下来了。

作品心得：js好难哦0.0 ，代码进行了优化比较有进步啦。

### （三）个人简历
预览地址：https://hello-tsai.github.io/myBookmarks/canvas/index.html

代码地址：https://github.com/hello-tsai/demo/blob/master/nav-test/index.html

功能介绍：个人简历，包括导航栏，个人信息，技能，和作品集，鼠标放到导航栏上会有从左到右的子菜单滑动效果和高亮效果，点击导航栏会跳转到页面相应的部分。

代码构思：不记得了

作品心得：js好难哦0.0 ，代码进行了优化比较有进步啦。
