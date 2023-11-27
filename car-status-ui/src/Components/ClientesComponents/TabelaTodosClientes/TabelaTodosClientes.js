import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TabelaTodosClientes(props) {
    const { clientes } = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">CPF</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientes.map((cliente, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {cliente.nome}
                            </TableCell>
                            <TableCell align="right">{cliente.id}</TableCell>
                            <TableCell align="right">{cliente.cpf}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}