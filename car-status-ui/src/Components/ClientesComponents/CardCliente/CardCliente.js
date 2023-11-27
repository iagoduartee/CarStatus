import { Button, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CarroService from "../../../Services/CarroService";
import AdicionarCarroDialog from "../AdicionarCarroDialog/AdicionarCarroDialog";
import TabelaCarrosDeCliente from "../TabelaCarrosDeCliente";

export default function CardCliente(props) {
    const [carros, setCarros] = useState([]);
    const [mostrarCarros, setMostrarCarros] = useState(false);
    const [openDialog, setOpenDialog] = useState(null);

    const { cliente } = props;
    const carroService = new CarroService();

    const handleClickBuscar = () => {
        mostrarCarros ? setMostrarCarros(false) : buscarCarros();
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleAdicionarCarro = (e) => {
        e.preventDefault();
        const marca = e.target.marca.value;
        const modelo = e.target.modelo.value;
        const placa = e.target.placa.value;

        const payload = {
            placa: placa,
            marca: marca,
            modelo: modelo,
            dono: {
                id: cliente.id
            }
        }

        carroService.adicionarCarro(payload).then( () => {
            carros.push(payload)
            setOpenDialog(false);
        } );
    }

    const buscarCarros = () => {
        carroService.buscarCarroPorDono(cliente.id).then(({ data }) => setCarros(data))
        setMostrarCarros(true);
    }

    return (
        <Card style={{ width: "100%" }}>
            <Box p={4}>
                <Grid item container sm={12}>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">Nome:</Typography>
                        <Typography component="div" variant="h6">{cliente.nome}</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">CPF:</Typography>
                        <Typography component="div" variant="h6">{cliente.cpf}</Typography>
                    </Grid>
                    <Grid item container sm={12} mt={4} spacing={2} textAlign="left">
                        <Grid item>
                            <Button variant={mostrarCarros ? "outlined" : "contained"} onClick={() => handleClickBuscar()}>
                                {mostrarCarros ? 'Esconder Carros' : 'Ver Carros'}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={() => setOpenDialog(true)}>
                                Adicionar Carro
                            </Button>
                        </Grid>
                    </Grid>
                    {
                        mostrarCarros ?
                            <Grid item sm={12} mt={4} textAlign="left">
                                {
                                    carros.length ? <TabelaCarrosDeCliente carros={carros} /> : <Typography>Nenhum carro encontrado</Typography>
                                }
                            </Grid>
                            : null
                    }
                </Grid>
            </Box>
            <AdicionarCarroDialog onSubmit={handleAdicionarCarro} open={openDialog} handleClose={handleClose} />
        </Card>
    )
}