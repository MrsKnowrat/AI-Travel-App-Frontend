import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Signup';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import CreateItinerary from './containers/CreateItinerary/CreateItinerary';
import Profile from './containers/Profile/Profile';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import './App.css'

const App = () => {
  const [currentUsername, setCurrentUsername] = useState(null)


  return (
    <AuthContext.Provider value={currentUsername, setCurrentUsername}>
      <main>
        <Header currentUsername={currentUsername}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create" element={<CreateItinerary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
};

export default App;
