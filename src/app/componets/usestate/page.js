"use client"
import React from 'react'
import { useState } from 'react';

export default function page() {

    const [steps, setSteps] = useState(0);

    function increment() {
      setSteps(prevState => prevState + 1);
    }

  return (
    <div>
        <h1 className={"text-4xl p-8"}>Learing State Management</h1>
    <h3 className={"text-2xl p-8"}>UseState hook</h3>
    <p className={"p-8"}>The useState hook in React is a function that lets you add state to functional components, allowing you to store and update values over time. 
    It returns an array with the current state value  and a function to update it.</p>

    <div className={"p-8 "}>
        <h4>In this example i created a counter which update the value of counter when button we click on button this happend with the help of UseState hook. </h4>
     <span > Today you've taken {steps} steps!</span>
      <br />
      <button  onClick={increment} class="bg-blue-500 m-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      I took another step
</button>
    </div>
    </div>

    
  )
}
