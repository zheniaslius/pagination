export default (users = [], { type, payload }) => {
  switch (type) {

  case 'USERS_LOADED':
    return payload;

  default:
    return users
  }
}
