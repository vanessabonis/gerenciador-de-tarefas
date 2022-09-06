package com.vanessabonis.gerenciadordetarefas.models;

import com.vanessabonis.gerenciadordetarefas.enums.Roles;
import lombok.Getter;
import lombok.Setter;
//import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private Roles role;

//   GrantedAuthority
//
//    @Override
//    public String getAuthority() {
//        return this.role.toString();
//    }
}
