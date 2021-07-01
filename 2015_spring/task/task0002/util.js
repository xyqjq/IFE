// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    console.log(typeof arr);  //返回“object”
    console.log(Array.isArray(arr));  //true
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    if(typeof fn == 'function'){
        return true;
    }else{
        return false;
    }
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(obj) {
    // your implement
    var out;
    if(obj instanceof Array){
        out=[];//初始化对象
        for(var i in obj){
            out[i]=cloneObject(obj[i]);//递归调用
        }
    }else if (obj instanceof Object){
        out={};//初始化对象
        for(var i in obj){
            out[i]=cloneObject(obj[i]);
            console.log(out);
        }
    }else {
        out=obj;
    }
    return out;
}

// 测试用例：
function testClone(){
    var srcObj = {
        a: 1,
        b: {
            b1: ["hello", "hi"],
            b2: "JavaScript"
        }
    };
    var abObj = srcObj;
    var tarObj = cloneObject(srcObj);
    
    srcObj.a = 2;
    srcObj.b.b1[0] = "Hello";
    
    console.log(abObj.a);
    console.log(abObj.b.b1[0]);
    
    console.log(tarObj.a);      // 1
    console.log(tarObj.b.b1[0]);    // "hello"
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    return Array.from(new Set(arr));
}

// 使用示例
function testuniqArray(){
    var a = [1, 3, 5, 7, 5, 3];
    var b = uniqArray(a);
    console.log(b); // [1, 3, 5, 7]
}

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    let strr = ""; 
    // your implement
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            strr = str.substring(i+1)
        }else{
            break;
        }
    }
    for(let j=strr.length-1;j>=0;j--){
        if(strr[j]==" "){
            str = strr.substring(0,j)
        }else{
            break;
        }
    }
    return str;
}

function simpleTrim2(str) {
    let head = 0;
    while (str[head] == " "){
        head++;
    }
    let tail = str.lenth-1;
    while (str[tail] == " "){
        tail--;
    }
    return strr = str.substring(head,tail+1);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    str=str.replace(/(^\s*)|(\s*$)/g, "");//用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
        //空格开头或者空格结尾
        // ^是开始
        // \s是空白
        // *表示0个或多个
        // |是或者
        // $是结尾
        // g表示全局
    return str;
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for(let i=0;i<arr.length;i++){
        fn(arr[i])
        fn(arr[i],i)
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    let i = 0;
    for(key in obj){
        i++;
    }
    return i;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3


// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    if(emailStr.match(/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/)){
        console.log(true);
    }else{
        console.log(false);
    }
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    if(phone.length == 11 && phone.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)){
        console.log(true);
    }else{
        console.log(false);
    }
}

// 3. DOM

// 3.1 任务描述

//先来一些简单的，在你的`util.js`中完成以下任务：

//javascript
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    document.getElementsByTagName(element)[0].className += ' '+ newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    let attr = document.getElementsByTagName(element)[0].getAttribute("class");
    let before = attr.split(" ")
    let after = [];
    for(let i=0;i<before.length;i++){
    if(before[i] != oldClassName){after.push(before[i])}
    }
    document.getElementsByTagName(element)[0].setAttribute("class",after.toString());
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var pos={};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    return pos;
}
// your implement


//接下来挑战一个`mini $`，它和之前的`$`是不兼容的，它应该是`document.querySelector`的功能子集，在不直接使用`document.querySelector`的情况下，在你的`util.js`中完成以下任务：

//javascript
// 实现一个简单的Query
function $(selector) {

    if (selector == document) {
        return document;
    }
    selector = selector.trim();
    //存在空格时，使用后代选择器
    if (selector.indexOf(" ") !== -1) {
        var selectorArr = selector.split(/\s+/); //分割成数组，第一项为parent，第二项为chlid。
        return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
    } else { //普通情况,只返回获取到的第一个对象
        return VQuery(selector,document)[0];
    }

    
}

