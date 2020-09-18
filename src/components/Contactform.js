import React,{useContext} from 'react';
import Inputhook from '../hooks/imputhooks'
import  { Contactdata } from '../context/Contextdata'
import TextField from '@material-ui/core/TextField';
import uniqid from 'uniqid'
import { Button,Container } from '@material-ui/core';

const Contactform = () => {
    const {dispatch} = useContext(Contactdata)
    const [name, ChangehandlerName, clearName] =  Inputhook("")
    const [number, ChangehandlerNumber, clearNumber] = Inputhook("")

    const addnewcontact = (e) => {
        e.preventDefault()
        dispatch({type: "ADD_CONTACT", newContact: {id: uniqid(), name: name,
        number: number}} )
        clearNumber()
        clearName()
    }
    
    return (
        <div>
            <Container maxWidth="lg">
            <form onSubmit={addnewcontact}>
                <TextField placeholder="Enter Name" variant="outlined" lable="Name" fullWidth type="text"  required value={name} placeholder="addname" onChange={ChangehandlerName}/>
                <TextField placeholder="Enter Email" variant="outlined"  fullWidth lable="Phone-no" type="text" required value={number} placeholder="add Number" onChange={ChangehandlerNumber}/>
                <Button variant="contained"  fullWidth type="submit" color="primary">Add </Button>

                
            </form>
            </Container>
        </div>
    )
}

export default Contactform
