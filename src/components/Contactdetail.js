import React, {useContext} from 'react'
import {Contactdata} from '../context/Contextdata'
import { TableCell,Button } from '@material-ui/core'


const Contactdetail = ({ user }) => {
    const {dispatch}   = useContext(Contactdata)
    return (
        <>
            <TableCell>{user.name}</TableCell>
    <TableCell>{user.number}</TableCell>
    <TableCell><Button color="secondary" onClick={() => dispatch({type:"REMOVE_CONTACT", id: user.id})}>Delete</Button></TableCell>
        </>
    )
}

export default Contactdetail
