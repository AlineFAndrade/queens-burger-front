
export const registerUser = (userBody) => {
  fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userBody)
  })
}

export const getAllProducts = async () => {
  try{
  const response = await fetch("http://localhost:8080/api/product", {credentials: 'include'});
  const productList =  await response.json();
  return productList;
  } catch(e){
    console.log(e)
  }
}

export const deleteProduct = (values) => {

   fetch("http://localhost:8080/product/" + values.id,
      {
        method: "DELETE",
      }
    );
}

// export const createOrder = (order) => {
//   return fetch("http://localhost:8080/order", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//
//     })
//   })
// }


