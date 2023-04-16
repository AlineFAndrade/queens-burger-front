const login = async (username, password) => {

  const response = await fetch("http://localhost:8080/api/auth/signin",
  {
    method: "POST",
    headers: {
      "Acept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    }),
    credentials: "include"
  })

  if(response.ok) {
    const userInfo = await response.json();
    localStorage.setItem("logUserApp", JSON.stringify(userInfo));
    return response
  } else {
    const msgError = await response.text()
    throw new Error(msgError)
  }
}

const logout = async () =>{

  const response = await fetch("http://localhost:8080/api/auth/signout",{
    method: "POST",
  })
  
  if(response.ok){
    localStorage.removeItem("logUserApp")
  } else {
    const msgError = await response.text()
    throw new Error(msgError)
  }

}

const getLogUser = () => {

  return JSON.parse(localStorage.getItem("logUserApp")) 
}

const AuthService = {
  login,
  logout,
  getLogUser
}
export default AuthService
