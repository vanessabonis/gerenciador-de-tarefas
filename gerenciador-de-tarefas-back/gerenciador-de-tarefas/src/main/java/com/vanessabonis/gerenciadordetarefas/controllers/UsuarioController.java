package com.vanessabonis.gerenciadordetarefas.controllers;

import com.vanessabonis.gerenciadordetarefas.dto.UsuarioDTO;
import com.vanessabonis.gerenciadordetarefas.exceptions.BadRequestException;
import com.vanessabonis.gerenciadordetarefas.services.UsuarioService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService service;

    @GetMapping(path = "/listar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UsuarioDTO>> listar() {
        log.info("Listando usuarios");
        return ResponseEntity.ok(service.obterTodos());
    }

    @PostMapping(path = "/cadastrar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UsuarioDTO> salvar(@RequestBody UsuarioDTO usuarioDTO) {
        log.info("Salvando usuario");
        return ResponseEntity.ok(service.salvar(usuarioDTO));
    }

    @GetMapping(path = "/buscar-usuario", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UsuarioDTO>> obterPorNome(@RequestParam(value = "q", required = false) String q) {
        log.info("Buscando usuario com nome = {}", q);
        return ResponseEntity.ok(service.obterPorNome(q));
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UsuarioDTO> obterPorId(@PathVariable int id) throws BadRequestException {
        log.info("Obtendo usuario com id {}", id);
        return ResponseEntity.ok(service.obterPorId(id));
    }
}
