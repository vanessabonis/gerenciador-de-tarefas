
export default {

  formatarData(data: any): string {
    if (data instanceof Date) return data.toLocaleString('pt-BR').substring(0, 10)

    const dtNasc = new Date(data);
    return new Date(dtNasc.getTime() - dtNasc.getTimezoneOffset() * -60000).toLocaleDateString('pt-BR');
  },

  // usuarioTemPermissoes(usuario: Usuario, roles: string[]): boolean {
  //   const usuarioRoles = usuario.roles.map(roleUsuario => roleUsuario.role);
  //   return roles.some(role => usuarioRoles.includes(role));
  // }
}
