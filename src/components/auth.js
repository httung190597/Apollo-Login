const item = JSON.parse(sessionStorage.getItem('auth'));
const auth = item || false 
class Auth {
    constructor() {
      this.authenticated = auth;
    }
  
    login(cb) {
      this.authenticated = true;
      sessionStorage.setItem('auth',this.authenticated)
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      sessionStorage.setItem('auth',this.authenticated)
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
export default new Auth();
  