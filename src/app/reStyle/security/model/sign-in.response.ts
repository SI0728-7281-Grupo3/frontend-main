export class SignInResponse {

  public id: number;
  public username: string;
  public token: string;
  public sessionId: string;
  public userRole: string;
  public firstName: string;

  constructor(id: number, username: string, token: string, sessionId: string, userRole: string, firstName: string) {
    this.token = token;
    this.username = username;
    this.id = id;
    this.sessionId = sessionId;
    this.userRole = userRole;
    this.firstName = firstName;
  }

}
