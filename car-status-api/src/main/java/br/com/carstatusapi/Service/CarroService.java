package br.com.carstatusapi.Service;

import br.com.carstatusapi.DTO.CarroDTO;
import br.com.carstatusapi.Mapper.CarroMapper;
import br.com.carstatusapi.Entity.CarroEntity;
import br.com.carstatusapi.Repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CarroService {
    @Autowired
    private CarroRepository repository;

    @Transactional( rollbackFor = Exception.class )
    public CarroDTO save(CarroEntity carro ){
        CarroEntity novoCarro = salvarEEditar( carro );
        return CarroMapper.converterParaDTO( novoCarro );
    }

    @Transactional( rollbackFor = Exception.class )
    public CarroDTO editar(CarroEntity pessoa, Long id ){
        pessoa.setId( id );
        CarroEntity novoCarro = salvarEEditar( pessoa );
        return CarroMapper.converterParaDTO(novoCarro);
    }

    public CarroDTO buscarPorId( Long id ){
        return CarroMapper.converterParaDTO( repository.findById( id ).get() );
    }

    public List<CarroDTO> buscarTodos(){
        return CarroMapper.converterListaParaDTO( repository.findAll() );
    }

    public CarroEntity salvarEEditar( CarroEntity carro ){
        return repository.save(carro);
    }

    public void deletarPorId( Long id ){
        repository.deleteById( id );
    }

    public List<CarroDTO> buscarTodosPorIdDono(Long id ){
        return CarroMapper.converterListaParaDTO( repository.findAllByDono_Id( id ) );
    }
}