import PropTypes from 'prop-types';
import './ItineraryCard.css';

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="itinerary-card">
      <h3>{itinerary.itineraryName}</h3>
      <p>{itinerary.description}</p>
      <p>Start Date: {itinerary.startDate}</p>
      <p>End Date: {itinerary.endDate}</p>
      <div className="tags">
        {/* Check if tags is not null before mapping */}
        {itinerary.tags && itinerary.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="activities">
        {itinerary.activities.map((activity, index) => (
          <div key={index} className="activity">
            <h4>{activity.activityName}</h4>
            {/* Check if activity tags is not empty before mapping */}
            <div className="activity-tags">
              {activity.tags && activity.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag.tagName}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Update PropTypes to handle possible null values for tags
ItineraryCard.propTypes = {
  itinerary: PropTypes.shape({
    itineraryName: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    activities: PropTypes.arrayOf(PropTypes.shape({
      activityName: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.shape({
        tagName: PropTypes.string
      }))
    }))
  }).isRequired
};

export default ItineraryCard;