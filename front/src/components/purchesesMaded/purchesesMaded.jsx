import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import PurchesesDetail from './PurchesesDetail';


export default function PurchesesMaded(){
    const dispatch = useDispatch();
    const purchesesMaded = useSelector(state=> state.cartReducer.purchesesMaded)

    return (
        <div>
        {purchesesMaded?.map((purches)=>{
            return(
            <div>
             <div id={purches.id}>
            <h6>{purches.name}</h6>
            <h6>{purches.image}</h6>
            <Link to={`/detalleComprasRealizadas/:${purches.id}`}>detalle de tu compra</Link>
             </div>
            </div>
         )
        })}
        </div>
    )
}

