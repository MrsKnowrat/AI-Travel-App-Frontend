import { createContext } from "react";

/* This file is responsible for creating the context for user authentication. 
Context allows components to share authentication state throughout the app, such as the current 
user's username, without having to pass props down manually through each level of the component
tree.  */

export const AuthContext = createContext({
    currentUsername: null,
    setCurrentUsername: () => {}
});


/* This setup allows any component that subscribes to this context to read the current 
username and set the current username. */