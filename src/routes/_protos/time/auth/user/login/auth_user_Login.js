import BaseService from '../../../baseservice.js'
const LoginRequest = require('./proto/auth::user::LoginRequest_pb.js')
const LoginResponse = require('./proto/auth::user::LoginResponse_pb.js')
export class Login extends BaseService {
  constructor() {
    this.LoginRequest = new LoginRequest();
    this.LoginResponse = new LoginResponse();
  }
  // manual_part
  // manual_part_end
};
