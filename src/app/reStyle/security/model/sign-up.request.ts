export class SignUpRequest {

  public username: string;
  public password: string;
  public roles: string[];
  public email: string;
    public firstName: string;
    public paternalSurname: string;
    public maternalSurname: string;
    public description: string;
    public phone: string;
    public image: string;

  constructor(username: string, password: string, roles: string[], email: string, firstName: string, paternalSurname: string, maternalSurname: string, description: string, phone: string, image: string) {
    this.password = password;
    this.username = username;
    this.roles = roles;
    this.email = email;
    this.firstName = firstName;
    this.paternalSurname = paternalSurname;
    this.maternalSurname = maternalSurname;
    this.description = description;
    this.phone = phone;
    this.image = image;
  }

}
