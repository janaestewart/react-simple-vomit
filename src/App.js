import React, { Component } from 'react'; //import react and destructer components from react
import './App.css';  //import the app.css
import Header from './Header'; //import header from the header document
import SectionMain from './SectionMain'; //import sectionmain from the sectionmain.js
import Aside from './Aside';  //import aside from the aside.js
import Footer from './Footer'; //import footer from footer.js

class App extends Component { //class based component. 

  render() {  //allows app to render...we dont need this with functional components
    return ( //the render returns whatevers in these parentheses. ClassName is similar to using class in html. backColor and width are props being passed to Header. Other components are also being passed through App
      <div className="App">     
        <Header backColor="green" width="50%"></Header> 
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App; //this exports the app.js to be used elsewhere
