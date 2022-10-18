import { useState } from 'react'
import { searchProducts } from '../redux/actionsCreator/productsActions'
import { useDispatch, useSelector } from 'react-redux'

export default function Searchbar() {

    const products = useSelector((state) => state.productsReducer.showProducts);

    const [search, setSearch] = useState('')

    let dispatch = useDispatch()
    
    function onSubmit(e) {
        e.preventDefault();
        dispatch(searchProducts(search))
    }

    function onInputChange(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return <div>
            <form onSubmit={onSubmit}>
                <input  type='text' onChange={onInputChange} placeholder='Buscar' value={search}/>
                <input  type='submit' value='Search'/>
            </form>
        </div>
}