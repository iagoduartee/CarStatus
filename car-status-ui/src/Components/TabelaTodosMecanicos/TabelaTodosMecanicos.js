import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TabelaTodosMecanicos(props) {
    const { mecanicos } = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">CPF</TableCell>
                        <TableCell align="right">Valor/Hora</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mecanicos.map((mecanico, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {mecanico.nome}
                            </TableCell>
                            <TableCell align="right">{mecanico.id}</TableCell>
                            <TableCell align="right">{mecanico.cpf}</TableCell>
                            <TableCell align="right">{mecanico.precoHora}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}