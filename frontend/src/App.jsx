import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ResultsList from './components/ResultsList'

function App() {
  // State management
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle search form submission
  const handleSearch = async (formData) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      console.log('🔍 Sending search request to backend:', formData);

      const response = await fetch('http://localhost:3001/api/search-activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch activities');
      }

      const data = await response.json();
      console.log('✅ Received activities:', data);
      setSearchResults(data);

    } catch (err) {
      console.error('❌ Error fetching activities:', err);
      setError(err.message || 'Failed to fetch activities. Please try again.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle new search (clear results)
  const handleNewSearch = () => {
    setSearchResults([]);
    setHasSearched(false);
    setError(null);
  };

  return (
    <div className="app">
      <Header onNewSearch={handleNewSearch} />

      <main className="main-content">
        <div className="content-container">
          {/* Left Column: Search Form */}
          <div className="search-column">
            <SearchForm onSearch={handleSearch} />
          </div>

          {/* Right Column: Results (only shown after search) */}
          {hasSearched && (
            <div className="results-column">
              <ResultsList
                activities={searchResults}
                loading={loading}
                error={error}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
