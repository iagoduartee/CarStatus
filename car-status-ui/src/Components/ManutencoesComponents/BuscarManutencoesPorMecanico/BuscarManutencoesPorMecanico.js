import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ManutencaoService from "../../../Services/ManutencaoService";
import TabelaManutencao from "../../TabelaManutencao/TabelaManutencao";

export default function BuscarManutencoesPorMecanico(props) {
    const [manutencoes, setManutencoes] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const service = new ManutencaoService();
        service.buscarTodasManutencoes().then(({data}) => {
            let manutencoesFiltradas = data.filter((manutencao) => manutencao.mecanico.id == e.target.idMecanico.value);
            setManutencoes(manutencoesFiltradas);
        });
    }
    
    return (
        <Grid container alignItems='center'>
            <Grid item sm={12}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Grid container item sm={12}>
                        <Grid item sm={4}>
                            <TextField size='small' id='idMecanico' label='Id' />
                        </Grid>
                        <Grid item sm={4}>
                            <Button type='submit' variant='contained'>Buscar</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Grid mt={2} item sm={12}>
                {
                    manutencoes.length ? <TabelaManutencao manutencoes={manutencoes}/> : <Typography>Não há manutenções.</Typography>
                }
            </Grid>
        </Grid >
    )
}