import React, { useState } from "react";
import { Card, CardContent, Button, TextField } from "@mui/material";
import axios from "axios";

function CategoryRegister(props) {
    const [name, setName] = useState('')

    function registerCategory() {
        axios.post("https://1ocmjn4wfi.execute-api.us-east-1.amazonaws.com/cadastro-categoria", {
            "name": name
        }).then(res => {
            alert("A Categoria foi cadastrada com sucesso")
        })
    }

    return (

        <Card>
            <CardContent>
                <div style={{ fontSize: '16px' }}>{props.texto}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value = {name} onChange = {(e) => setName(e.target.value)}  fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                    </div>

                    <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                        <Button variant="contained" onClick={()=> registerCategory()}>Salvar</Button>
                    </div>

                </div>

            </CardContent>
        </Card>
    )
}

export default CategoryRegister