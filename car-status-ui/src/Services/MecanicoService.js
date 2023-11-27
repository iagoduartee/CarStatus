import { https } from "./api";

export default class MecanicoService{
    constructor() {
        this.instance = https('/api/mecanico');
    }

    buscarMecanicoPorId = (id) => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/${id}`,
        });
    }

    buscarTodosMecanicos = () => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/`,
        });
    }

    cadastrarMecanico = (payload) => {
        return this.instance({
            method: 'POST',
            url: '/',
            data: payload
        });
    }

}