import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AbasMUI from "../../Components/AbasMUI";
import CabecalhoPaginas from "../../Components/CabecalhoPaginas/CabecalhoPaginas";
import PassosMUI from "../../Components/PassosMUI";

export default function Manutencoes() {

    return (
        <Box px={16}>
            <Box marginTop={12}>
                <CabecalhoPaginas titulo="Manutenções" />
            </Box>
            <Box mt={4}>
                <Grid container pt={2}>
                    <Grid item sm={6} pr={1}>
                        <Card>
                            <CardHeader subheader="Buscar por..." />
                            <AbasMUI/>
                        </Card>
                    </Grid>
                    <Grid item sm={6} pl={1}>
                        <Card>
                            <CardHeader subheader="Nova manutenção" />
                            <Box p={2}>
                                <PassosMUI passos={['Selecione um cliente', 'Informações do veículo', 'Selecione um mecânico']} />
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}