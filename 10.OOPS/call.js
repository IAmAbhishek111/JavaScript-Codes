function SetUserName(usernmame) {
  // Complex Db Calls:
  this.usernmame = usernmame;
  console.log("called");
}

function createUser(usernmame, email, password) {
  // SetUserName(usernmame) // it is not called it has only have been reference :

  // to call :
  // SetUserName.call(usernmame)
  // it will also not show , so :
  SetUserName.call(this, usernmame);
  // now it have : createUser {
  //   usernmame: 'Chai',
  //   email: 'chai@fb.com',
  //   password: '12134'
  // }

  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@fb.com", "12134");

console.log(chai); //createUser { email: 'chai@fb.com', password: '12134' } : username is not called :
