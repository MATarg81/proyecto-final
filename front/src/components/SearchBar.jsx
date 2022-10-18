import { useState } from 'react'
import { searchProducts } from '../redux/actions/productsActions'
import { useDispatch } from 'react-redux'

export default function Searchbar() {

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