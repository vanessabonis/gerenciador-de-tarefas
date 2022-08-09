package com.vanessabonis.gerenciadordetarefas.services;

import com.vanessabonis.gerenciadordetarefas.dto.UsuarioDTO;
import com.vanessabonis.gerenciadordetarefas.repositories.UsuarioRepository;
import com.vanessabonis.gerenciadordetarefas.services.mappers.UsuarioMapper;
import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final UsuarioMapper mapper;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public UsuarioDTO salvar(UsuarioDTO dto) {
//        dto.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));
        var usuario = mapper.toEntity(dto);
        return mapper.toDto(repository.save(usuario));
    }

    public List<UsuarioDTO> obterTodos() {
        return mapper.toDto(repository.findAll());
    }
}
