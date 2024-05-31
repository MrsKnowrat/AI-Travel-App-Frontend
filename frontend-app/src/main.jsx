import React from 'react' // Import the React library to use JSX and React features
import ReactDOM from 'react-dom/client' // Import ReactDOM for rendering React components to the DOM
import App from './App.jsx' // Imports the main App component which holds the entire application UI
import './index.css' // Imports global styles for the application
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter for handling routing within the application

// Create a root DOM node for the React application using the container with the ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render( // Render the application within the root DOM node
// Use BrowserRouter to enable dynamic routing throughout the application
  <BrowserRouter> 
    <React.StrictMode> 
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

/*
  This is the entry point for the React application.
  It renders the App component, which is the root component for the application.
  The App component is responsible for rendering the rest of the application's UI.
*/