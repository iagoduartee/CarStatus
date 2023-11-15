@Service
public class ClienteService {
    @Autowired
    private ClienteRepository repository;

    @Transactional( rollbackFor = Exception.class )
    public ClienteDTO save(app.CarStatus.Entity.ClienteEntity pessoa ){
        app.CarStatus.Entity.ClienteEntity novaPessoa = salvarEEditar( pessoa );
        return ClienteMapper.converterParaDTO( novaPessoa );
    }

    @Transactional( rollbackFor = Exception.class )
    public ClienteDTO editar(app.CarStatus.Entity.ClienteEntity pessoa, Long id ){
        pessoa.setId( id );
        app.CarStatus.Entity.ClienteEntity novaPessoa = salvarEEditar( pessoa );
        return ClienteMapper.converterParaDTO(novaPessoa);
    }

    public ClienteDTO buscarPorId(Long id ){
        return ClienteMapper.converterParaDTO( repository.findById( id ).get() );
    }

    public List<ClienteDTO> buscarTodos(){
        return ClienteMapper.converterListaParaDTO( repository.findAll() );
    }

    public app.CarStatus.Entity.ClienteEntity salvarEEditar(app.CarStatus.Entity.ClienteEntity pessoa ){
        return repository.save(pessoa);
    }

    public void deletarPorId( Long id ){
        repository.deleteById( id );
    }
}