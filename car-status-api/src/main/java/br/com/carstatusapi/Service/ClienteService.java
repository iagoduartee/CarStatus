package br.com.carstatusapi.Service;

import br.com.carstatusapi.DTO.ClienteDTO;
import br.com.carstatusapi.Entity.ClienteEntity;
import br.com.carstatusapi.Mapper.ClienteMapper;
import br.com.carstatusapi.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository repository;

    @Transactional( rollbackFor = Exception.class )
    public ClienteDTO save(ClienteEntity pessoa ){
        ClienteEntity novaPessoa = salvarEEditar( pessoa );
        return ClienteMapper.converterParaDTO( novaPessoa );
    }

    @Transactional( rollbackFor = Exception.class )
    public ClienteDTO editar(ClienteEntity pessoa, Long id ){
        pessoa.setId( id );
        ClienteEntity novaPessoa = salvarEEditar( pessoa );
        return ClienteMapper.converterParaDTO(novaPessoa);
    }

    public ClienteDTO buscarPorId(Long id ){
        return ClienteMapper.converterParaDTO( repository.findById( id ).get() );
    }

    public List<ClienteDTO> buscarTodos(){
        return ClienteMapper.converterListaParaDTO( repository.findAll() );
    }

    public ClienteEntity salvarEEditar(ClienteEntity pessoa ){
        return repository.save(pessoa);
    }

    public void deletarPorId( Long id ){
        repository.deleteById( id );
    }
}