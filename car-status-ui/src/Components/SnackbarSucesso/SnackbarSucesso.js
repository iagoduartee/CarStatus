import { Alert, Snackbar } from "@mui/material";

export default function SnackbarMui(props) {
    const { handleClose, open, mensagem } = props;

    return (
        <Snackbar  open={open} autoHideDuration={2000} onClose={() => handleClose()}>
            <Alert onClose={() => handleClose()} severity="success" sx={{ width: '100%' }}>
                {mensagem}
            </Alert>
        </Snackbar>
    )
}