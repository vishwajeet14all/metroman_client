import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function DataTable(props) {
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/layout/${props.slug}/${params.row.id}`}>
            <i className="bi bi-view-list">View</i>
          </Link>
          {props.handleDelete && (
            <div
              className="delete"
              onClick={() => props.handleDelete(params.row.id)}
            >
              <i className="bi bi-trash">Delete</i>
            </div>
          )}
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 800 },
          },
        }}
        pageSizeOptions={[1, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnFilter
        disableColumnSelector
      />
    </div>
  );
}
