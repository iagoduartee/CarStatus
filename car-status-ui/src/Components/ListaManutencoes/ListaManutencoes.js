import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TabelaManutencao from "../TabelaManutencao/TabelaManutencao";

export default function (props){
    return(
        <React.Fragment>
            <Typography>{props.titulo}</Typography>
            <Box mt={4}>
                <TabelaManutencao manutencoes={props.dados}/>
            </Box>
        </React.Fragment>
    )
}