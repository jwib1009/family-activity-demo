/**
 * LoadingSpinner Component
 * Displays a loading animation while searching for activities
 */

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2 className="loading-title">Searching for activities...</h2>
      <p className="loading-message">
        Claude is searching the web for the best family activities in your area!
      </p>
    </div>
  );
}

export default LoadingSpinner;
