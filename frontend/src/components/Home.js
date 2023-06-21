import React from 'react'
import Header from './Header'
import './Home.css'
import FormMain from './FormMain'
import TableMain from './TableMain'

function Home() {
  return (
    <div>
      <Header></Header>
      <div className='Home-Frow'>
     
      </div>
      <div className='content-main'>
    <div className='Form-Home'>    <FormMain></FormMain></div>
    <div className='Table-Main'><TableMain></TableMain></div>
      </div>
    </div>
  )
}

export default Home