import  React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';



function App() {
  //Login 
  const [{user}, dispatch] = useStateValue();
  //React context API/ REDUX

  return (
    // BEM naming convention / React API
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
          {/* Widgets */}
        </div>
        </>
      )}
    </div>
  );
}

export default App;
