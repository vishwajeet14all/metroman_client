





export default function StatusTable() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Discount</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
