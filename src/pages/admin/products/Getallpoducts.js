import { useEffect, useState } from "react";
import DataTable from "../../../components/dataTable/DataTable";
import { Link } from "react-router-dom";
import "./products.scss";
import { useAllProductsQuery } from "../../../redux/api/productApi";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "image",
    headerName: "Image",
    width: 80,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "https://i.ibb.co/1KwfzCK/Noavatar.jpg"}
          alt=""
        />
      );
    },
  },
  {
    field: "name",
    type: "String",
    headerName: "Product Name",
    width: 250,
  },
  {
    field: "price",
    type: "Number",
    headerName: "Price",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
    type: "String",
  },
  {
    field: "category",
    headerName: "Category",
    type: "String",
    width: 100,
  },
];

export default function Getallproducts() {
  const { data } = useAllProductsQuery();
  const [products, setProducts] = useState([]);
  if (data) {
    console.log(data);
  }  

  useEffect(() => {
    if (data) {
      // Assuming that the data received is an array of products
      const productsWithIds = data.map((product, index) => ({
        ...product,
        id: product._id || index, // Use _id if available, otherwise use index
      }));
      setProducts(productsWithIds);
    }
  }, [data]);  

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <Link to="/layout/product/new">
          <button>Add New Product</button>
        </Link>
      </div>
      <DataTable slug="productdetails" columns={columns} rows={products} />
    </div>
  );
}
