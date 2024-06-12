# React + Vite
# Journey - Personalized Travel Itinerary Planner

## Overview
Journey is a web application designed to create personalized travel itineraries. Leveraging advanced AI technologies, Journey helps users plan their travels based on their preferences and needs, ensuring an accessible and enjoyable experience for all types of travelers.

## Features
- **Personalized Itineraries**: Users can input their travel preferences to receive customized travel plans.
- **Accessibility Options**: Detailed accessibility information is provided for all recommended activities.
- **Diverse Experiences**: From museums to nature hikes, the platform covers a wide range of activities.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: As the build tool for a faster development experience.
- **React Router**: For handling routing.
- **PropTypes**: For type-checking our component props to ensure reliability.

## Product Development Plan
[Project Plan](https://docs.google.com/spreadsheets/d/1LJ4Vg0oFXCdw2MbK_QIZC1KIO36yN9MZ4ZBGtr_k8pM/edit?usp=sharing)


## Project Structure
- `src/`: Contains all the source files.
  - `components/`: Reusable React components.
  - `containers/`: React components that serve as containers, which might include state logic or context.
  - `contexts/`: React context providers for global state management.
  - `api/`: Functions for making API calls.
- `public/`: Public assets like images and icons.
- `index.html`: The entry HTML file.
- `vite.config.js`: Configuration for Vite.

## Setup and Installation
1. **Clone the repository**
   ```bash
   git clone https://git.generalassemb.ly/mrsknowrat/Capstone-frontend.git
   cd journey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install React Router DOM Package**
   ```bash
   npm install react-router-dom
   ```

4. **Install Prop-Types**
   ```bash
   npm install prop-types
   ```

5. **Run the development server & preview the production build**
   ```bash
   npm run dev -- --open --port 3000
   ```

## Usage
Navigate to `http://localhost:3000` after starting the development server. The application will guide you through creating an account, logging in, and starting to create personalized travel itineraries.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or create an issue if you have suggestions for improvements or have identified bugs.

## Author
- **Erica Sowder** - *Initial work* - [mrsknowrat](https://git.generalassemb.ly/mrsknowrat)

## Acknowledgments
- Hat tip to Bereket Beshane for providing demonstration code that helped me improve the frontend architecture.
- Big thanks to Bereket Beshane and Asha Mathis for taking me from level 0 of coding skill to where I am now. I am very grateful!
