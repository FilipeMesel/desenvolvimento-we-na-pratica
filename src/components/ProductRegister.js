import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ProductRegister(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState('')
    const [selectCategorys, setSelectCategorys] = useState([])

    function registerProduct() {
        axios.post("https://1ocmjn4wfi.execute-api.us-east-1.amazonaws.com/cadastro-produto", {
            "name": name,
            "price": price,
            "category": category
        }).then(res => {
            alert("O produto foi cadastrado com sucesso")
        })
    }

    useEffect(() => {
        axios.get("https://1ocmjn4wfi.execute-api.us-east-1.amazonaws.com/listar-categorias").then(
            res => {
                setSelectCategorys(res.data.response)
            }
        )
    }, [])

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ fontSize: '16px' }}>{props.texto}</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={price} onChange={(e) => setPrice(e.target.value)} fullWidth id="outlined-basic" label="Preço" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Categorias"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    {
                                        selectCategorys.map((c) => (
                                            <MenuItem value={c.id}>{c.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>


                        </div>

                        <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                            <Button variant="contained" onClick={() => { registerProduct() }}>Salvar</Button>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default ProductRegister