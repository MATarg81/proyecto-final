import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  getCategories,
  updateProduct,
} from "../redux/actionsCreator/productsActions";

export default function ProfileEditProduct() { //Buscar por ID
  const stateCategories = useSelector((state) => state.productsReducer.categories);
  const dispatch = useDispatch();
//   const [input, setInput] = useState({
//     id: `${id}`,
//     name: "",
//     price: "",
//     categories: [`${categories}`],
//     detail: "",
//     image: [`${image}`],
//     stock: "",
//   });

//   const [newCategory, setNewCategory] = useState({
//     name: "",
//   });
//   const [newImage, setNewImage] = useState({
//     image: "",
//   });

//   useEffect(() => {
//     if (categories?.length === 0) {
//       dispatch(getCategories());
//     }
//   }, [categories, dispatch]);

//   function handleDelete(e) {
//     console.log(e.target.id);
//   }

//   function handleChange(e) {
//     setInput({
//       ...input,
//       [e.target.id]: e.target.value,
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (newCategory.name) {
//       dispatch(addCategories(newCategory.name));
//     }
//     //if(newImage) {
//     //add image
//     //}
//     //dispatch(updateProduct(input))
//   }

//   return (
//     <>
//       <form className="container">
//         <div className="row mt-3 g-2 " onChange={handleChange} noValidate>
//           <div className="">
//             <label className="col-12" for="name">
//               Nombre:{" "}
//             </label>
//             <input
//               className="col-12"
//               type="text"
//               placeholder={name}
//               id="name"
//               value={input.name}
//               onChange={handleChange}
//             ></input>
//           </div>

//           <div className="">
//             <label className="col-12" for="price">
//               Precio:{" "}
//             </label>
//             <input
//               className="col-12"
//               type="text"
//               placeholder={price}
//               id="price"
//               value={input.price}
//               onChange={handleChange}
//             ></input>
//           </div>

//           <div className="">
//             <label className="col-12" for="categories">
//               Categorías:
//             </label>

//             <div class="form-check">
//               {categories &&
//                 categories.map((c) => {
//                   return (
//                     <div>
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value={input.categories}
//                         id="categories"
//                       ></input>
//                       <label class="form-check-label" for="categories">
//                         {c.name}
//                       </label>
//                     </div>
//                   );
//                 })}
//             </div>
//             <div className="">
//               <label className="col-12" for="newCategory">
//                 Agregar categoría:
//               </label>
//               <input
//                 className="col-12"
//                 type="text"
//                 placeholder="Escribe el nombre de la categoría"
//                 id="newCategory"
//                 value={newCategory.name}
//                 onChange={(e) => setNewCategory(e.target.value)}
//               ></input>
//             </div>
//           </div>

//           <div className=" text-wrap">
//             <label className="col-12" for="detail">
//               Detalle:{" "}
//             </label>
//             <textarea
//               className="col-12"
//               placeholder={detail}
//               rows="3"
//               id="detail"
//               value={input.detail}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="">
//             <label className="col-12" for="stock">
//               Stock:{" "}
//             </label>
//             <input
//               className="col-12"
//               type="text"
//               placeholder={stock}
//               id="stock"
//               value={input.stock}
//               onChange={handleChange}
//             ></input>
//           </div>

//           <div>
//             <label className="col-12">Imágenes: </label>
//             <div>
//               {image.map((i, index) => {
//                 return (
//                   <div className="" name={`image${index}`}>
//                     <img
//                       src={i}
//                       className="img-fluid img-thumbnail col-12"
//                       style={{ width: "15%", height: "75%" }}
//                       alt=""
//                     />
//                     <button
//                       type="button"
//                       class="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     ></button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="">
//             <label className="col-12" for="newImage">
//               Agregar imagen{" "}
//             </label>
//             <input
//               className="col-12"
//               type="file"
//               class=""
//               id="newImage"
//               value={newImage.image}
//             ></input>
//           </div>
//         </div>
//         <div className="d-flex flex-row-reverse">
//           <button
//             type="button"
//             class=" btn btn-primary mt-3"
//             onClick={handleSubmit}
//           >
//             Guardar
//           </button>
//         </div>
//       </form>
//     </>
//   );
}
