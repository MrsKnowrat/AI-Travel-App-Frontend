import { Route, Routes } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import CreateItinerary from './containers/CreateItinerary/CreateItinerary';
import Profile from './containers/Profile/Profile';
import About from './containers/About/About';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import './App.css'

/* This file serves as the main component that orchestrates the routing and state mgmt
related to user authentication. It sets the main structure of the app and provides the 
context for the rest of the app to use. */

const App = () => {
  // State hook to keep track of the current username, initialized to null
  const [currentUsername, setCurrentUsername] = useState(null);

  return ( // Returns JSX to render the UI
    // Provides the AuthContext to all child components
    <AuthContext.Provider value={{currentUsername, setCurrentUsername}}>
      <main>
        {/* Renders the Header component, passing the currentUsername as a prop */}
        <Header currentUsername={currentUsername}/>
        {/* Sets up routes for navigation within the app */}
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-itinerary" element={<CreateItinerary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </AuthContext.Provider> 
  );
};

export default App; // Exports the App component as the default export of this module
 