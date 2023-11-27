import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

export default function ModalDetalhes(props) {
    const { open, handleClose } = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const statusDisponiveis = ['EM_ANDAMENTO', 'NAO_INICIADA', 'FINALZIADA', 'CANCELADA']
    const renderizarBotoes = (statusAtual) => {
        return (
            <React.Fragment>
                {
                    statusAtual === 'NAO_INICIADA' ? <Button>Iniciar</Button> : null
                }
                {
                    statusAtual === 'EM_ANDAMENTO' ? (
                        <Grid container>
                            <Grid item sm={6}>
                                <Button>Cancelar</Button>
                            </Grid>
                            <Grid item sm={6}>
                                <Button>Finalizar</Button>
                            </Grid>
                        </Grid>
                    ) : null
                }
            </React.Fragment>
        )
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>Problema:</Typography>
                    <Typography variant="h6" component="h2">
                        {props.detalhes.problema}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {props.detalhes.status}
                    </Typography>
                    {
                        renderizarBotoes(props.detalhes.status)
                    }
                </Box>
            </Modal>
        </div>
    );
}