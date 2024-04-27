import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import Delete from "../components/buttons/Delete";
import Edit from "../components/buttons/Edit";

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", display: "flex", width: 90 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        display: "flex",
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        display: "flex",
        editable: true,
    },
    {
        field: "age",
        display: "flex",
        headerName: "Age",
        width: 110,
    },
    {
        field: "fullName",
        headerName: "Full name",
        display: "flex",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
        field: "Actions",
        headerName: "Actions",
        width: 110,
        display: "flex",
        renderCell: ({ row }) => {
            return (
                <>
                    <GridActionsCellItem
                        icon={<Edit onClick={() => console.log()} />}
                        label="Edit"
                        color="inherit"
                    />
                    <GridActionsCellItem
                        icon={<Delete onClick={() => console.log()} />}
                        label="Delete"
                        color="inherit"
                    />
                </>
            );
        },
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Category() {
    return (
        <Box>
            {" "}
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default Category;