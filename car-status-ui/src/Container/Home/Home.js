import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ListaManutencoes from "../../Components/ListaManutencoes/ListaManutencoes";
import ManutencaoService from "../../Services/ManutencaoService";

export default function Home(){
    const [manutencoes, setManutencoes] = useState([]);

    useEffect(() => {
        const service = new ManutencaoService();
        service.buscarTodasManutencoes().then( ({data}) => {
            setManutencoes(service.filtrarEmAndamento(data));
        });
        console.log(manutencoes);
    }, []);

    return(
        <Box marginTop={12}>
            <Grid container>
                <Grid item sm={12} textAlign="center">
                    <Typography fontSize="32px">Bem vindo ao nosso site!</Typography>
                </Grid>
                <Grid mt={8} item container sm={12}>
                    <Grid textAlign="center" item sm={12} px={16}>
                        {
                            manutencoes.length ? <ListaManutencoes dados={manutencoes} titulo="Lista de Manutencoes em Andamento."/>
                            : <Typography fontSize="16px">Não há manutenções em andamento no momento</Typography>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}