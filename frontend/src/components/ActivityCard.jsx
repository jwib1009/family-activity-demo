/**
 * ActivityCard Component
 * Displays a single activity recommendation with all details
 *
 * @param {string} name - Activity name
 * @param {string} time - Date and time information
 * @param {string} description - Activity description
 * @param {string} location - Venue/address
 * @param {string} distance - Distance from user location
 * @param {string} icon - Emoji icon representing the activity
 */

function ActivityCard({ name, time, description, location, distance, icon }) {
  return (
    <div className="activity-card">
      <div className="activity-icon">{icon}</div>
      <h3 className="activity-name">{name}</h3>
      <p className="activity-time">{time}</p>
      <p className="activity-description">{description}</p>
      <p className="activity-location">
        <span className="location-icon">📍</span>
        {location} • {distance}
      </p>
    </div>
  );
}

export default ActivityCard;
