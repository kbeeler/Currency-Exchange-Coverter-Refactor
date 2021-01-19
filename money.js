

import { init } from './init.js';


//start app
const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });