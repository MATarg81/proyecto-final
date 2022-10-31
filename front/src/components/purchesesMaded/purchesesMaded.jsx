import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
// import PurchesesDetail from './PurchesesDetail';
import { getCart } from '../../redux/actionsCreator/cartActions';




export default function PurchesesMaded(){
    const dispatch = useDispatch();
    const purchesesMaded = useSelector(state=> state.cartReducer.purchesesMaded)
    // const { id } = useParams();

    useEffect(()=>{
        if(purchesesMaded.length === 0){
        dispatch(getCart(1))//hardcodeo
        // dispatch(getCart(id))
    }
    }, [dispatch, purchesesMaded])

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