function VQuery(selector,root){

    var elements = []; //保存结果节点数组
    var allChildren = null; //用来保存获取到的临时节点数组
    root = root || document; //若没有给root，赋值document
    switch (selector.charAt(0)) {
        case "#":
            elements = root.getElementById(selector);
        case ".":
            elements = root.getElementsByClassName(selector);
        case "[":    
            if(selector.indexOf("=") === -1){
                allChildren = root.getElementsByTagName("*");
                for (var i = 0, len = allChildren.length; i < len; i++) {
                    if (allChildren[i].getAttribute(selector) !== null ) {
                        elements.push(allChildren[i]);
                    }
                }
            }else{
                var index = selector.indexOf("="); //缓存=出现的索引位置。
                allChildren = root.getElementsByTagName("*");
                for (var i = 0, len = allChildren.length; i < len; i++) {
                    if (allChildren[i].getAttribute(selector.slice(1, index)) === selector.slice(index + 1, -1)) {
                        elements.push(allChildren[i]);
                    }
                }
            }
        default :
            elements = root.getElementsByTagName(selector);
    }
    return elements;
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

//## 4. 事件

//### 4.1 任务描述

//我们来继续用封装自己的小jQuery库来实现我们对于JavaScript事件的学习，还是在你的`util.js`，实现以下函数

//```javascript
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    element.addEventListener(event, listener, false);
}

// 例如：
function clicklistener(event) {
    // your implement
    
}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    element.removeEventListener(event, listener, false);
}
//```

//接下来我们实现一些方便的事件方法
//```javascript
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element,"cilck",listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    addEvent(element,"keydown",function(event){     
        if(event.keyCode==13){    
            listener();     
         }     
    });
}
//```

//接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
//- addEvent(element, event, listener) -> $.on(element, event, listener);
//- removeEvent(element, event, listener) -> $.un(element, event, listener);
//- addClickEvent(element, listener) -> $.click(element, listener);
//- addEnterEvent(element, listener) -> $.enter(element, listener);

//接下来考虑这样一个场景，我们需要对一个列表里所有的`<li>`增加点击事件的监听

//**最笨的方法**

//```html
//<ul id="list">
//    <li id="item1">Simon</li>
//    <li id="item2">Kenner</li>
//    <li id="item3">Erik</li>
//</ul>
//```

//```javascript
function clickListener(event) {
    console.log(event);
}

$.click($("#item1"), clickListener);
$.click($("#item2"), clickListener);
$.click($("#item3"), clickListener);
//```

//上面这段代码要针对每一个item去绑定事件，这样显然是一件很麻烦的事情。

//**稍微好一些的**

//```html
//<ul id="list">
//    <li>Simon</li>
//    <li>Kenner</li>
//    <li>Erik</li>
//</ul>
//```

//我们试图改造一下

//```javascript
function clickListener(event) {
    console.log(event);
}

$.each($("#list")[0].getElementsByTagName('li'), function(index,li) {
    addClickEvent(li, clickListener);
});
//```

//我们通过自己写的函数，取到id为`list`这个`ul`里面的所有`li`，然后通过遍历给他们绑定事件。这样我们就不需要一个一个去绑定了。但是看看以下代码：

//```html
//<ul id="list">
//    <li id="item1">Simon</li>
//    <li id="item2">Kenner</li>
//    <li id="item3">Erik</li>
//</ul>
//<button id="btn">Change</button>
//```

//```javascript
function clickListener(event) {
    console.log(event);
}

function renderList() {
    $("#list").innerHTML = '<li>new item</li>';
}

function init() {
    each($("#list").getElementsByTagName('li'), function(item) {
        $.click(item, clickListener);
    });

    $.click($("#btn"), renderList);
}
init();
//```

//我们增加了一个按钮，当点击按钮时，改变list里面的项目，这个时候你再点击一下`li`，绑定事件不再生效了。那是不是我们每次改变了DOM结构或者内容后，都需要重新绑定事件呢？当然不会这么笨，接下来学习一下事件代理，然后实现下面新的方法：

//```javascript
// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    // your implement
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);
//```

//估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：

//```javascript
$.on = function(selector, event, listener) {
    // your implement
    return addEvent(selector, event, listener);
};

$.click = function(selector, listener) {
    // your implement
    return addClickEvent(selector, listener);
};

$.un = function(selector, event, listener) {
    // your implement
    return removeEvent(selector, event, listener);
};

$.delegate = function(selector, tag, event, listener) {
    // your implement
    delegateEvent(selector, tag, event, listener);
};

// 使用示例：
$.click("[data-log]", logListener);
$.delegate('#list', "li", "click", liClicker);
//```