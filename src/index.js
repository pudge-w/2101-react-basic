// 网页项目 -> react + react-dom
// app项目 -> react + react-native
import React from 'react';
import ReactDOM from 'react-dom';

// 大写字母开头的表示组件
// 小写字母开头的表示元素

// 函数组件
// const App = (props) => {
//   // console.log(props);
//   // 大括号里面写js表达式
//   return <h1>hello React! { props.name }</h1>
// };

// 类组件
// 类组件其实就是函数组件的语法糖
class App extends React.Component {
  render() {
    // console.log(this);
    return (<h1>hello React!{ this.props.name }</h1>)
  }
}

// ReactDOM.render有两个参数, 第一个参数是元素，第二个参数是挂载的节点
ReactDOM.render(
  // app({
  //   name: 123
  // }),
  <App name="123"/>,
  document.querySelector('#root')
)
