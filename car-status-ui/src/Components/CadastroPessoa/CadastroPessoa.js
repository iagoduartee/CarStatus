import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function CadastroPessoa(props) {
    const { campoExtra, handleSubmit } = props;

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container rowSpacing={2} mt={2} spacing={4}>
                <Grid item sm={6}>
                    <TextField variant="outlined" id="nome" fullWidth label="Nome" required />
                </Grid>
                <Grid item sm={6}>
                    <TextField variant="outlined" id="cpf" fullWidth label="CPF" required />
                </Grid>
                <Grid item sm={12}>
                    <TextField variant="outlined" id="email" fullWidth label="Email" type="email" required />
                </Grid>
                <Grid item sm={campoExtra ? 6 : 8}>
                    <TextField variant="outlined" id="telefone" fullWidth label="Telefone" required />
                </Grid>
                {
                    campoExtra ?
                        <Grid item sm={6}>
                            <TextField variant="outlined" fullWidth label={campoExtra.label} id={campoExtra.id} required />
                        </Grid>
                        : null
                }
                <Grid item sm={4}>
                    <Box mt={0.5}>
                        <Button type='submit' fullWidth={campoExtra ? false : true} size="large" variant="contained">Cadastrar</Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    )
}