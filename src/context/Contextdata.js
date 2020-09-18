import React,{useEffect, createContext, useReducer} from 'react'
import {ContactReducer} from '../Reducers/ContactReducer'

export const Contactdata = createContext()
const Contactdataprovider = (props) => {

   const [contacts, dispatch] =  useReducer(ContactReducer, [], () => {
      const localData =  localStorage.getItem('contacts')
      return localData ? JSON.parse(localData) : []; 
   });

    useEffect(() =>{
        localStorage.setItem("contacts", JSON.stringify(contacts))
    },[contacts])
    return (
        <Contactdata.Provider value={{users: contacts, dispatch}}>
{props.children}
        </Contactdata.Provider>
    )
}

export default Contactdataprovider
