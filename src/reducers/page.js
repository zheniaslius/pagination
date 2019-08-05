export default (state = 0, { type }) => {
  switch (type) {

  case 'LOAD_NEXT_PAGE':
    return state + 1;

  case 'LOAD_PREV_PAGE':
    return state - 1;

  default:
    return state
  }
}
