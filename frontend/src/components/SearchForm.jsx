/**
 * SearchForm Component
 * User input form for searching family activities
 *
 * @param {function} onSearch - Callback function called when form is submitted
 */

import { useState } from 'react';

function SearchForm({ onSearch }) {
  // Form state management
  const [formData, setFormData] = useState({
    city: '',
    kidAges: '',
    availability: '',
    maxDistance: 10,
    optionalPreferences: ''
  });

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle distance slider change
  const handleSliderChange = (e) => {
    setFormData(prev => ({
      ...prev,
      maxDistance: parseInt(e.target.value)
    }));
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  // Handle clear button
  const handleClear = () => {
    setFormData({
      city: '',
      kidAges: '',
      availability: '',
      maxDistance: 10,
      optionalPreferences: ''
    });
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSearch}>
        <h2 className="form-heading">Find Family Activities</h2>

        {/* City Input */}
        <div className="form-group">
          <label htmlFor="city" className="form-label">
            City <span className="required">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-input"
            placeholder="e.g., San Francisco, CA"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Kid Ages Input */}
        <div className="form-group">
          <label htmlFor="kidAges" className="form-label">
            Kid Ages <span className="required">*</span>
          </label>
          <input
            type="text"
            id="kidAges"
            name="kidAges"
            className="form-input"
            placeholder="e.g., 5, 8"
            value={formData.kidAges}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Date & Time Input */}
        <div className="form-group">
          <label htmlFor="availability" className="form-label">
            Date & Time <span className="required">*</span>
          </label>
          <input
            type="text"
            id="availability"
            name="availability"
            className="form-input"
            placeholder="e.g., Saturday afternoon"
            value={formData.availability}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Maximum Distance Slider */}
        <div className="form-group">
          <label htmlFor="maxDistance" className="form-label">
            Maximum Distance
          </label>
          <input
            type="range"
            id="maxDistance"
            name="maxDistance"
            className="form-slider"
            min="1"
            max="50"
            value={formData.maxDistance}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{formData.maxDistance} miles</div>
        </div>

        {/* Optional Preferences Textarea */}
        <div className="form-group">
          <label htmlFor="optionalPreferences" className="form-label">
            Optional Preferences
          </label>
          <textarea
            id="optionalPreferences"
            name="optionalPreferences"
            className="form-textarea"
            placeholder="e.g., outdoor, educational, free events"
            rows="3"
            value={formData.optionalPreferences}
            onChange={handleInputChange}
          />
        </div>

        {/* Form Buttons */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Search Activities
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
