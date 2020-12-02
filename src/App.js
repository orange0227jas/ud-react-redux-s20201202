import React, { Component } from "react";

// class App extends Component {
//   render (){
//     return( 
//     <>
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=> {console.log("I am moti")}}/>;
//     </div>
//     </>
//     )
//   }
// }

const App = () => {
  return (
    <>
    <Counter />
    </>
  )
}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state ={count:0 }
  }

  handlePlusButton = ()=> {
    this.setState({ count: this.state.count + 1 } )
    //状態を帰るときには、setStateを使うこと。setState実行時、再renderされる。
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render () {
    return (
    <>
      <div>counter: { this.state.count }</div>
      <button onClick={this.handlePlusButton} >+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </>
    )
  }
}
  
//isRequiredは空白だった場合に検知できる。

export default App;
