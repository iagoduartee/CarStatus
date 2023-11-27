import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ClienteService from "../../../Services/ClienteService";
import MecanicoService from "../../../Services/MecanicoService";
import TabelaTodosClientes from "../TabelaTodosClientes/TabelaTodosClientes";
import TabelaTodosMecanicos from "../../TabelaTodosMecanicos/TabelaTodosMecanicos"

export default function BuscaTodos(props) {
    const [clientes, setClientes] = useState([]);
    const [mecanicos, setMecanicos] = useState([]);

    const isCliente = props.tipo === "Clientes";

    useEffect(() => {
        if (props.tipo === "Mecanicos") {
            const mecanicoService = new MecanicoService();
            mecanicoService.buscarTodosMecanicos().then(({ data }) => setMecanicos(data)).catch(console.log('Erro!'));
        } else if (props.tipo === "Clientes") {
            const clienteService = new ClienteService();
            clienteService.buscarTodosClientes().then(({ data }) => setClientes(data)).catch(console.log('Erro!'));
        } //eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            {
                isCliente ?
                    <Box>
                        {
                            clientes.length ? <TabelaTodosClientes clientes={clientes} /> : <Typography>Nenhum cliente encontrado.</Typography>
                        }
                    </Box>
                    :
                    <Box>
                        {
                            mecanicos.length ? <TabelaTodosMecanicos mecanicos={mecanicos} /> : <Typography>Nenhum mecanico encontrado.</Typography>
                        }
                    </Box>
            }
        </React.Fragment>
    )
}