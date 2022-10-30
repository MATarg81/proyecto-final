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


export default validate;