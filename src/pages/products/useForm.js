import { useState, useEffect } from "react";
import { deleteProduct, getAllProducts, handleDelete } from "../../service/dataService"

const useForm = () => {

  const [listProducts, setListProducts] = useState([]);
  const [showModalDel, setShowModalDel] = useState(false);
  const [idProduct, setIdProduct] = useState();

  useEffect(() => {
    const response = getAllProducts();
       const listProducts = response.json();
       setListProducts(listProducts)
   }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const [values, setValues] = useState({
    id: "",
  })

  const onClickDelete = (id) => {
    setShowModalDel(true);
    setIdProduct(id)
  }

  async function handleDelete(idProduct) {
    deleteProduct(idProduct)
    getAllProducts()
    toggleModal()
  }

  const toggleModal = () => {
    setShowModalDel(false)
    setIdProduct("")
  }

  return {  handleChange, values, onClickDelete, toggleModal, handleDelete, showModalDel, listProducts }
}
export default useForm;