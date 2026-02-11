/**
 * Header Component
 * Displays the app title/logo and "New Search" button
 *
 * @param {function} onNewSearch - Callback function to clear results and start new search
 */

function Header({ onNewSearch }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="header-icon">🎯</span>
          Family Activity Finder
        </h1>
        <button
          className="btn btn-secondary new-search-btn"
          onClick={onNewSearch}
        >
          New Search
        </button>
      </div>
    </header>
  );
}

export default Header;
