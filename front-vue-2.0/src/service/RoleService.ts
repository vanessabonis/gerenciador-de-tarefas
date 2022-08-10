import Role from "@/model/Role";
import { axiosClient } from "@/vue.config";
import { AxiosResponse } from "axios";


export default class RoleService {

  private urlApi = 'api/roles';

  async obterRoles(): Promise< AxiosResponse<Role[]>> {
    return await axiosClient.get(`${this.urlApi}`);
  }

}

