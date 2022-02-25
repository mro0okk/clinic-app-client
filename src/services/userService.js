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

export const createNewUser = async (data) => {
  const res = await axios.post(`/api/create-user`, data)
  return res.data
}
export const deleteUser = async (data) => {
  console.log(data)
  const res = await axios.delete(`/api/delete-user`, { data })
  console.log(res)
  return res.data
}
