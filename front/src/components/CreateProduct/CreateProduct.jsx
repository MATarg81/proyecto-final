import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {get_categories}  from '../../redux/actionsCreator/categoriesActions';
import {createProduct} from '../../redux/actionsCreator/productsActions';
import {useState}  from 'react';



const CreateProduct = function() {


    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const [error, setError] = useState({});

    useEffect(() => {
        dispatch(get_categories());
    }, [dispatch]);


    const [input, setInput] = useState({
        name: "",
        price: 0,
        image: "",
        categories:"",
      });

    const handleChange = (e) => {



        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });


            setError(
                validate({
                    ...input,
                    [e.target.name]: e.target.value,
                }
            )
            
    )}
    

    const handleCheck = (e) => {

        
         setInput({
            ...input,
            categories: e.target.value

        })
       

        setError(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));

        
    }

    const validate = (input) => {

        let error = {};

        if(input.name.length < 5) {
            error.name = "The name must have at least 5 characters."
        } 
        if(input.price < 1 || input.price > 100000) {
            error.price = "Price must be bigger than 0 and less than 100.000"
        }
      

       
        if(input.image.length > 0 && !/^.*\.(jpe?g|JPE?G|png|PNG|bmp|BMP|gif|GIF)$/.test(input.image)) {
            error.image = "The file must be .jpg, .jpeg, .png, .bmp or .gif"
        }
        if(input.category.length < 0) {
            error.category = "Category must have at least 1 elemnt chosen"
        } 
      
       

        return error;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (Object.keys(error).length === 0 ) {
            dispatch(createProduct(input))
            setInput({
                name: "",
                price: 0,
                image: "",
                category:"",
              });
              alert("Product created succesfully!")
           
        }
        else {
            alert("You must fill in all fields.")

        }

    }




    return (
        <div >
            <h1 >Create a new recipe</h1>
            <form   >
                <label>
                    Nombre: 
                </label>
                <input placeholder = "Nombre..."  value = {input.name} type='text' onChange={handleChange} name='name'/>
                {error.name && <p >{error.name}</p>}
                <label>
              
                    Precio:                 <span >{input.price}</span>
                </label>
                <input  value = {input.price} type='text' onChange={handleChange} name='price'/> 
                {error.price && <p>{error.price}</p>}
                <label>
             
                    Image: 
                </label> 
                <input placeholder = "image URL... (optional)"  value = {input.image} type='text' onChange={handleChange} name='image'/> 
                {error.image && <p >{error.image}</p>}
                <label>
                    Categorias: 
                </label> 
                <div>
                    {categories && categories.map((d) => 
                        <label  htmlFor={d.name} key={d.name}>
                            <div  >
                                <input onClick={handleCheck} key = {d.name} type ='checkbox' value = {d.name}/><span>{d.name + "    "} </span>
                            </div>
                        </label>)
                    }
                    {error.category && <p >{error.category}</p>}
                </div>
                <button  onClick={handleSubmit} disabled={Object.keys(error).length > 0}>Create</button>
            </form>
        </div>
        
    )
}

export default CreateProduct;