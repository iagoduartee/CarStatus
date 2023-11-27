import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, Switch, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar>
      <Container maxWidth>
        <Toolbar open={true}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            ml={10}
            sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}
          >
            CAR STATUS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button to={"/manutencoes"} style={{ textDecoration: 'none', color: 'inherit' }} component={Link} sx={{ my: 2, color: 'white', display: 'block' }}>
              Manutenções
            </Button>
            <Button to={"/clientes"} style={{ textDecoration: 'none', color: 'inherit' }} component={Link} sx={{ my: 2, color: 'white', display: 'block' }}>
              Clientes
            </Button>
            <Button to={"/mecanicos"} style={{ textDecoration: 'none', color: 'inherit' }} component={Link} sx={{ my: 2, color: 'white', display: 'block' }}>
              Mecanicos
            </Button>
            <Button to={"/sobre"} style={{ textDecoration: 'none', color: 'inherit' }} component={Link} sx={{ my: 2, color: 'white', display: 'block' }}>
              Sobre nós
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Switch>
        <Route path="/manutencoes" />
      </Switch>
    </AppBar>
  );
}