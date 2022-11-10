const validate = (input) => {

    let error = {};

    if(input.name.length < 5) {
        error.name = "El nombre debe tener al menos 5 caracteres"
    } 
    if(input.price < 1 || input.price > 100000) {
        error.price = "El precio debe ser un valor entre 1 y 100000"
    }
   
    if(input.image.length > 0 && !/^.*\.(jpe?g|JPE?G|png|PNG|bmp|BMP|gif|GIF)$/.test(input.image)) {
        error.image = "El formato de imagen debe ser .jpg, .jpeg, .png, .bmp or .gif"
    }
    if(input.detail.length < 5) {
      error.detail = "La descripción debe tener al menos 5 caracteres."
  } 
    if(input.category.length < 0) {
        error.category = "Debe seleccionar al menos una categoría"
    } 
  
   

    return error;
}


export default validate;