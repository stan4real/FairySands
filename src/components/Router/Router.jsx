import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Events from '../../pages/Events'
import Main from '../../pages/Main'
import Layout from '../layout'
import ErrorElement from '../../pages/ErrorElement'

const Router = () => {
  return <BrowserRouter >
    <Routes>
        <Route element = {<Layout/>}>
          <Route element = {<Main/>} path='/'/>
          <Route element = {<Events/>} path='/events'/>
        </Route>
          <Route path='*' element= {<ErrorElement/>}/>
        
      
    </Routes>
  </BrowserRouter> 
    
}

export default Router