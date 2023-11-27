import { Typography } from "@mui/material";
import { useEffect, useState } from "react"
import ManutencaoService from "../../../Services/ManutencaoService";
import TabelaManutencao from "../../TabelaManutencao/TabelaManutencao";

export default function BuscarTodasManutencoes(props){
    const [manutencoes, setManutencoes] = useState([]);

    useEffect(() => {
        const service = new ManutencaoService();
        service.buscarTodasManutencoes().then(({data}) => setManutencoes(data) );
    }, [])

    return(
        manutencoes.length ? <TabelaManutencao modal={props.modal} manutencoes={manutencoes}/> : <Typography>Nenhuma manutenção encontrada</Typography>
    )
}