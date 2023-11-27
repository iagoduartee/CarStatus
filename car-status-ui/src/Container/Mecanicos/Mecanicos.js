import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CabecalhoPaginas from "../../Components/CabecalhoPaginas/";
import BuscaPessoas from "../../Components/BuscaPessoas";
import CadastrarPessoas from "../../Components/ClientesComponents/CadastrarPessoas";

export default function Mecanicos() {
    return (
        <Box px={16}>
            <Box marginTop={12}>
                <CabecalhoPaginas titulo="Mecanicos" />
            </Box>
            <Box mt={4}>
                <Grid container spacing={8}>
                    <Grid item sm={6}>
                        <BuscaPessoas tipo="Mecanicos" />
                    </Grid>
                    <Grid item sm={6}>
                        <Box style={{ borderLeft: "1px solid #d4d4d4" }} pl={4} pb={24}>
                            <CadastrarPessoas tipo="Mecanicos"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}