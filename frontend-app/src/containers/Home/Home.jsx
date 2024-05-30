import { useContext, useEffect, useState } from "react";
import { getData } from "../../api/api";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import ItineraryCard from "../../components/ItineraryCard/ItineraryCard";

const Home = () => {
  const navigate = useNavigate();
  const [userItineraries, setUserItineraries] = useState([])
  const { currentUsername } = useContext(AuthContext)

  useEffect(() => {
    if (currentUsername === null) {
      navigate("/auth")
    }
  }, [currentUsername, navigate])// used to be empty, testing redirect

  useEffect(() => {
    //cant use async in useEffect with async, so use const fetchData instead
    const fetchData = async () => {
      const response = await getData(`itineraries/user/${currentUsername}`)
      if (response.hasError) {
        console.log("error", response.error);
      }
      setUserItineraries(response.data)
    }
    fetchData()
  }, []);
  // empty array means it will only run once when the component is mounted

  return (
    <>
      <h1>Welcome to Journey</h1>
      {
        userItineraries.length > 0 ?
          userItineraries.map(itinerary => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          )) :
          <>
            <p>Create an itinerary to get started.</p>
            <Link to="/create-itinerary">
              <button>Create Itinerary</button>
            </Link>
          </>
      }
    </>
  );
};

export default Home;