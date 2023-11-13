package br.com.carstatusapi.DTO;

import java.util.List;

public class MecanicoDTO extends PessoaDTO{
    private Double precoHora;

    //To-do:
    private List<ManutencaoDTO> manutencoes;

    public MecanicoDTO(Double precoHora, List<ManutencaoDTO> manutencoes) {
        this.precoHora = precoHora;
        this.manutencoes = manutencoes;
    }

    public MecanicoDTO(Long id, String nome, String cpf, Double precoHora, List<ManutencaoDTO> manutencoes) {
        super(id, nome, cpf);
        this.precoHora = precoHora;
        this.manutencoes = manutencoes;
    }

    public MecanicoDTO() {
    }

    public Double getPrecoHora() {
        return precoHora;
    }

    public void setPrecoHora(Double precoHora) {
        this.precoHora = precoHora;
    }

    public List<ManutencaoDTO> getManutencoes() {
        return manutencoes;
    }

    public void setManutencoes(List<ManutencaoDTO> manutencoes) {
        this.manutencoes = manutencoes;
    }
}