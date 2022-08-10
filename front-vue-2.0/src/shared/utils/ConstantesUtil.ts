import SelectItem from '@/model/utils/SelectItem';

export class ConstantesUtil {

  static SELECT_PLACEHOLDER = new SelectItem('', '');

  static STATUS = {
    concluida: 'success',
    em_andamento: 'info'
  }

  static PRIORIDADE = {
    alta: 'danger',
    media: 'info',
    baixa: 'success'
  }
}