import { Button, Grid, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";
import ClienteService from "../../../Services/ClienteService";
import { useState } from "react";
import CardCliente from "../CardCliente/CardCliente";
import MecanicoService from "../../../Services/MecanicoService";
import CardMecanico from "../../CardMecanico/CardMecanico";

export default function BuscarPorId(props) {
    const [cliente, setCliente] = useState(null);
    const [mecanico, setMecanico] = useState(null);
    const [buscaFeita, setBuscaFeita] = useState(false);

    const isCliente = props.tipo === "Clientes";

    const handlePesquisa = (e) => {
        e.preventDefault();
        const id = e.target.idValue.value;
        setBuscaFeita(true);
        if (props.tipo === "Clientes") {
            const clienteService = new ClienteService();
            clienteService.buscarClientePorId(id).then(({ data }) => setCliente(data)).catch(setCliente(null));
        } else if (props.tipo === "Mecanicos") {
            const mecanicoService = new MecanicoService();
            mecanicoService.buscarMecanicoPorId(id).then(({ data }) => setMecanico(data)).catch(setMecanico(null));
        }
    }

    return (
        <Box>
            <form onSubmit={handlePesquisa}>
                <Grid container item alignItems='center' sm={12}>
                    <Grid item>
                        <TextField fullWidth size='small' id='idValue' label='Digite o Id' />
                    </Grid>
                    <Grid item>
                        <Button type='submit'>
                            <SearchIcon />
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {
                buscaFeita && (
                    <Box width='100%'>
                        <Grid container item sm={12} mt={3}>
                            {
                                isCliente ? (
                                    cliente ?
                                        <CardCliente cliente={cliente} />
                                        : <Typography>Nenhum Cliente Encontrado</Typography>
                                ) : (
                                    mecanico ?
                                        <CardMecanico mecanico={mecanico} />
                                        : <Typography>Nenhum Mecanico Encontrado</Typography>
                                )
                            }
                        </Grid>
                    </Box>
                )
            }
        </Box>
    )
}