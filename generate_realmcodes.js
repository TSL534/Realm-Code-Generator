const fs = require('fs');


function generateCode() {
    const alphanum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let code = '';
    for (let i = 0; i < 11; i++) {
        code += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
    }
    return code;
}

const numCodes = 1000000; //number
const codes = [];

for (let i = 0; i < numCodes; i++) {
    codes.push(generateCode());
}

const jsonData = {
    realmCodes: codes
};

fs.writeFile('realmcodes.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
        console.error('mean it dident worked', err);
    } else {
        console.log('Pluh it worked !.');
    }
});
