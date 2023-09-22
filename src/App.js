import React from 'react'
import './App.css'
import UseStates from './components/UseStates';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import Form from './components/Form';
import Toggle from './components/Toggle';
import HandleForm from './components/HandleForm';
import Extra from './Extra';
// UseEffect
import UseEffect from './components/UseEffect';

import Task from './components/Task';
import Prop from './components/Prop';


const App = () => {
  return (
    <>
      <div className='App'>
        <UseStates />
        <UseStateArray />
        <UseStateObject />
        <HandleForm />
        <Toggle />
        <Form />
        <UseEffect />
        <Prop name="dilip" age="18" />
        <Prop name="Chandra Prakash" age="23" />
        <Task />

      </div>
    </>
  )
}

export default App;