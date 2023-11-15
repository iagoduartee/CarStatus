@RestController
@RequestMapping( value = "api/cliente" )
public class ClienteController {
    @Autowired
    private ClienteService service;

    @PostMapping
    public ResponseEntity<Object> salvarPessoa( @RequestBody ClienteDTO cliente ){
        try{
            return new ResponseEntity<>( service.save( ClienteMapper.converterParaEntity(cliente) ), HttpStatus.CREATED );
        }catch (Exception e){
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> editarPessoa(@RequestBody ClienteDTO cliente, @PathVariable Long id ){
        try{
            return new ResponseEntity<>( service.editar( ClienteMapper.converterParaEntity(cliente), id ), HttpStatus.OK );
        }catch (Exception e){
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
        }
    }

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> buscarTodasPessoas(){
        try {
            return new ResponseEntity<>( service.buscarTodos(), HttpStatus.OK );
        }catch (Exception e){
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
        }
    }

    @GetMapping( "/{id}" )
    public ResponseEntity<Object> buscarPessoaPorId( @PathVariable Long id ) {
        try{
            return new ResponseEntity<>( service.buscarPorId( id ), HttpStatus.OK );
        }catch(Exception e){
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public void deletarPessoaPorId( @PathVariable Long id ) {
        service.deletarPorId(id);
    }
}