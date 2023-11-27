import { Button, Grid, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function CabecalhoPaginas({titulo}) {

    return (
        <Box marginTop={8}>
            <Grid container>
                <Grid item  sm={12} textAlign="left">
                    <Box style={{ borderBottom: '1px solid #d4d4d4' }} pb={2}>
                        <Grid container alignItems='center'>
                            <Grid item sm={10}>
                                <Typography fontSize="32px">{titulo}</Typography>
                            </Grid>
                            <Grid item sm={2} textAlign="right">
                                <Button component={Link} style={{ textDecoration: 'none', color: 'inherit' }} to="/"><ArrowBackIcon/>Voltar</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}