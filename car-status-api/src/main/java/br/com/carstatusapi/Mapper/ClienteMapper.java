package br.com.carstatusapi.Mapper;

import br.com.carstatusapi.DTO.ClienteDTO;
import br.com.carstatusapi.Entity.ClienteEntity;

import java.util.ArrayList;
import java.util.List;

public class ClienteMapper {
    public static ClienteEntity converterParaEntity(ClienteDTO cliente ){
        ClienteEntity novaPessoa = new ClienteEntity();
        novaPessoa.setId(cliente.getId());
        novaPessoa.setNome(cliente.getNome());
        novaPessoa.setCpf(cliente.getCpf());
        novaPessoa.setCarros( cliente.getCarros() != null ? CarroMapper.converterListaParaEntity(cliente.getCarros()) : null );
        return novaPessoa;
    }

    public static ClienteDTO converterParaDTO(ClienteEntity clienteEntity){
        ClienteDTO clienteDTO = new ClienteDTO();
        clienteDTO.setId(clienteEntity.getId());
        clienteDTO.setNome(clienteEntity.getNome());
        clienteDTO.setCpf(clienteEntity.getCpf());
        return clienteDTO;
    }

    public static List<ClienteDTO> converterListaParaDTO(List<ClienteEntity> listaEntity){
        List<ClienteDTO> listaDTO = new ArrayList<>();
        for(ClienteEntity cliente : listaEntity){
            listaDTO.add( ClienteMapper.converterParaDTO( cliente ));
        }
        return listaDTO;
    }

    public static List<ClienteEntity> converterListaParaEntityO(List<ClienteDTO> listaDTO){
        List<ClienteEntity> listaEntity = new ArrayList<>();
        for(ClienteDTO pessoa : listaDTO){
            listaEntity.add( ClienteMapper.converterParaEntity( pessoa ));
        }
        return listaEntity;
    }
}