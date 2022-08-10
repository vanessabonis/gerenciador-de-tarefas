package com.vanessabonis.gerenciadordetarefas.controllers;

import com.vanessabonis.gerenciadordetarefas.dto.TarefaDTO;
import com.vanessabonis.gerenciadordetarefas.dto.filtros.TarefaFiltro;
import com.vanessabonis.gerenciadordetarefas.dto.listagem.TarefaListagemDTO;
import com.vanessabonis.gerenciadordetarefas.exceptions.BadRequestException;
import com.vanessabonis.gerenciadordetarefas.services.TarefaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/tarefas")
@RequiredArgsConstructor
public class TarefaController {

    private final TarefaService service;

    @GetMapping(path =  "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TarefaDTO> obterPorId(@PathVariable int id) throws BadRequestException {
        log.info("Obtendo tarefa com id {}", id);
        return ResponseEntity.ok(service.obterPorId(id));
    }

    //lembrar de mudar p buscar com query param (get)
    @PostMapping(path = "/listar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<TarefaListagemDTO>> obterPorFiltro(@RequestBody TarefaFiltro filtro, Pageable pageable) {
        log.info("Listando tarefas");
        return ResponseEntity.ok(service.obterPorFiltro(filtro, pageable));
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TarefaDTO> salvar(@RequestBody TarefaDTO tarefaDTO) throws BadRequestException {
        log.info("Salvando tarefa");
        return ResponseEntity.ok(service.salvar(tarefaDTO));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TarefaDTO> atualizar(@RequestBody TarefaDTO tarefaDTO) throws BadRequestException {
        log.info("Atualizando tarefa");
        return ResponseEntity.ok(service.salvar(tarefaDTO));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> excluirPorId(@PathVariable int id) throws BadRequestException {
        log.info("Excluindo tarefa com id {}", id);
        service.excluirPorId(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity concluirTarefa(@PathVariable int id) throws BadRequestException {
        log.info("Concluindo tarefa com id {}", id);
        service.concluirTarefa(id);
        return ResponseEntity.ok().body("Tarefa concluída com sucesso");
    }
}
