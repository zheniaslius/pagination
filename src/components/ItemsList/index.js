import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../Item';
import { loadNextPage, loadPrevPage } from '../../actions'; 

import './ItemList.css';

const ItemList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const page = useSelector(state => state.page);
  const visibleUsers = users.slice(page * 5, (page * 5) + 5);

  return (
    <div className="items-container">
      <table className="items-table">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>surname</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map(user => 
            <Item key={user.id} {...user}/>
          )}
        </tbody>
        <button
          onClick={() => dispatch(loadPrevPage())}
          disabled={!page}>
          prev
        </button>
        <button
          onClick={() => dispatch(loadNextPage())}
          disabled={page + 1 >= users.length / 5}>
          next
        </button>
      </table>
    </div>
  );
};

export default ItemList;