import React from 'react';
import  Contactdataprovider from './context/Contextdata'
import Contacts from './components/Contacts' 
import Contactform from './components/Contactform'
import Navbar from '../src/components/Navbar/Navbar'


function App() {
  return (
    <div>

     <Navbar />
   <Contactdataprovider>
     <Contactform />
    <Contacts />
   </Contactdataprovider>
   </div>
  )
}

export default App;
