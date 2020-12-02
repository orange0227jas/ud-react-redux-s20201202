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
  const profiles =[
    {name:"moti" ,age: 30},
    {name:"ricecake" ,age: 100},
    {name:"mori"},
  ]
  return (
    <>
    <div>
      {
        profiles.map((profile, index ) =>{
          return <Moti name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
    </>
  )
}

const Moti = (props) => {
  const {name , age} =props;
  return <div>I am {name}で、年齢は{age}</div>
}

Moti.defaultProps ={
  age:1
 }
//空の場合に適用される。

export default App;
