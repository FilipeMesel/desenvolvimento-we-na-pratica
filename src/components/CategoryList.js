import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoryList(props) {
    const [rows, setRows] = useState([])

      useEffect(()=> {
        axios.get("https://1ocmjn4wfi.execute-api.us-east-1.amazonaws.com/listar-categorias").then(
            res => {
                setRows(res.data.response)
            }
        )
      },[])
    return (
        <div>

            <h4>{props.texto}</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Identificador </TableCell>
                            <TableCell align="right">Nome</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CategoryList