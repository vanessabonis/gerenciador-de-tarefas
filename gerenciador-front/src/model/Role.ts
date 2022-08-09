export default class Role {
  id: number;
  role: string;

  constructor(role = "") {
    this.role = role;
  }
}
