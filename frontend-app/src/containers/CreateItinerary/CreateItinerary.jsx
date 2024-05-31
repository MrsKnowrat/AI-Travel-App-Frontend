import { useState, useContext, useEffect } from 'react';
import { postData } from '../../api/api';
import { AuthContext } from "../../contexts/AuthContext"
import './CreateItinerary.css';

const CreateItinerary = () => {
  const [travelerType, setTravelerType] = useState('');
  const { currentUsername } = useContext(AuthContext)

  const [itineraryDetails, setItineraryDetails] = useState({
    username: currentUsername,
    itineraryName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  // Update itineraryDetails when currentUsername changes
  useEffect(() => {
    setItineraryDetails(prevDetails => ({
      ...prevDetails,
      username: currentUsername
    }));
  }, [currentUsername]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItineraryDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postData("itineraries", itineraryDetails);
    console.log(JSON.stringify(response));
  };

  return (
    <div>
      <h2>Create a new Itinerary</h2>
      <p>Please fill out the form below to help us design your ideal activity itinerary. In the description, be sure to include:</p>
      <ul>
        <li><strong>Location:</strong> Specify the destination(s) you plan to visit.</li>
        <li><strong>Traveler Needs and Preferences:</strong> Describe any specific needs or preferences you or your travel companions have. This could include dietary restrictions, accessibility requirements, or particular activities you want to include.</li>
        <li><strong>Additional Details:</strong> The more detailed your description, the better we can tailor your itinerary to suit your needs and ensure a memorable travel experience.</li>
      </ul>
      <p>Remember, the key to a perfect itinerary is in the details, so please be as thorough as possible!</p>
      <form onSubmit={handleSubmit}>        <label className="form-label">
          Choose a traveler type:
          <select value={travelerType} onChange={e => setTravelerType(e.target.value)}>
            <option value="">Select...</option>
            <option value="family">Family with Young Kids</option>
            <option value="lgbt">LGBT</option>
            <option value="bachelorette">Bachelorette</option>
            <option value="solo">Solo</option>
          </select>
        </label>
        <label className="form-label">
          Itinerary Name:
          <input type="text" name="itineraryName" value={itineraryDetails.itineraryName} onChange={handleInputChange} />
        </label>
        <label className="form-label">
          Description:
          <textarea name="description" value={itineraryDetails.description} onChange={handleInputChange} />
        </label>
        <label className="form-label">
          Start Date:
          <input type="date" name="startDate" value={itineraryDetails.startDate} onChange={handleInputChange} />
        </label>
        <label className="form-label">
          End Date:
          <input type="date" name="endDate" value={itineraryDetails.endDate} onChange={handleInputChange} />
        </label>
        <button type="submit">Create Itinerary</button>
      </form>
    </div>
  );
};

export default CreateItinerary;