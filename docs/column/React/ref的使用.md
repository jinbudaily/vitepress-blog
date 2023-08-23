`React`框架不推荐使用传统的`DOM API`获取和操作`DOM`元素，而推荐使用`ref`获取元素
### 通过ref获取元素
:::info
 基于ref获取DOM元素的语法

1. _给需要获取的元素设置_`ref='xxx'`_，后期基于_`this.refs.xxx`_去获取相应的DOM元素「不推荐使用：在React.StrictMode模式下会报错」_

`<h2 ref="titleBox">...</h2>`

- _获取：this.refs.titleBox_



2. _把ref属性值设置为一个函数_

`ref={x=>this.xxx=x}`

- _x是函数的形参：存储的就是当前DOM元素_
- _然后我们获取的DOM元素“x”直接挂在到实例的某个属性上(例如：box2)_
- _获取：_`this.xxx`



3. 基于`React.createRef()`方法创建一个REF对象

- `this.xxx=React.createRef(); //=> this.xxx={current:null}`
- `ref={this.xxx(通过createRef定义的ref对象)}`

- _获取：_`this.xxx.current`

原理：在render渲染的时候，会获取virtualDOM的ref属性

- 如果属性值是一个字符串，则会给`this.refs`增加这样的一个成员，成员值就是当前的DOM元素
- 如果属性值是一个函数，则会把函数执行，把**当前DOM元素传递给这个函数「x->DOM元素」**,而在函数执行的内部，我们一般都会把DOM元素直接挂在到实例的某个属性上
- 如果属性值是一个REF对象，则会把DOM元素赋值给对象的current属性
:::
```jsx
import React, { Component } from 'react'

export default class Demo extends Component {
  tip3 = React.createRef();
  render() {
    return (
      <div>
        <h2 ref="tip1">提示1</h2>
        <h2 ref={x => this.tip2 = x}>提示2</h2>
        <h2 ref={this.tip3}>提示3</h2>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.refs.tip1);
    console.log(this.tip2);
    console.log(this.tip3.current);
  }
}
```
### ref的转发
> 1.  给元素标签设置ref，目的：获取对应的DOM元素
> 2. 给类组件设置ref，目的：**获取当前调用组件创建的实例**「后续可以根据实例获取子组件中的相关信息」
> 3. _给函数组件设置ref，直接报错：_`Function components cannot be given refs. Attempts to access this ref will fail.`
> - 但是我们让其配合 `React.forwardRef `实现ref的转发
> - 目的：**获取函数子组件内部的某个元素**

```jsx
import React, { Component } from 'react'

class Child1 extends React.Component {
  render() {
    return (
      <h3 ref={x => this.titleRef = x}>React Ref</h3>
    )
  }
}
const Child2 = React.forwardRef(function Child1(props, ref) {
  // console.log(ref)  //  x => this.child2 = x
  return (
    <div>
      {/* 实现ref的转发 */}
      <button ref={ref}>按钮</button>
    </div>
  )
})
export default class Demo extends Component {
  render() {
    return (
      <div>
        <Child1 ref={x => this.child1 = x}/>
        <Child2 ref={x => this.child2 = x}/>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.child1)  // 获取组件实例
    console.log(this.child1.titleRef)  // 获取子组件的DOM元素
    console.log(this.child2)  // ref的转发，获取函数组件的DOM元素
  }
}
```
