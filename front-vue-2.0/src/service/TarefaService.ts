import TarefaFiltro from '@/model/filtros/TarefaFiltro';
import ListagemTarefas from '@/model/listagem/ListagemTarefas';
import Tarefa from '@/model/Tarefa';
import Page from '@/model/utils/Page';
import Pageable from '@/model/utils/Pageable';
import { axiosClient } from '@/vue.config';
import { AxiosResponse } from 'axios';

export default class TarefaService {
  private urlApi = "api/tarefas";

  async listarTarefas(filtro: TarefaFiltro, page: Pageable): Promise<AxiosResponse<Page<ListagemTarefas>>> {
    const url = `listar?size=${page.pageSize}&page=${page.page}&sort=${page.sortField},${page.sortOrder}`;
    return await axiosClient.post(`${this.urlApi}/${url}`, filtro);
  }

  async obterPorId(id: number): Promise<AxiosResponse<Tarefa>> {
    return await axiosClient.get(`${this.urlApi}/${id}`);
  }

  async excluirPorId(id: number): Promise<AxiosResponse> {
    return await axiosClient.delete(`${this.urlApi}/${id}`);
  }

  async salvar(tarefa: Tarefa): Promise<AxiosResponse<Tarefa>> {
    return await axiosClient.post(`${this.urlApi}`, tarefa);
  }

  async atualizar(tarefa: Tarefa): Promise<AxiosResponse<Tarefa>> {
    return await axiosClient.put(`${this.urlApi}`, tarefa);
  }

  async concluirTarefa(id: number): Promise<AxiosResponse> {
    return await axiosClient.patch(`${this.urlApi}/${id}`);
  }
}