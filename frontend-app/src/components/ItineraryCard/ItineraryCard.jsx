import PropTypes from 'prop-types';
import './ItineraryCard.css';

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="itinerary-card">
      <h3>{itinerary.itineraryName}</h3>
      <p>{itinerary.description}</p>
      <p>Start Date: {itinerary.startDate}</p>
      <p>End Date: {itinerary.endDate}</p>
      {/* Future implementation for tags and activities */}
      <div className="tags">
        {itinerary.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="activities">
        {itinerary.activities.map((activity, index) => (
          <div key={index} className="activity">{activity.name}</div>
        ))}
      </div>
    </div>
  );
};

// Define prop types for ItineraryCard
ItineraryCard.propTypes = {
    itinerary: PropTypes.shape({
      itineraryName: PropTypes.string,
      description: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      activities: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
      }))
    }).isRequired
  };

export default ItineraryCard;