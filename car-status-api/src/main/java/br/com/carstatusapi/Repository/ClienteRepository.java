@Repository
public interface ClienteRepository extends CrudRepository<ClienteEntity, Long> {
    ClienteEntity save(ClienteEntity cliente);

    Optional<ClienteEntity> findById(Long id);

    List<ClienteEntity> findAll();
}