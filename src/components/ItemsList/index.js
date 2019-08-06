import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../Item';
import { loadNextPage, loadPrevPage } from '../../actions'; 

import './ItemList.css';

const Controls = ({ users, page }) => {
  const dispatch = useDispatch();
  return (
    <div className="btn-wrapper">
      <div>
        <button
          onClick={() => dispatch(loadPrevPage())}
          disabled={!page}>
          &#8249;
        </button>
        <span className="page-counter">{page+1}</span>
        <button
          onClick={() => dispatch(loadNextPage())}
          disabled={page + 1 >= users.length / 5}>
          &#8250;
        </button>
      </div>
    </div>
  )
}

const ItemList = () => {
  const users = useSelector(state => state.users);
  const page = useSelector(state => state.page);
  const visibleUsers = users.slice(page * 5, (page * 5) + 5);

  return (
    <div className="items-container">
      <table className="items-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map(user => 
            <Item key={user.id} {...user}/>
          )}
        </tbody>
      </table>
      <Controls users={users} page={page}/>
    </div>
  );
};

export default ItemList;