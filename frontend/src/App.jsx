import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ResultsList from './components/ResultsList'
import { mockActivities } from './mockData'

function App() {
  // State management
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Handle search form submission
  const handleSearch = (formData) => {
    // For Milestone 1, we just display all mock activities
    // In Milestone 2, this will be replaced with real API call
    console.log('Search submitted with data:', formData);
    setSearchResults(mockActivities);
    setHasSearched(true);
  };

  // Handle new search (clear results)
  const handleNewSearch = () => {
    setSearchResults([]);
    setHasSearched(false);
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
              <ResultsList activities={searchResults} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
