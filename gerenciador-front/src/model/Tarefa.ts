import { PrioridadeEnum } from "@/enums/PrioridadeEnum";
import { StatusEnum } from "@/enums/StatusEnum";

export default class Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  idUsuarioResponsavel: number;
  status: StatusEnum;
  prioridade: PrioridadeEnum;
  deadline: Date;
}
