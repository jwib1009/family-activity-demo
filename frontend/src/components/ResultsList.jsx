/**
 * ResultsList Component
 * Displays the list of activity recommendations or empty state
 *
 * @param {Array} activities - Array of activity objects to display
 * @param {boolean} loading - Whether search is in progress
 * @param {string} error - Error message if search failed
 */

import ActivityCard from './ActivityCard';
import LoadingSpinner from './LoadingSpinner';

function ResultsList({ activities, loading, error }) {
  // Loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Error state
  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">❌</div>
        <h2>Oops! Something went wrong</h2>
        <p className="error-message">{error}</p>
        <p className="error-suggestion">
          Please try again or adjust your search criteria.
        </p>
      </div>
    );
  }

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
