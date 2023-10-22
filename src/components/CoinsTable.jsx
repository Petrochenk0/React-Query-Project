import React from 'react';
import Table from 'react-bootstrap/Table';
const CoinsTable = ({ data }) => {
  return (
    <Table striped border hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.rank}</td>
            <td>
              <img style={{ marginLeft: 20 }} src={item.icon} alt={item.name} width={30} />
              {item.name}
            </td>
            <td>$ {item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default CoinsTable;
