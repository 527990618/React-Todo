// var component = require('./component.js');
// document.body.appendChild(component());

import { render } from 'react-dom';
import Hello from './component.jsx';


main();

function main() {
    render(<Hello />, document.getElementById('example'));
}

