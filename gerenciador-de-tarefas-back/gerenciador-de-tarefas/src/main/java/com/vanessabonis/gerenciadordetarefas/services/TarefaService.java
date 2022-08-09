package com.vanessabonis.gerenciadordetarefas.services;

import com.vanessabonis.gerenciadordetarefas.dto.TarefaDTO;
import com.vanessabonis.gerenciadordetarefas.dto.filtros.TarefaFiltro;
import com.vanessabonis.gerenciadordetarefas.dto.listagem.TarefaListagemDTO;
import com.vanessabonis.gerenciadordetarefas.enums.Status;
import com.vanessabonis.gerenciadordetarefas.exceptions.BadRequestException;
import com.vanessabonis.gerenciadordetarefas.repositories.TarefaRepository;
import com.vanessabonis.gerenciadordetarefas.services.mappers.TarefaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class TarefaService {

    private final TarefaRepository repository;
    private final TarefaMapper mapper;

    public TarefaDTO obterPorId(int id) throws BadRequestException {
        return mapper.toDto(repository.findById(id).orElseThrow(() -> new BadRequestException("Não foi possível encontrar tarefa com id " + id)));
    }

    public Page<TarefaListagemDTO> obterPorFiltro(TarefaFiltro filtro, Pageable page){
        return repository.findByFilter(filtro, page);
    }

    public TarefaDTO salvar(TarefaDTO tarefaDTO) throws BadRequestException {
        if (existePorTitulo(tarefaDTO)) throw new BadRequestException("Essa Tarefa já existe");
        var tarefa = mapper.toEntity(tarefaDTO);
        return mapper.toDto(repository.save(tarefa));
    }

    public void excluirPorId(int id) throws BadRequestException {
        obterPorId(id);
        repository.deleteById(id);
    }

    public Boolean existePorTitulo(TarefaDTO dto) {
        return repository.existsByTituloAndIdNot(dto.getTitulo(), dto.getId());
    }

    public void concluirTarefa(int id) throws BadRequestException {
        var dto = obterPorId(id);
        if(dto.getStatus() == Status.EM_ANDAMENTO) dto.setStatus(Status.CONCLUIDA);
        repository.save(mapper.toEntity(dto));
    }
}
