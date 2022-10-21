import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {get_categories}  from '../../redux/actionsCreator/categoriesActions';
import {createProduct} from '../../redux/actionsCreator/productsActions';
import {useState}  from 'react';



const CreateProduct = function() {


    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoriesReducer.categories);
    const [error, setError] = useState({});

    useEffect(() => {
        dispatch(get_categories());
    }, [dispatch]);


    const [input, setInput] = useState({
        name: "",
        price: 0,
        image: "",
        detail: "",
        category:"",
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
        if(input.detail.length < 5) {
          error.detail = "Detail must have at least 10 characters description."
      } 
        if(input.category.length < 0) {
            error.category = "Category must have at least 1 elemnt chosen"
        } 
      
       

        return error;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let keys =Object.keys(error);
        let values = Object.values(error);
        if (keys.length === 0 && values.length === 0) {
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

        <div>
        
      <div className="ProductCreate">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3" style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>

            <label for="name" className="form-label">
              Nombre del producto
            </label>
            <input
              style={{width:'600px'}}
              type="text"
              className="form-control mb-3"
              id="name"
              aria-describedby="name"
              placeholder="Name..."
              value={input.name} 
              name='name' 
              required
              onChange={(e)=>handleChange(e)}  
            /> 
            {error.name && <p >{error.name}</p>}
            


          
            <label for="times" className="form-label">
              Precio
            </label>
            <input
            style={{width:'600px'}}
              type="number"
              className="form-control mb-3"
              id="price"
              placeholder="Precio..."
              value={input.price} 
              name='price' 
              required
              onChange={(e)=>handleChange(e)}
            />
            {error.price && <p>{error.price}</p>}

            <label for="image" className="form-label">
              Imagen
            </label>
            <input
            style={{width:'600px'}}
              type="iamge"
              className="form-control"
              id="image"
              placeholder="Imagen..."
              value={input.image} 
              name='image' 
              onChange={(e)=>handleChange(e)}
            />
            {error.image && <p >{error.image}</p>}
            <label for="name" className="form-label">
              Detalles del producto: 
            </label>
            <input
              style={{width:'600px'}}
              type="text"
              className="form-control mb-3"
              id="detail"
              aria-describedby="detail"
              placeholder="Detalles..."
              value={input.detail} 
              name='detail' 
              required
              onChange={(e)=>handleChange(e)}  
            /> 
            {error.detail && <p >{error.detail}</p>}

                    <label>
                    Categorias: 
                </label> 
                <div>
                    {categories?.map((el) => 
                        <label htmlFor={el.name} key={el.name}>
                            <div  >
                                <input onClick={handleCheck} key = {el.name} type ='checkbox' value = {el.name}/><span>{el.name + "    "} </span>
                            </div>
                        </label>)
                    }
                    {error.categories && <p >{error.categories}</p>}
                </div>
            

          <hr />
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
          </div>
        </form>
      </div>
    </div>

    )
}

export default CreateProduct;