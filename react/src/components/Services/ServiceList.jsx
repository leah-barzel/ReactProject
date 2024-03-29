import {observer} from 'mobx-react';
import DataStore from '../../store/store.js';

const ServiceList = (observer(() =>{
    return(
        <>
        {DataStore.services.map((service,index) =>{
            <div key={index}>{service.name}</div>
        })}
        </>
    )
}))

export default ServiceList