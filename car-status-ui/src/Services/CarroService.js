import { https } from "./api";

export default class CarroService{
    constructor() {
        this.instance = https('/api/carro');
    }

    buscarCarroPorDono = (id) => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/dono/${id}`,
        });
    }

    adicionarCarro = (payload) => {
        return this.instance({
            method: 'POST',
            url: '/',
            data: payload
        });
    }

}