import { useState } from 'react'
import { searchProducts } from '../redux/actionsCreator/productsActions'
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
            <form onSubmit={onSubmit} class="d-flex" role="search">
                <input onChange={onInputChange} class="form-control me-2 border-0" type="search" placeholder="Buscar" aria-label="Buscar"/>
                <button class="btn btn-outline-success border-0" type="submit" style={{
                                backgroundColor: "#FFFCF9",
                                color: "#352D39"
                }}>Buscar</button>
            </form>
        </div>
}