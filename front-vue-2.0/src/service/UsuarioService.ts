import Usuario from '@/model/Usuario';
import { axiosClient } from '@/vue.config';
import { AxiosResponse } from 'axios';

export default class UsuarioService {

  private urlApi = 'api/usuarios';

  async listarUsuarios(): Promise<AxiosResponse<Usuario[]>> {
    return await axiosClient.get(`${this.urlApi}/listar`);
  }
  
  async obterPorId(id: number): Promise<AxiosResponse<Usuario>> {
    return await axiosClient.get(`${this.urlApi}/${id}`);
  }

  async obterPorNome(query: string): Promise<AxiosResponse<Usuario[]>> {
    return await axiosClient.get(`${this.urlApi}/buscar-usuario?q=${query}`);
  }

  // async cadastrar(usuario: Usuario): Promise<AxiosResponse<Usuario>> {
  //   return await axiosClient.post(`${this.urlApi}/cadastrar`, usuario);
  // }
}

