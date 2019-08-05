import React, { useEffect } from 'react';
import ItemList from '../ItemsList';
import data from '../../data/users.json';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../../actions';

import './App.css';

// import api from '../../api';

// ===== CORS won`t let me do this =====
// const getUsers = async () => {
//   await api.getUsers();
// }

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers(data.users));
  }, [])

  return (
    <div className="wrapper">
      <ItemList />
    </div>
  )
}

export default App
