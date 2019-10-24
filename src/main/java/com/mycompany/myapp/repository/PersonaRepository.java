package com.mycompany.myapp.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.mycompany.myapp.domain.Authority;
import com.mycompany.myapp.domain.Persona;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Persona entity.
 */
@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

    @Query("select persona from Persona persona where persona.personaUser.login = ?#{principal.username}")
    List<Persona> findByPersonaUserIsCurrentUser();

    @Query(value = "select distinct persona from Persona persona left join fetch persona.vehiculos",
        countQuery = "select count(distinct persona) from Persona persona")
    Page<Persona> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct persona from Persona persona left join fetch persona.vehiculos")
    List<Persona> findAllWithEagerRelationships();

    @Query("select persona from Persona persona left join fetch persona.vehiculos where persona.id =:id")
    Optional<Persona> findOneWithEagerRelationships(@Param("id") Long id);

    @Query("select persona from Persona persona left join fetch persona.vehiculos where persona.dniPersona =:dniPersona")
    Optional<Persona> findByDniPersona(@Param ("dniPersona") Integer dniPersona);
  

    @Query("select p from Persona p join p.personaUser.authorities a where a.name=:role")   
    List<Persona> findAlluserrol(@Param ("role") String role);

    @Query("select p from Persona p join p.personaUser pu join p.personaUser.authorities where pu.id=:id")   
    Persona findAlluserperson(@Param ("id") Long id);

    @Query("select p.personaUser.authorities from Persona p  where p.personaUser.id=:id")   
    Set<Authority> findAlluserperson1(@Param ("id") Long id);
}
