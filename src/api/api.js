/* This file is responsible for handling API requests to a backend server. It contains two main functions: 
getData and postData. getData is responsible for making a GET request to the backend, while postData is 
responsible for making a POST request to the backend.

Overall, it bstracts the complexities of making HTTP requests and handling responses, providing a 
simpler interface for other parts of the application to communicate with the backend.*/

const backendBaseUrl = "http://localhost:8080"  // Base URL for all backend requests

// Asynchronously fetch data from a specified endpoint
export const getData = async (endpoint) => {
    // Logs the endpoint being called for debugging purposes
    console.log("Get request calling " + endpoint);

    try {
        // Performs a GET request to the backend using the fetch API
        const response = await fetch(`${backendBaseUrl}/${endpoint}`)
        // Parse the response body as JSON
        const data = response.json();
        // Return the parsed data
        return data;
    } catch (error) {
        // Logs any errors that occur during the fetch operation
        console.error("Error fetching data: response may be null", error);
        // Rethrow the error to be handled by the caller
        throw error;
    }
}

// Asynchronously send data to a specified endpoint using a POST request
export const postData = async (endpoint, body) => {
    // Log the endpoint and body being sent for debugging purposes
    console.log(`Post request calling ${endpoint}`, body);

    try {
        // Performs a POST request to the backend using the fetch API
        const response = await fetch(`${backendBaseUrl}/${endpoint}`, {
            method: "POST", // Sets the method to POST
            headers: {
                "Content-Type": "application/json" // Sets the content type header to application/json
            },
            body: JSON.stringify(body), // Convert the body to a JSON string
        });
        // Checks if the response status indicates a successful request
        if (!response.ok) {
            throw new Error('Network response was not ok'); // If not successful, throw an error
        }
        const data = await response.json(); // Parses the response body as JSON
        console.log(data); // Logs the received data for debugging purposes
        return data; // Returns the parsed data
    } catch (error) {
        // Logs any errors that occur during the POST operation
        console.error("Error posting data", error);
        throw error; // Rethrows the error to be handled by the caller
    }
}
    