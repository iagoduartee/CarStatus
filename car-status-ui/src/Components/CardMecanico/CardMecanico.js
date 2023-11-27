import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function CardMecanico(props) {
    const {  mecanico } = props;

    return (
        <Card style={{ width: "100%" }}>
            <Box p={4}>
                <Grid item container sm={12} rowSpacing={2}>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">Nome:</Typography>
                        <Typography component="div" variant="h6">{ mecanico.nome}</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">CPF:</Typography>
                        <Typography component="div" variant="h6">{ mecanico.cpf}</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">Email:</Typography>
                        <Typography component="div" variant="h6">{ mecanico.email}</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">Telefone:</Typography>
                        <Typography component="div" variant="h6">{ mecanico.telefone}</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="subtitle1" fontSize="14px" color="text.secondary" component="div">Valor/Hora:</Typography>
                        <Typography component="div" variant="h6">R${ mecanico.precoHora},00</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}