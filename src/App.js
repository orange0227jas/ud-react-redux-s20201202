import React from 'react';

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
    <Moti />
    <Moti />
    <Moti />
    <Moti />
    </>
  )
}

const Moti = () => {
  return <div>moti!!!</div>
}

export default App;
