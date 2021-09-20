const newModul = require('./main');

const newModulInstanse = new newModul();

newModulInstanse.hello();
newModulInstanse.goodbye();

//браузер ничего не знает о наших  импортах  и require. нужен сборщик
/* 
    npm init -y
    npm i webpack webpack-cli --save-dev
    npx webpack
*/