import { Button , TextField } from '@mui/material';
import {observer} from 'mobx-react';
import DataStore from '../../store/store.js';
import { useState } from 'react';
import { addServices } from '../Store/server.js';

const AddService = (observer(() =>{
const [name , setName] = useState('');
    return(
        <>
        <TextField id="name" aria-label="serviceName" variant='outLined' value={name} onChange={(e)=>{ setName(e.target.value)}}></TextField>
       <button variane="contained" onClick={()=>AddService({name})}>Add service</button>
        </>
    )
}))

export default AddService