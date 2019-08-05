export const loadNextPage = () => ({ type: 'LOAD_NEXT_PAGE' });

export const loadPrevPage = () => ({ type: 'LOAD_PREV_PAGE' });

export const loadUsers = users => ({ type: 'USERS_LOADED', payload: users });