import './App.scss';
// import React, { useState, useEffect } from 'react';

// import Login from './component/login';
import ServerInfo from './component/serverInfo';

function App() {
  //const [user, setUser] = useState(true);
  
  // useEffect(() => {
  //   // 로그인 확인
  // }, []);


  return (
    <div className="App">
      {/* {user === true ? */}
        <ServerInfo />
        {/* : */}
        {/* <Login /> */}
      {/* } */}
    </div>
  );
}

export default App;
