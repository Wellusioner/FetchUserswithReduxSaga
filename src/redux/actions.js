export const getUsers = () => ({
  type: 'GET_USERS'
})

export const singleUser = (login) => ({
  type: 'SINGLE_USER',
  login
})
