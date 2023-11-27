import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import BuscaClientePorId from "../ClientesComponents/BuscaPorId/BuscarPorId";
import BuscaTodos from "../ClientesComponents/BuscaTodos";

export default function BuscaPessoas(props) {
    const [buscarTodos, setBuscarTodos] = useState(false);
    const [buscarPorId, setBuscarPorId] = useState(false);

    const { tipo } = props;

    const handleClickBuscaTodos = () => {
        setBuscarTodos(true);
        setBuscarPorId(false);
    }

    const handleClickBuscaPorId = () => {
        setBuscarTodos(false);
        setBuscarPorId(true);
    }

    return (
            <Grid container item sm={12}>
                <Grid container item spacing={2} rowSpacing={0} sm={12}>
                    <Grid item sm={12}>
                        <Typography variant='h5'>Buscar {tipo}</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={() => handleClickBuscaTodos()}>Buscar todos</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={() => handleClickBuscaPorId()}>Buscar por Id</Button>
                    </Grid>
                </Grid>
                <Grid item sm={12} mt={4}>
                    {
                        buscarTodos ? <BuscaTodos tipo={tipo} /> : null
                    }
                    {
                        buscarPorId ? <BuscaClientePorId tipo={tipo}/> : null
                    }
                </Grid>
            </Grid>
    )
}