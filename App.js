
import './App.css';
import React from 'react';
import SearchBar from './Component/search';
import Header from './Component/header';
import Navbar from './Component/Navbar';
import store from './store';
import {Provider} from 'react-redux';
// function App() {
//   return (
//     <div className="App">
//       <header>
//         food app
//       </header>
//     </div>
//   );
// }

const App=()=>{
  
   return(
     
      <Provider store={store}>
      <Header/>
      <SearchBar/>
     <React.Fragment>
      <Navbar/>
     </React.Fragment>
     </Provider>
     
   );
   
}

export default App;
