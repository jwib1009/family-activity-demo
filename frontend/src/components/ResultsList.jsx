/**
 * ResultsList Component
 * Displays the list of activity recommendations or empty state
 *
 * @param {Array} activities - Array of activity objects to display
 */

import ActivityCard from './ActivityCard';

function ResultsList({ activities }) {
  // Empty state - no activities to display
  if (!activities || activities.length === 0) {
    return (
      <div className="results-empty">
        <div className="empty-icon">🔍</div>
        <h2>No activities found</h2>
        <p>Try adjusting your search criteria:</p>
        <ul className="empty-suggestions">
          <li>Increase the maximum distance</li>
          <li>Try a different date or time</li>
          <li>Broaden your preferences</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="results-container">
      <h2 className="results-heading">
        Top {Math.min(activities.length, 5)} Activity Recommendations
      </h2>
      <div className="results-grid">
        {activities.slice(0, 5).map((activity) => (
          <ActivityCard
            key={activity.id}
            name={activity.name}
            time={activity.time}
            description={activity.description}
            location={activity.location}
            distance={activity.distance}
            icon={activity.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
