
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
  console.log(email, password)
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