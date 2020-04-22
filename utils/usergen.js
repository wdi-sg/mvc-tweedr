let rsP = require('./rsp');
let hash = require('js-sha256');

let users = [
  'user1',
  'user2'
];

async function genUsers () {
  for (let i = 0; i < users.length; i++) {
    let salt = await rsP(4);
    console.log("\n");
    console.log(`('${users[i]}', '${hash('password'+salt)}', '${salt}')`);
  }
}

genUsers();
