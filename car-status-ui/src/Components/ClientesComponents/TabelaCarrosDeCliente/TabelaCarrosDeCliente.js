import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TabelaCarrosDeCliente(props) {
    const { carros } = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Placa</TableCell>
                        <TableCell align="right">Marca</TableCell>
                        <TableCell align="right">Modelo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {carros.map((carro, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {carro.placa}
                            </TableCell>
                            <TableCell align="right">{carro.marca}</TableCell>
                            <TableCell align="right">{carro.modelo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}