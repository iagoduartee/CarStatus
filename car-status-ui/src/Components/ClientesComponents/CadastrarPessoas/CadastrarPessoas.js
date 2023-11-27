import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import ClienteService from "../../../Services/ClienteService";
import MecanicoService from "../../../Services/MecanicoService";
import CadastroPessoa from "../../CadastroPessoa/CadastroPessoa";
import SnackbarSucesso from "../../SnackbarSucesso/SnackbarSucesso";

export default function CadastrarPessoas(props) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const mensagemSnackbarSucesso = `${props.tipo === "Clientes" ? "Cliente" : "Mecanico"} cadastrado com sucesso!`

    const cadastrarPessoa = (e) => {
        e.preventDefault();
        const campos = e.target;
        const payload = {
            nome: campos.nome.value,
            cpf: campos.cpf.value,
            email: campos.email.value,
            telefone: campos.telefone.value
        }

        if (props.tipo === "Clientes") {
            const service = new ClienteService();
            service.cadastrarCliente(payload).then(() => setOpenSnackbar(true));
        } else if (props.tipo === "Mecanicos") {
            const mecanicoPayload = {...payload, precoHora: e.target.precoHora.value};
            const mecanicoService = new MecanicoService();
            mecanicoService.cadastrarMecanico(mecanicoPayload).then(() => setOpenSnackbar(true));
        }
    }

    return (
        <Grid container item sm={12}>
            <Grid item sm={12}>
                <Typography variant='h5'>Cadastrar um Cliente</Typography>
            </Grid>
            <Grid item sm={12}>
                <CadastroPessoa tipo={props.tipo} campoExtra={props.tipo === "Clientes" ? null : {label:'Preço/Hora', id:"precoHora"}} handleSubmit={cadastrarPessoa} />
            </Grid>
            <SnackbarSucesso mensagem={mensagemSnackbarSucesso} handleClose={() => setOpenSnackbar(false)} open={openSnackbar} />
        </Grid>
    )
}