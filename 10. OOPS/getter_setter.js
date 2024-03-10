class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase(); // it will show error , for getter you want setter also
  }

  set password(value) {
    this._password = value; // porblem of max call stack exceed
  }
}

const Addy = new user("abhi@ai", "abc");
console.log(Addy.password); //ABC

// i want to get authorisation for selected
