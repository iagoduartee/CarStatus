import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AdicionarCarroModal({ open, handleClose, onSubmit }) {

  return (
    <div>
      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle>Adicionar um carro</DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <DialogContentText>
              Preencha os campos abaixo para adicionar um carro.
            </DialogContentText>
            <TextField
              margin="dense"
              id="marca"
              label="Marca"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="modelo"
              label="Modelo"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="placa"
              label="Placa do carro"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} onClose={() => handleClose()}>Cancelar</Button>
            <Button type='submit' onClose={() => handleClose()}>Adicionar</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}