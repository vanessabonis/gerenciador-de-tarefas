import { PrioridadeEnum } from "@/enums/PrioridadeEnum";
import { StatusEnum } from "@/enums/StatusEnum";

export default class TarefaListagem {
  id: number;
  titulo: string;
  descricao: string;
  responsavel: string;
  status: StatusEnum;
  prioridade: PrioridadeEnum;
}
