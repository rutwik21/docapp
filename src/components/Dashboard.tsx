'use client'
import React,{useRef, useEffect, useState} from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';
import { Input } from './ui/input';


function Dashboard() {

  const textareaRef = useRef(null);
  const [stateVariables, setStateVariables]:any = useState({});
  const variablesInTextarea:any = {};

  let handleSubmit =() => {}
  
  useEffect(() => {
    handleSubmit = () => {
      if(textareaRef.current){
        //@ts-ignore
        const content: string = textareaRef.current.value || "";
        if(content){
  
  
          for(let i = 0; i < content.length; i++){
            // Check if the character is a dollar sign and an opening curly brace. If yes, it's a variable.
            if(content[i] === '$' && content[i+1] && content[i+1] === '{'){
              let variable = '';
              let pointer = i;
              for(let j = i+2; j < content.length; j++){
                if(content[j] === '}'){
                  variablesInTextarea[variable] = null;
                  pointer = j+1; // Move the pointer to the next character after the opening bracket.
                  break;
                }
                variable += content[j];
              }
              i = pointer; // Move the pointer to the next character after the closing bracket.
            }
          }
          setStateVariables(variablesInTextarea);
          console.log(variablesInTextarea); // Output the variables found in the textarea content.
          console.log(stateVariables); // Output the variables found in the textarea content.
  
        }
      }
  
    }
  }, [variablesInTextarea]);

  let handleInput = (value:string) => {
    console.log(value);
  }
  
  return (
    <div className='p-6'>


      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>Docapp</h1>
        <p>Welcome to your dashboard!</p>
      </div>


      <div className="flex w-11/12 min-h-[90svh] justify-center items-center">

        <div className='w-full h-[40svh] place-content-center'>
          <p className='text-center mb-5 text-4xl '>Let's start the doc</p>
          <div className='flex align-middle justify-center'>
            <Textarea ref={textareaRef} className='w-[80%] min-h-[30svh] px-5 py-1'/>
          </div>
          <Button className='' onClick={()=>handleSubmit()}>GO</Button>
        </div>


        <div className='grid grid-cols-2 h-[40svh] place-content-center'>
          {
            Object.keys(stateVariables).map(variable=>{
              
                if(typeof variable==='string'){
                  if(!stateVariables[variable]){
                    return (
                      <div key={variable} className='text-center mx-4 w-2/12'>

                        <div>
                          {variable} 
                          <span >:
                            <Input type='text' className='w-24 m-2 ms-0'onChange={($event) =>{  
                              let value = $event.target.value;
                              handleInput(value)}} />
                          </span>
                        </div>

                      </div>
                    )
                  }
                  return (
                    <div key={variable} className='text-center mt-5'>
                      <p>{variable}:{stateVariables[variable]}</p>
                    </div>
                  )
                }else{
                  return null;
                }
            })
          }

        </div>


      </div>


    </div>
  )
}

export default Dashboard