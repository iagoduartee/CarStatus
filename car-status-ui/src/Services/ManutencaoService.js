import { https } from "./api";

export default class ManutencaoService{
    constructor() {
        this.instance = https('/api/manutencao');
    }

    buscarTodasManutencoes = () => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: '/',
        });
    }

    buscarManutencaoPorIdDoMecanico = (id) => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/mecanico/${id}`,
        });
    }

    buscarManutencaoPorId = (id) => {
        return this.instance({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            url: `/${id}`,
        });
    }

    filtrarEmAndamento = (manutencoes) => {
            let manutencoesFiltradas = manutencoes.filter( ( manutencao ) => manutencao.status === 'EM_ANDAMENTO');
            return manutencoesFiltradas;
        }

}