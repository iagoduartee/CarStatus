import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function TabelaManutencao(props){
    const {manutencoes} = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Mecanico</TableCell>
                        <TableCell align="right">Valor Total</TableCell>
                        <TableCell align="right">Previsão de conclusão</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Ação</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {manutencoes.map((manutencao, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {manutencao.mecanico.nome}
                            </TableCell>
                            <TableCell align="right">{manutencao.valor}</TableCell>
                            <TableCell align="right">{manutencao.dataFinalizacao}</TableCell>
                            <TableCell align="right">{manutencao.status}</TableCell>
                            <TableCell align="right"><Button onClick={() => props.modal(manutencao)} variant='outlined'>Detalhes</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}