import React from 'react'
function Table() {
let lsit = [
  {
    name: "kunal",
    phone: "1234564784",
    address: "dfcdsfsfsdf",
    startdate: "2/04/2022",
    enddate: "04/04/2022",
  },
  {
    name: "kunal",
    phone: "1234564784",
    address: "dfcdsfsfsdf",
    startdate: "2/04/2022",
    enddate: "04/04/2022",
  },
  {
    name: "kunal",
    phone: "1234564784",
    address: "dfcdsfsfsdf",
    startdate: "2/04/2022",
    enddate: "04/04/2022",
  },
];

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phoe</th>
            <th>Address</th>
            <th>startdate</th>
            <th>enddate</th>
          </tr>
        </thead>
        {lsit.map((item, id) => (
          <>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.startdate}</td>
                <td>{item.enddate}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
}

export default Table