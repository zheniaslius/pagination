import React from 'react';

import './Item.css';

const Item = ({ id, name, surname, desc }) => {
  return (
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{desc}</td>
    </tr>
  );
};

export default Item;