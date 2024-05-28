import { useContext, useEffect, useState } from "react";
import { getData } from "../../api/api";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userItineraries, setUserItineraries] = useState([])
  const {currentUsername, setCurrentUsername} = useContext(AuthContext)
  
  useEffect(() => {
    if(currentUsername === null) {
      navigate("/auth")
    }
  }, [])

  useEffect(() => {
//cant use async in useEffect with async, so use const fetchData instead
    const fetchData = async () => {
      const response = await getData(`itinerary/user/${currentUsername}`)
      if(response.hasError) {
      console.log("error", response.error);
    }
    setUserItineraries(response.data)
  }
  fetchData()
  }, []);
// empty array means it will only run once

    return (
    <>
      <h2>Welcome to Journey</h2>
      {
        userItineraries.map(itinerary => {
          console.log(itinerary);
        })
      }
    </>
  );
};

export default Home;