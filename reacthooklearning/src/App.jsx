import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useState hook basics

// function App() {
//   const [color , setColor]= useState("Red")
//   const changeColor = ()=>{
//       setColor("Blue")
//   }

//   return (
//     <>
//     
//       <h1>My Favourite Color is {color}!</h1>

//       <button onClick={changeColor} >Blue</button>
//     </>
//   )
// }

// export default App




// useState Hooks for multiple state variable

//  function App(){
//   const [car , setCar] = useState( {
//    brand: "Ferrari",
//    color: "Red",
//    model: "Roma", 
//    year: "2023"
//   } )

//   const changeColor = ()=>{
//     // setCar ({...car, color:"blue"}) // we can use spread operator here to get all the values from the above object first method
//     setCar ((prev)=>{
//          return {...prev , color:"blue"}
//     })
  
//   }

//    return(
//      <>
//      <h1>My {car.brand} </h1>
//      <h2>It is a {car.color} {car.model} from {car.year} </h2>
//      <button onClick={changeColor} >Blue</button>
//      </>
//    )
//  }

//  export default App

// useEffect hook

//  function App(){
//   const [count , setCount] = useState(0)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count=> count + 1);
//     },2000)
//   },[])
    

//    return(
//      <>
//     <h1>I've rendered {count} times !</h1>
//      </>
//    )
//  }

//  export default App


// useRef Hooks

// function App(){
// const [value , setValue] = useState(0)
// const count = useRef(0);

// useEffect(()=>{
//   count.current = count.current + 1;
// });

//   return(
//     <>
//     <button onClick={()=>{setValue(prev=> prev-1)}} >-1</button>
//     <h1>{value}</h1>
//     <button onClick={()=>{setValue(prev=> prev+1)}} >+1</button>
//     <h1>Render Count: {count.current} </h1>
//     </>
//   )
// }

// export default App

// use ref for selecting dom element 

// function App(){
// const inputElement = useRef();
// const buttonClicked = ()=>{
//   console.log(inputElement.current);
//   inputElement.current.style.background = "blue"
// }
//   return(
//     <>
//     {/* this is the method to connect dom elements using useref */}
//     <input type="text" ref={inputElement} /> 
//     <button onClick={buttonClicked}  >Click Here</button>
//     </>
//   )
// }

// export default App




function App(){
       
        
    
        return(
          <>
         
          </>
        )
      }
    
      export default App
    





    //   function App(){
       
        
    
    //     return(
    //       <>
         
    //       </>
    //     )
    //   }
    
    //   export default App
    