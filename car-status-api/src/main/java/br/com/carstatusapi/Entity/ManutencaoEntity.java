package br.com.carstatusapi.Entity;

import br.com.carstatusapi.Entity.Enum.StatusEnum;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class ManutencaoEntity {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( columnDefinition = "Long")
    private Long id;

    @Column(nullable = false)
    private LocalDate dataInicio;

    @Column(nullable = false)
    private LocalDate dataFinalizacao;

    @ManyToOne(fetch = FetchType.LAZY)
    private MecanicoEntity mecanico;

    //To-do:
    //@ManyToOne(fetch = FetchType.LAZY)
    //private CarroEntity carro;

    //To-do:
    //@ManyToOne(fetch = FetchType.LAZY)
    //private ClienteEntity cliente;

    @Column(nullable = false)
    private Double valor;

    @Column(nullable = false)
    private String problema;

    @Column(nullable = false)
    private StatusEnum status;

    public ManutencaoEntity(Long id, LocalDate dataInicio, LocalDate dataFinalizacao, MecanicoEntity mecanico, Double valor, String problema, StatusEnum status) {
        this.id = id;
        this.dataInicio = dataInicio;
        this.dataFinalizacao = dataFinalizacao;
        this.mecanico = mecanico;
        this.valor = valor;
        this.problema = problema;
        this.status = status;
    }

    public ManutencaoEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFinalizacao() {
        return dataFinalizacao;
    }

    public void setDataFinalizacao(LocalDate dataFinalizacao) {
        this.dataFinalizacao = dataFinalizacao;
    }

    public MecanicoEntity getMecanico() {
        return mecanico;
    }

    public void setMecanico(MecanicoEntity mecanico) {
        this.mecanico = mecanico;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getProblema() {
        return problema;
    }

    public void setProblema(String problema) {
        this.problema = problema;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }
}

