
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
  try {
    // const response = await fetch("http://localhost:8080/api/product", {credentials: 'include'});
    // const productList =  await response.json();
    // return productList;
    return [{ "id": 11, "name": "Lanche de Frango", "flavor": "duplo", "complement": null, "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:42:58.737+00:00", "updatedAt": null }, { "id": 12, "name": "Lanche de Frango", "flavor": "simples", "complement": "Queijo", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:44:30.923+00:00", "updatedAt": null }, { "id": 13, "name": "Lanche de Frango", "flavor": "simples", "complement": "Cebola", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:47:38.007+00:00", "updatedAt": null }, { "id": 14, "name": "Lanche de Frango", "flavor": "duplo", "complement": "Queijo", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:47:38.009+00:00", "updatedAt": null }, { "id": 15, "name": "Lanche de Frango", "flavor": "duplo", "complement": "Cebola", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:47:38.012+00:00", "updatedAt": null }, { "id": 10, "name": "Lanche de Frango", "flavor": "simples", "complement": null, "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:41:55.036+00:00", "updatedAt": null }, { "id": 18, "name": "Lanche de Carne", "flavor": "simples", "complement": null, "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:51:05.732+00:00", "updatedAt": null }, { "id": 19, "name": "Lanche de Carne", "flavor": "duplo", "complement": null, "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:51:05.734+00:00", "updatedAt": null }, { "id": 20, "name": "Lanche de Carne", "flavor": "simples", "complement": "Queijo", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:51:05.736+00:00", "updatedAt": null }, { "id": 22, "name": "Lanche de Carne", "flavor": "duplo", "complement": "Queijo", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:51:05.741+00:00", "updatedAt": null }, { "id": 23, "name": "Lanche de Carne", "flavor": "duplo", "complement": "Cebola", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:51:05.743+00:00", "updatedAt": null }, { "id": 24, "name": "Lanche Vegetariano", "flavor": "simples", "complement": null, "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T21:55:36.939+00:00", "updatedAt": null }, { "id": 25, "name": "Lanche Vegetariano", "flavor": "duplo", "complement": null, "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T21:55:36.943+00:00", "updatedAt": null }, { "id": 26, "name": "Lanche Vegetariano", "flavor": "simples", "complement": "Queijo", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T21:55:36.946+00:00", "updatedAt": null }, { "id": 27, "name": "Lanche Vegetariano", "flavor": "simples", "complement": "Cebola", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T21:55:36.948+00:00", "updatedAt": null }, { "id": 28, "name": "Lanche Vegetariano", "flavor": "duplo", "complement": "Queijo", "price": 1.0, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T21:55:36.950+00:00", "updatedAt": null }, { "id": 30, "name": "Batata Frita", "flavor": null, "complement": null, "price": 2.0, "image": null, "type": "main", "subtype": "sideDish", "createdAt": "2023-03-17T23:03:51.665+00:00", "updatedAt": "2023-03-17T23:03:51.665+00:00" }, { "id": 21, "name": "Lanche de Carne", "flavor": "simples", "complement": "Cebola", "price": 2.5, "image": null, "type": "main", "subtype": "sandwich", "createdAt": "2023-03-16T20:51:05.740+00:00", "updatedAt": null }];
  } catch (e) {
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


