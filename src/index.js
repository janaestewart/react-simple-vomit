import React from 'react'; //imports the api react
import ReactDOM from 'react-dom'; //imports the api react dom
import './index.css'; //imports styling
import App from './App'; //imports app.js 
import registerServiceWorker from './registerServiceWorker'; //this is a document that is there when we create react app


ReactDOM.render(<App />, document.getElementById('root')); //reactDOM renders the app andgets the root id 
registerServiceWorker();
