
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
export const loginWithUserPassword = (email, password) => {

  return fetch("http://localhost:8080/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
}

export const getAllProducts = () => {
  const response = fetch("http://localhost:8080/product");
  const productList = response.json();
  return productList;
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


