package com.vanessabonis.gerenciadordetarefas.repositories;

import com.vanessabonis.gerenciadordetarefas.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>  {
}
