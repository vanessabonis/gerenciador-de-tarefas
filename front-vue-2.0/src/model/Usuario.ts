import Role from "./Role";

export default class Usuario {
  id: number;
  nome: string;
  userName: string;
  password: string;
  roles: Role[] = [];
}
