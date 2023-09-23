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
import UseRef from './components/UseRef';
import UseContext from './components/context/UseContext';
import Callback from './components/Callback';
import Todolist from './components/Todolist';


const App = () => {
  return (
    <>
      <div className='App'>
        {/* <UseStates /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject /> */}
        {/* <HandleForm /> */}
        {/* <Toggle /> */}
        {/* <Form /> */}
        {/* <UseEffect /> */}
        {/* <Prop name="dilip" age="18" /> */}
        {/* <Prop name="Chandra Prakash" age="23" /> */}
        {/* <Task /> */}
        {/* <UseRef /> */}
        <UseContext name="dilip" />
        {/* <Callback /> */}
        <Todolist />

      </div>
    </>
  )
}

export default App;