# ES6语法
[ES6 学习笔记.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/1863325/1639650076040-72460e21-3fad-4a68-8cc2-632898459704.pdf?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F1863325%2F1639650076040-72460e21-3fad-4a68-8cc2-632898459704.pdf%22%2C%22name%22%3A%22ES6%20%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.pdf%22%2C%22size%22%3A3100956%2C%22ext%22%3A%22pdf%22%2C%22source%22%3A%22%22%2C%22status%22%3A%22done%22%2C%22download%22%3Atrue%2C%22type%22%3A%22application%2Fpdf%22%2C%22taskId%22%3A%22u2f2ab24a-a253-4561-9d9b-d2db5c37e04%22%2C%22taskType%22%3A%22upload%22%2C%22mode%22%3A%22title%22%2C%22id%22%3A%22u2b96bf0f%22%2C%22card%22%3A%22file%22%7D)<br/>
[尚硅谷前端_ES6.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/1863325/1639650084749-490e36e3-35a6-4777-b81e-783be2ae646a.pdf?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F1863325%2F1639650084749-490e36e3-35a6-4777-b81e-783be2ae646a.pdf%22%2C%22name%22%3A%22%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%89%8D%E7%AB%AF_ES6.pdf%22%2C%22size%22%3A840862%2C%22ext%22%3A%22pdf%22%2C%22source%22%3A%22%22%2C%22status%22%3A%22done%22%2C%22download%22%3Atrue%2C%22type%22%3A%22application%2Fpdf%22%2C%22taskId%22%3A%22u47a7ccd8-ccec-4bee-88b9-70de197e789%22%2C%22taskType%22%3A%22upload%22%2C%22mode%22%3A%22title%22%2C%22id%22%3A%22u727582d7%22%2C%22card%22%3A%22file%22%7D)<br/>
[阮一峰-ES6教程](https://es6.ruanyifeng.com/)<br/>
[1.5w字ES6教程](https://juejin.cn/post/6844903959283367950)<br/>
[你会用ES6，那倒是用啊！](https://juejin.cn/post/7016520448204603423)<br/>
[ES6核心，值得驻足花一天时间来学习](https://juejin.cn/post/6844903655125024776)<br/>
[ES6-Symbol解析](https://juejin.cn/post/6844903703242080263#heading-5)<br/>
[ES6-模块化解析](https://juejin.cn/post/6844903576309858318)<br/>

ES6新增加了哪些特性？

1. l**et和const**
2. **解构赋值**
3. 模板字符串
4. **箭头函数**
5. 扩展运算符与reset参数
6. Symbol
7. Set和Map
8. 迭代器和生成器(Iterator和Generator)
9. 代理和反射（Proxy和Reflect）
10. **Promise/Async/Await**
11. Class
12. ES6 Module

## 1. var和let/const
### 1. let和var的区别是什么？

- 变量提升
- 重复声明
- 块级作用域
- 暂时性死区
- 和GO的关系
1. let不存在变量提升，不允许在定义之前使用
```javascript
console.log(a) // undefined
var a = 12;
console.log(b) // ReferenceError
let b = 13;
```

2. let不允许重复声明（不论当前上下文中，基于何种方式声明过这个变量，都不允许基于let再次声明）
```javascript
// 语法错误：'a' has already been declared 在词法解析阶段，发现有基于let重复声明，词法解析阶段就错了，所以js代码不会执行
console.log('OK') // 出错，代码不执行
var a = 12;
let a = 13;
```

3. 在全局上下文中，基于var/function声明的变量，是给window(GO)全局对象设置的全局属性，基于let/const声明的变量是放在VO（G）中的，和GO没有任何的关系
```javascript
var a = 12;
let b = 13;
console.log(a) //先看VO（G）中是否存在，如果没有则继续看GO中是否存在  12
console.log(window.a) // 12 直接到GO中查找
console.log(b)
console.log(window.b) // undefined

d = 100; // 基于VO(G）首先看是否存在d,如果存在则修改全局变量，如果不存在，则直接给GO设置d的属性（或者修改GO中d的属性值）
console.log(window.d) // 100
```

4. let会产生块级上下文
```javascript
{
    var a= 12;
    let b = 13;
    console.log(a,b) //12 13
}
console.log(a) // 12
console.log(b) // b is not defined
```

5. let的暂时性死区问题
> 暂时性死区: 从函数开始到变量被声明的一段时间，寓意为尚未初始化

```javascript
console.log(typeof a) //基于typeof检测一个未被声明的变量，结果不会报错，而是undefined


console.log(typeof b) // Cannot access 'b' before initialization
let b = 100
```
```javascript
function temporalExample() {
  const foo = () => {
    console.log(value);
  }
  let value = 'zzf';
  foo(); // 'zzf'
}
temporalExample();
```

6. let和const声明的变量会覆盖自动创建的全局变量，比如name,而var不会覆盖
```javascript
var name = 42;
console.log(typeof name); // "string"
let name = 42;
console.log(typeof name); // "number"
```
### 2. let和const的区别？

1. const声明的变量必须赋初始值
```javascript
// const a; // 报错
const a = 12; 
```

2. const声明的变量的值（或地址值）不允许改变,但是可以更改地址值指向的堆内存的内容
```javascript
const obj = {name: 'zzf', age:20}
obj.name = 'zdf'
```
## 2. 解构赋值
 ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值；  
### 1. 数组的解构
```javascript
const persons = ['zzf', 'zdf', 'zjm', 'oynn']
let [a,b,c,d] = persons
console.log(a,b,c,d)
```
### 2. 对象解构
```javascript
const person = {
  name: 'zzf',
  age: 20,
  say() {
  	console.log('我的职业是演员')
  }
}

let { name, age, say } = person
say()
```
 频繁使用对象方法、数组元素，就可以使用解构赋值形式；  （常用的是对象方法的解构）

## 3. 模板字符串
模板字符串（template string）是增强版的字符串，用反引号标识，有以下特点

- 字符串中可以出现换行符； 
- 可以使用 ${xxx} 形式引用变量；  
```javascript
let name = `zzf`

// 1. 可以出现换行符
let str = `<ul>
						<li>张子枫</li>
          </ul>`

// 2. 可以引用变量
let star = '张子枫'
let words = `${star}是一个优秀的青年演员`
console.log(words)
```
## 4. 对象和函数的简写
 ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁；  
```javascript
let name = '张子枫'
let play = function() {
	console.log('盛夏未来')
}
/*
const desc = {
  name: name
  play: play
  say: function(){
  	console.log('张子枫是一个优秀的青年演员')
  }
}
*/

// 简化写法
const desc = {
  name,
  play,
  say() {
  	console.log('张子枫是一个优秀的青年演员')
  }
}
```
## 5. 箭头函数
 ES6允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿名函数的定义；  

1. 如果形参只有一个，则小括号可以省略；
2. 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果；
3. **箭头函数 this 指向声明时所在作用域下 this 的值；（箭头函数没有自己的this）**
4. **箭头函数不能作为构造函数实例化；**
5. **不能使用 arguments；**
```javascript
let fn1 = function(a,b) {
	return a+b
}

// 两个参数
let fn2 = (a,b) => {
	return a + b
}

// 省略花括号，当代码体只有一条语句的时候，此时return必须省略，并且语句的执行结果就是函数的返回值
let fn3 = (a,b) => a+b

// 无参数
let fn4 = () => {}

// 当形参有且只有一个的时候，可以省略小括号
let fn4 = name => 'hello' + name
```
```javascript
// 1、箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
const school = {
	name : "zzf",
}
// 传统函数
function getName(){
	console.log("getName：" + this.name);
}
// 箭头函数
let getName1 = () => console.log("getName1：" + this.name);
window.name = "zdf";

// 直接调用
getName();
getName1();
// 使用call调用
getName.call(school);
getName1.call(school);


/*
getName：zdf
getName1：zdf
getName：zzf
getName1：zdf
*/
// 结论：箭头函数的this是静态,不能更改
```
```javascript
// 获取元素
let ad = document.getElementById('ad');
// 绑定事件
ad.addEventListener("click", function(){
    // 传统写法
    // 保存 this 的值
    let _this = this;
    // 定时器：参数1：回调函数；参数2：时间；
    setTimeout(function(){
        console.log(this);
        _this.style.background = 'pink';
    },2000);
});


ad.addEventListener("click", function(){
  setTimeout(() => {
  	this.style.background = 'pink'
  },2000);}
)

const arr = [1, 6, 9, 10, 100, 25]
const result = arr.filter(item => item % 2 === 0);
```
**箭头函数适合与 this 无关的回调. 定时器, 数组的方法回调**
**箭头函数不适合与 this 有关的回调. 事件回调, 对象的方法**

## 6. 函数参数默认值
```javascript
// 1. ES6 允许给函数参数赋值初始值
function add(a,b,c=10) {
	return a + b + c;
}
let result = add(1,2);
console.log(result); // 13


// 2. 与解构赋值结合
// 注意这里参数是一个对象
function connect({host="127.0.0.1", username,password, port}){
  console.log(host)
  console.log(username)
  console.log(password)
  console.log(port)
}

connect({
host: 'https://www.baidu.com/,
username: 'root',
password: 'root',
port: 3306
})

```
## 7. reset参数
 ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；  
**reset参数必须要放在最后**
```javascript
function data(...args) {
	console.log(args) // ['zzf', 'zdf', 'zjm'], 可以使用数组的一些方法
}
data('zzf', 'zdf','zjm')


// reset参数必须要放在最后
function fn(a,b,...args) {
	console.log(a,b,args)
}
fn(1,2,3,4,5,6)
```
## 8. 扩展运算符
```javascript
const persons = ['张子枫', '庄达菲', '赵今麦']

function fn() {
	console.log(arguments)
}

fn(...persons) // 将persons转换为以逗号分隔的序列
```
```javascript
// 1. 数组的合并
const persons1 = ['张子枫', '赵今麦']
const persons2 = ['庄达菲', '欧阳娜娜']
const persons = [...person1, ...person2]

// 2. 浅拷贝数组
const data = ['A', 'B', 'C']
const data1 = [...data] // 浅拷贝


// 3. 将伪数组转换为真正的数组
const divs = document.querySelectorAll('div');
const divArr = [...divs];
console.log(divArr);
```
## 9. Symbol
 ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是JavaScript 语言的第七种数据类 型，是一种类似于字符串的数据类型；  

1. **Symbol 的值是唯一的**，用来解决命名冲突的问题；（常用来给对象添加属性和方法）
2. Symbol 值不能与其他数据进行运算；
3. Symbol 定义的对象属性不能使用for…in循环遍历 ，但是可以使用Reflect.ownKeys 来获取对象的
所有键名；
```javascript
// 1. 创建Symbol
let s = Symbol()
console.log(s, typeof s)

// 2. 传入描述字符串, Symbol是唯一的
let s2 = Symbol('张子枫')
let s3 = Symbol('张子枫')
console.log(s2 === s3) // false


// 3. Symbol.for创建，此时Symbol是一个对象
let s4 = Symbol.for('zzf');
let s5 = Symbol.for('zzf');
console.log(s4==s5); // true

// 4. Symbol不能与其他数据类型进行运算
```
```javascript
// Symbol创建对象属性
let game = {}

let methods = {
	up: Symbol(),
  down: Symbol()
}

game[methods.up] = function () {}
game[methos.dowm] = function() {}


// 添加方式二
let steam = {	
  name: '隐形守护者',
  [Symbol('say')]: function() {
  	console.log('一款优秀的游戏')
  },
  [Symbol('act')]: function() {
  	console.log('演员们演的很好')
  },
}
console.log(steam)
```
除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方 法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行；  

```javascript
class Person{
  static [Symbol.hasInstance](param){
    console.log(param);
    console.log("我被用来检测类型了");
    return false;
  }
}
let o = {};
console.log(o instanceof Person);


const arr = [1,2,3];
const arr2 = [4,5,6];
// 合并数组：false数组不可展开，true可展开,false表示不可展开，作为一个整体进行合并
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr.concat(arr2));
```
## 10. 迭代器
迭代器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。**任何数据结构只要部署 Iterator 接口，就可以完成遍历操作；**  
ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费；
**原生具备 iterator 接口的数据(可用 for of 遍历)：**

- Array； 
- Arguments； 
- Set；
- Map； 
- String；
- TypedArray；
-  NodeList；   

工作原理：

1. 创建一个指针对象，指向当前数据结构的起始位置 
2. 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员 
3. 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员 
4.  每调用 next 方法返回一个包含 value 和 done 属性的对象 
5. 注: 需要自定义遍历数据的时候，要想到迭代器。  
```javascript
// 声明一个数组
const persons = ['唐僧', '孙悟空', '猪八戒', '沙僧'];
// 使用 for...of 遍历数组
for(let value of persons){
	console.log(value);
}
let iterator = persons[Symbol.iterator]();
// 调用对象的next方法
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // {value: undefined, done: true}

// 重新初始化对象，指针也会重新回到最前面
let iterator1 = persons[Symbol.iterator]();
console.log(iterator1.next());
```
```javascript
const stars = {
	name: '00后',
  persons: [
  	'zzf', 'zdf','oynn', 'zjm'
  ],
  [Symbol.iterator]() {
  	// 返回一个对象
    let index = 0;
    let _this = this
    return {
   		next: function() {
      	if(index < _this.persons.length] {
        	const result = {
          	value: _this.stus[index],
            done: false
          }
          index++;
          return result
        } else {
        	return {
          	value: undefined,
            done: true
          }
        }
      }
    }
  }
}
// 遍历这个对象
for(let value of stars) {
	console.log(value)
}
```
## 11. 生成器
生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同；  
传统的异步编程使用回调函数，而生成器是回调函数与Promise之间的过渡解决方案
```javascript
// yield是函数代码的分隔符
function* gen() {
  console.log(111);
  yield '一只没有耳朵';
  console.log(222);
  yield '一只没有尾部';
  console.log(333);
  yield '真奇怪';
  console.log(444);
}
let iterator = gen();
console.log(iterator.next()); // 111 {value: '一只没有耳朵', done: false}
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // 444 {value: undefined, done: true}
console.log("遍历：");

//遍历
for(let v of gen()){
	console.log(v); // 返回结果是yield 的值
}

```
```javascript
function * gen(arg){
  console.log(arg);
  let one = yield 111;
  console.log(one);
  let two = yield 222;
  console.log(two);
  let three = yield 333;
  console.log(three);
}
let iterator = gen("AAA");
console.log(iterator.next()); // AAA {value: 111, done: false}
// next()方法是可以传入参数的
console.log(iterator.next("BBB")); // 传入的BBB是yield 111的返回结果 {value: 222, done: false}
console.log(iterator.next("CCC")); // 传入的CCC是yield 222的返回结果
console.log(iterator.next("DDD"));  // 传入的DDD是yield 333的返回结果
```
```javascript
// 1ms控制台输出1,2s后输入2,3秒后输出3
// 回调地狱
function one(){
  setTimeout(()=>{
  console.log(111);
  iterator.next();
  },1000)
}
function two(){
  setTimeout(()=>{
  console.log(222);
  iterator.next();
  },2000)
}
function three(){
  setTimeout(()=>{
  console.log(333);
  iterator.next();
  },3000)
}
function * gen(){
  yield one();
  yield two();
  yield three();
}
// 调用生成器函数
let iterator = gen();
iterator.next();
```
```javascript
// 模拟获取: 用户数据 订单数据 商品数据
function getUsers(){
  setTimeout(()=>{
    let data = "用户数据";
    // 第二次调用next，传入参数，作为第一个的返回值
    iterator.next(data); // 这里将data传入
  },1000);
}
function getOrders(){
  setTimeout(()=>{
    let data = "订单数据";
    iterator.next(data); // 这里将data传入
  },1000);
}
function getGoods(){
  setTimeout(()=>{
    let data = "商品数据";
    iterator.next(data); // 这里将data传入
  },1000);
}
function * gen(){
  let users = yield getUsers();
  console.log(users);
  let orders = yield getOrders();
  console.log(orders);
  let goods = yield getGoods();
  console.log(goods); 
}
let iterator = gen();
iterator.next()
```
## 12. Promise
Promise的详细内容见之前的文章

1. Promise的状态、resolve、reject
2. Promise.then/catch/finally
3. Promise.race/all
```javascript
const promise = new Promise((resolve, reject) => {
	resolve()
  reject()
})

promise.then(data => {}, error => {})
```
```javascript
// 请求地址：https://api.apiopen.top/getJoke
// 原生请求
// 1、创建对象
const xhr = new XMLHttpRequest();
// 2、初始化
xhr.open("GET","https://api.apiopen.top/getJoke");
// 3、发送
xhr.send();
// 4、绑定事件，处理响应结果
xhr.onreadystatechange = function(){
  // 判断状态
  if(xhr.readyState == 4){
    // 判断响应状态码 200-299
    if(xhr.status>=200 && xhr.status<=299){
      // 成功
      console.log(xhr.response);
    }else{
      // 失败
      console.error(xhr.status);
  	}
  }
}

// Promise进行封装
const p = new Promise(function(resolve,reason) {
    // 1、创建对象
    const xhr = new XMLHttpRequest();
    // 2、初始化
    xhr.open("GET","https://api.apiopen.top/getJoke");
    // 3、发送
    xhr.send();
    // 4、绑定事件，处理响应结果
    xhr.onreadystatechange = function(){
      // 判断状态
      if(xhr.readyState == 4){
        // 判断响应状态码 200-299
        if(xhr.status>=200 && xhr.status<=299){
          // 成功
          resolve(xhr.response);
        }else{
          // 失败
          reason(xhr.status);
        }
      }
    }
}
p.then(function(value){
		console.log(value.toString());
},function(reason){
		console.log(reason); // 读取失败
})

```

1. 调用then方法，返回结果是一个promise对象，对象的状态由回调函数的结果决定
   1. 如果回调函数中返回的结果是非promise类型的数据，状态为"resolved", PromiseValue为返回的结果
   2. 如果返回的是Promise类型的数据, 此Promise对象的状态决定返回的promise的状态
   3. 如果抛出错误，状态为"rejected"
2. 借助这种特性，可以实现链式调用
## 13. Set
ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：

1. size 返回集合的元素个数；
2. add 增加一个新元素，返回当前集合；
3. delete 删除元素，返回 boolean 值；
4. has 检测集合中是否包含某个元素，返回 boolean 值；
5. clear 清空集合，返回 undefined；
```javascript
// Set集合
let s = new Set();
console.log(s,typeof s);
let s1 = new Set(['zzf', 'zdf', 'zzf', 'zjm']);
console.log(s1); // 自动去重
// 1. size 返回集合的元素个数；
console.log(s1.size);
// 2. add 增加一个新元素，返回当前集合；
s1.add("oynn");
console.log(s1);
// 3. delete 删除元素，返回 boolean 值；
let result = s1.delete("zjm");
console.log(result);
console.log(s1);
// 4. has 检测集合中是否包含某个元素，返回 boolean 值；
let r1 = s1.has("bbmb");
console.log(r1);
// 5. clear 清空集合，返回 undefined；
s1.clear();
console.log(s1);
```
```javascript
let arr = [1,2,3,4,5,4,3,2,1];
// 1.数组去重
let result = [...new Set(arr)]
// 2. 交集
let arr2 = [4,5,6,5,6]
let result2 = [...new Set(arr)].filter(item => new
Set(arr2).has(item));

// 3. 并集
let union = [...new Set([...arr,...arr2])];

// 4. 差集
let result3 = [...new Set(arr)].filter(item=>!(new
Set(arr2).has(item)));
```
## 14. Map
**ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键**，Map 也实现了iterator 接口，所以可以使用『扩展运算符』和 『for…of…』进行遍历；  

1. size 返回 Map 的元素个数；
2. set 增加一个新元素，返回当前 Map；
3. get 返回键名对象的键值；
4. has 检测 Map 中是否包含某个元素，返回 boolean 值；
5. clear 清空集合，返回 undefined；
```javascript
// 创建一个空 map
let m = new Map();

//添加元素
m.set('name','zzf');
m.set('movie', function(){
  console.log("盛夏未来");
});
let key = {
  school : 'ATGUIGU'
};
m.set(key, ['北京','上海','深圳']);

//size
// console.log(m.size);

//删除
// m.delete('name');

//获取
// console.log(m.get('change'));
// console.log(m.get(key));

//清空
// m.clear();

//遍历
for(let v of m){
  console.log(v);
}

// console.log(m);
```
## 15. Class
 ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键 字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做 到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已；  

1. class 声明类；
2. constructor 定义构造函数初始化；
3. **extends 继承父类**；
4. super 调用父级构造方法；
5. static 定义静态方法和属性；
6. 父类方法可以重写；
```javascript
function Phone(brand, price){
  this.brand = brand;
  this.price = price;
}

//添加方法
Phone.prototype.call = function(){
  console.log("我可以打电话!!");
}

//实例化对象
let Huawei = new Phone('华为', 5999);
Huawei.call();
console.log(Huawei);


//class
class Shouji{
  //构造方法 名字不能修改
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }

  //方法必须使用该语法, 不能使用 ES5 的对象完整形式
  call(){
    console.log("我可以打电话!!");
  }
}

let onePlus = new Shouji("1+", 1999);

console.log(onePlus);
```
```javascript
class Phone{
  //静态属性
  static name = '手机';
  static change(){
    console.log("我可以改变世界");
  }
}
```
```javascript
class Phone{
  //构造方法
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }
  //父类的成员属性
  call(){
    console.log("我可以打电话!!");
  }
}

class SmartPhone extends Phone {
  //构造方法
  constructor(brand, price, color, size){
    super(brand, price);// Phone.call(this, brand, price)
    this.color = color;
    this.size = size;
  }

  photo(){
    console.log("拍照");
  }

  playGame(){
    console.log("玩游戏");
  }

 //  父类方法的重写
  // 子类无法调用父类同名方法
  call(){
    console.log('我可以进行视频通话');
  }
}

const xiaomi = new SmartPhone('小米',799,'黑色','4.7inch');
// console.log(xiaomi);
xiaomi.call();
xiaomi.photo();
xiaomi.playGame();
```
```javascript
// get 和 set  
class Phone{
  get price(){
    console.log("价格属性被读取了");
    return 'iloveyou';
  }

  set price(newVal){
    console.log('价格属性被修改了');
  }
}

//实例化对象
let s = new Phone();

// console.log(s.price);
s.price = 'free';
```
## 16. 数值扩展

1. Number.isNaN 检测一个数字是否为NaN
2. Number.isFinite 检测一个数字是否为有限数
## 17. 对象扩展
ES6 新增了一些 Object 对象的方法：

1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）；
2. Object.assign 对象的合并，将源对象**的所有可枚举属性**，复制到目标对象；
3. proto、getPrototypeOf、 setPrototypeOf 可以直接设置对象的原型；
```javascript
console.log(Object.is(NaN,NaN)); // true
console.log(NaN === NaN); // false

// 重名的会覆盖
Object.assign(obj1, obj2)

Object.setPrototypeOf(obj1, obj2)
Object.getPrototypeOf(obj1)
```

## 18. ES6 Modules
模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来；  
模块化的优势有以下几点：

1. 防止命名冲突；
2. 代码复用；
3. 高维护性；

ES6 之前的模块化规范有：

1. CommonJS => NodeJS、Browserify；
2. AMD => requireJS；
3. CMD => seaJS；

**模块功能主要由两个命令构成：export 和 import；** 

1. export 命令用于规定模块的对外接口（导出模块）；
2. import 命令用于输入其他模块提供的功能（导入模块）  
```javascript
// 分别暴露
export let name = "张子枫";
export function say(){
	console.log("zzf是一个优秀的青年演员");
}

import * as m from './a.js'
console.log(m)
console.log(m.name)
m.say()
```
```javascript
// 统一暴露
let name = "张子枫";
function say(){
	console.log("zzf是一个优秀的青年演员");
}

export {
	name,
  say
}
```
```javascript
// 默认暴露
export default {
	name: 'zzf',
  say: function() {
  
  }
}

import { name, say } from './a.js'
```

---

## 19. ES7新特性

1. Array.prototype.includes 判断数组中是否包含某元素，语法：arr.includes(元素值)； 
2. 指数操作符 幂运算的简化写法，例如：2的10次方：2**10；  
## 20. ES8新特性
 async 和 await 两种语法结合可以让异步代码看起来像同步代码一样；  

1. async 函数的返回值为 promise 对象；
2. promise 对象的结果由 async 函数执行的返回值决定；
3. await 必须写在 async 函数中；
4. await 右侧的表达式一般为 promise 对象；
5. await 返回的是 promise 成功的值；
6. await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理；
```javascript
// 创建Prmise对象
const p = new Promise((resolve,reject)=>{
	resolve("成功啦！");
})
async function fn(){
  // await 返回的是 promise 成功的值
  let result = await p;
  console.log(result); // 成功啦！
}
fn();
```
```javascript
function sendAjax(url){
  return new Promise((resolve,reject)=>{
    // 1、创建对象
    const x = new XMLHttpRequest();
    // 2、初始化
    x.open("GET",url);
    // 3、发送
    x.send();
    // 4、事件绑定
    x.onreadystatechange = function(){
      if(x.readyState == 4){
      if(x.status>=200 && x.status<=299){
        // 成功
        resolve(x.response);
      }else{
        // 失败
        reject(x.status);
      	}
      }
    }
  });
}
// 测试
// const result = sendAjax("https://api.apiopen.top/getJoke");
// result.then(value=>{
// 		console.log(value);
// },reason=>{
// 		console.warn(reason);
// })
// 使用async和await
async function main(){
  let result = await sendAjax("https://api.apiopen.top/getJoke");
  console.log(result);
}
main();
```

1. Object.values()方法：返回一个给定对象的所有可枚举属性值的数组；
2. Object.entries()方法：返回一个给定对象自身可遍历属性 [key,value] 的数组；
3. Object.getOwnPropertyDescriptors()该方法：返回指定对象所有自身属性的描述对象；
```javascript
let school = {
  name : "zzf",
  age : 20,
  sex : "female"
}
// 获取对象所有的键
console.log(Object.keys(school));
// 获取对象所有的值
console.log(Object.values(school));
// 获取对象的entries
console.log(Object.entries(school));
// 创建map
const map = new Map(Object.entries(school));
console.log(map);
console.log(map.get("name"));
// 返回指定对象所有自身属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school));
// 参考内容：
const obj = Object.create(null,{
  name : {
    // 设置值
    value : "zzf",
    // 属性特性
    writable : true,
    configuration : true,
    enumerable : true
  }
});
```
## 21. ES9新特性

1.  在对象中使Reset参数与spread扩展运算符；  
```javascript
const person = {
	name: 'zzf',
  age: 20
}
console.log({...person}) // {name: 'zzf', age: 20}
```
## 22. ES10新特性

1.  Object.fromEntries 将二维数组或者map转换成对象；
2.  trimStart 和 trimEnd 去除字符串前后的空白字符
3. Array.prototype.flat 与 flatMap 将多维数组降维
4. Symbol.prototype.description 获取Symbol的字符串描述；  
```javascript
const arr = [1,2,3,[4,5],6,7];
console.log(arr.flat());
// 将三维数组转换成二维数组
const arr2 = [1,2,3,[4,5,[6,7]],8,9];
// 三维数组转为二维数组
console.log(arr2.flat());
// 将三维数组转换成一维数组
console.log(arr2.flat(2));
```
## 23. ES11新特性

1. BigInt:大整型
