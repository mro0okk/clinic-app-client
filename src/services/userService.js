import axios from "../axios"
export const login = async (email, password) => {
  const res = (await axios.post("/api/login", { email, password })).data

  return res
}

export const getAllUsers = async (inputId) => {
  console.log(inputId)
  const res = (await axios.get(`/api/get-users/${inputId}`)).data
  return res
}
