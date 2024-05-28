
import './App.css';
import Header from './Header';
import Cart from  './Cart'
import ItemList from './ItemList';
import ContextProvider from './ContextProvider';
import { useState } from 'react';
 
function App() {

  const [showModal,setShowModal] =useState(false)

  const show =()=>{
    setShowModal(true)
  }

  const hide =()=>{
    setShowModal(false)
  }
  return (
    <div className="App">
      {showModal && <Cart onClose={hide}/>}
      <ContextProvider>
      <Header/>
      <Cart onShow={show}/>
      <ItemList></ItemList>
      </ContextProvider>
    </div>
  );
}

export default App;
