export default {
  formatarData(data: any): string {
    return data instanceof Date
      ? data.toLocaleString("pt-BR").substring(0, 10)
      : new Date(data).toLocaleString("pt-BR").substring(0, 10);
  },
};
