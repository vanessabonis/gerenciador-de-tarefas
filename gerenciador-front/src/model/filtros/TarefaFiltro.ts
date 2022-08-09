import { StatusEnum } from "@/enums/StatusEnum";

export default class TarefaFiltro {
  tituloOuDescricao: string | null;
  responsavel: string | null;
  status: StatusEnum | null;
}
