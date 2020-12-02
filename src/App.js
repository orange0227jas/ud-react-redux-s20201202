import React from 'react';
import PropTypes from 'prop-types';

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
    {name:"ricecake" ,age:100},
    {name:"blueCafe" ,age:999},
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

Moti.propTypes ={
  name: PropTypes.string,
  age:PropTypes.number.isRequired
}
//isRequiredは空白だった場合に検知できる。

export default App;
