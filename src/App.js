import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null; /* 로그인 안했을 때 */
  // const user = { /* 로그인 했을 때 */ name: 'sunny' };

  useEffect(() => {
    const unsubscrible = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // Logged in
        console.log(userAuth);
      } else {
        // Logged out
      }
    });

    return unsubscrible;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" exact element={<HomeScreen />} /> {/* exact prop는 경로를 정확히 매칭하고자 */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
