import { https } from "./api";

export default class ClienteService{
    constructor() {
        this.instance = https('/api/cliente');
    }

    buscarClientePorId = (id) => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/${id}`,
        });
    }

    buscarTodosClientes = () => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/`,
        });
    }

    cadastrarCliente = (payload) => {
        return this.instance({
            method: 'POST',
            url: '/',
            data: payload
        });
    }

}