import { useState, useEffect } from "react"
import { getAllProducts } from "../../service/dataService"


const UseForm = () => {
  const handleCheckProductName = event => {
    const target = event.target;
    const value = target.value;

    setProductValue({
      ...productValue,
      name: value
    })
  }

  const handleCheckFlavor = event => {
    const target = event.target;
    const value = target.value;

    setProductValue({
      ...productValue,
      flavor: value
    })
  }

  const handleCheckComplement = event => {
    const target = event.target;
    const value = target.value;

    setProductValue({
      ...productValue,
      complement: value
    })
  }

  const [productValue, setProductValue] = useState({})

  const [tab, setTab] = useState([])

  // let fries  = () => {
  //   if(!!productValue.name === "Batata Frita" || !!productValue.name === "Cebola Empanada"){
  //     !!productValue.flavor === "" && !!productValue.complement === ""
  //   } else {
  //     burgerProduct()
  //   } 
  // }

  // let burgerProduct = () => {
  //   !!productValue.name && productValue.name !== "" &&
  //   !!productValue.flavor && productValue.flavor !== "" &&
  //   !!productValue.complement && productValue.complement !== ""
  // }
    
  // useEffect(() => {
  //   console.log("aqui o que eu selecionei", productValue)
  //   if ( burgerProduct || fries) {
  //     getAllProducts().then((response) => {
  //       console.log("aqui todos os produtos", response);
  //       const productFound = response.filter((product) => {
  //         return product.name === productValue.name &&
  //           product.flavor === productValue.flavor &&
  //           product.complement === productValue.complement
  //       })
  //       console.log("aqui é o produto que deu match", productFound[0])
        
  //       tab.push({
  //         quant: 1,
  //         product: productFound[0]
  //       })
  //       setTab([...tab])
  //       setProductValue({})
  //     });
  //   }
  // }, [productValue]);

  return { handleCheckProductName, handleCheckFlavor, handleCheckComplement, tab }
}

export default UseForm;