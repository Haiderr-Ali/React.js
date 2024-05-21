import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberallowed] = useState(false);
  const [charAllowed , setCharallowed] = useState(false);
  const [password , setPassword] = useState(""); // we leave use state default value here because we want to fill data from another source or from somewhere else...//

  //useRef hook to target copy button
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789" 
    if (charAllowed) str += "!@#$%^&*:;/?>.<,+=_-"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)



  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg
       px-4 py-3 my-8 text-orange-500 bg-gray-700' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >

          <input 
          type="text" 
          value= {password}
          className='outline-none w-full py-1 px-3'
          placeholder='Enter Your Password: '
          readOnly
          ref={passwordRef}
          
          />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink -0' >Copy</button>
        </div>
           <div className='flex text-sm gap-x-2'>
           <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min = {8}
            max={50}
            value={length}
            className='cursor-pointer '
            onChange={(e) => {setLength(e.target.value)} }
            />
            <label>Length : {length}</label>
           </div>
           <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberallowed((prev)=> !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>

           </div>
           <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {charAllowed}
            id='charInput'
            onChange={()=>{
              setCharallowed((prev)=> !prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>

           </div>
           </div>

      </div>
    </>
  )
}

export default App
