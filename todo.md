# Milestone 1: UI Setup with Dummy Data - Task List

**Goal:** Create the complete frontend interface with static/dummy data
**Estimated Duration:** 3-5 days
**Status:** Not Started

---

## 1. Project Setup

### Initialize React Application
- [ ] Choose React setup method (Create React App or Vite)
- [ ] Run initialization command
  - Create React App: `npx create-react-app frontend`
  - OR Vite: `npm create vite@latest frontend -- --template react`
- [ ] Navigate to frontend directory: `cd frontend`
- [ ] Verify app runs successfully: `npm start` or `npm run dev`
- [ ] Remove default boilerplate code (App.css, logo.svg, etc.)

### Project Structure Setup
- [ ] Create `src/components/` directory
- [ ] Create `src/mockData.js` file for dummy data
- [ ] Create `.gitignore` file (if not auto-generated)
- [ ] Verify folder structure matches spec:
  ```
  frontend/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── mockData.js
  │   ├── App.js
  │   ├── App.css
  │   └── index.js
  └── package.json
  ```

### Dependencies (Optional)
- [ ] Review if any additional packages needed
- [ ] Install any CSS/styling libraries if chosen (styled-components, etc.)
- [ ] Update package.json with project details

---

## 2. Create Mock Data

### mockData.js File
- [ ] Create `src/mockData.js` file
- [ ] Define activity object structure:
  ```javascript
  {
    id: number,
    name: string,
    time: string,
    description: string,
    location: string,
    distance: string,
    icon: string (emoji)
  }
  ```
- [ ] Add 5-10 sample activities with variety:
  - [ ] Muni Heritage Weekend 🚋
  - [ ] Greek Food Festival 🍴
  - [ ] Sunday Funnies Exhibit 😄
  - [ ] Lindy in the Park Dance Party 💃
  - [ ] Add 1-2 more unique activities (art, sports, nature)
  - [ ] Add 1-2 indoor activities
  - [ ] Add 1-2 educational activities
- [ ] Export data array: `export const mockActivities = [...]`
- [ ] Verify data includes all required fields

---

## 3. Create UI Components

### Header Component
- [ ] Create `src/components/Header.js` file
- [ ] Add component structure:
  - [ ] Logo/Title: "Family Activity Finder" or "🎯 Family Activity Finder"
  - [ ] "New Search" button (right side)
- [ ] Add prop: `onNewSearch` function
- [ ] Style header:
  - [ ] Full-width background
  - [ ] Flexbox layout (space-between)
  - [ ] Appropriate padding and height
  - [ ] Border-bottom or shadow for separation
- [ ] Test component renders correctly

### SearchForm Component
- [ ] Create `src/components/SearchForm.js` file
- [ ] Set up component state with useState:
  - [ ] city (string)
  - [ ] kidAges (string or number)
  - [ ] availability (string)
  - [ ] maxDistance (number, default: 10)
  - [ ] optionalPreferences (string)
- [ ] Create form layout with fields:
  - [ ] **City** text input
    - [ ] Label: "City"
    - [ ] Placeholder: "e.g., San Francisco, CA"
  - [ ] **Kid Ages** input
    - [ ] Label: "Kid Ages"
    - [ ] Placeholder: "e.g., 5, 8"
  - [ ] **Date & Time** text input
    - [ ] Label: "Date & Time"
    - [ ] Placeholder: "e.g., Saturday afternoon"
  - [ ] **Maximum Distance** slider
    - [ ] Label: "Maximum Distance"
    - [ ] Range: 1-50 miles
    - [ ] Display current value: "{maxDistance} miles"
  - [ ] **Optional Preferences** textarea
    - [ ] Label: "Optional Preferences"
    - [ ] Placeholder: "e.g., outdoor, educational, free events"
    - [ ] Rows: 3-4
- [ ] Add buttons:
  - [ ] **Search** button (primary style)
  - [ ] **Clear** button (secondary style)
- [ ] Implement event handlers:
  - [ ] handleInputChange for text fields
  - [ ] handleSliderChange for distance slider
  - [ ] handleSearch (calls onSearch prop with form data)
  - [ ] handleClear (resets all form fields)
- [ ] Add props:
  - [ ] onSearch (function to handle search submission)
- [ ] Test form state updates correctly

### ActivityCard Component
- [ ] Create `src/components/ActivityCard.js` file
- [ ] Define props:
  - [ ] name
  - [ ] time
  - [ ] description
  - [ ] location
  - [ ] distance
  - [ ] icon
- [ ] Create card layout:
  - [ ] Icon/emoji at top (large, centered or left-aligned)
  - [ ] Activity name (bold, larger font)
  - [ ] Time (smaller, gray text)
  - [ ] Description (2-3 lines, readable size)
  - [ ] Location + distance (italic, gray, bottom)
- [ ] Style card:
  - [ ] White background
  - [ ] Box shadow: `0 2px 8px rgba(0,0,0,0.1)`
  - [ ] Border radius: 8px
  - [ ] Padding: 20px
  - [ ] Margin between cards
- [ ] Add hover effect (subtle shadow increase or border)
- [ ] Test card renders with mock data

### ResultsList Component
- [ ] Create `src/components/ResultsList.js` file
- [ ] Define props:
  - [ ] activities (array of activity objects)
- [ ] Create layout:
  - [ ] Heading: "Top 5 Activity Recommendations" or similar
  - [ ] Grid or flex container for cards
  - [ ] Map through activities array
  - [ ] Render ActivityCard for each item (max 5)
- [ ] Handle empty state:
  - [ ] Show message: "No activities found. Try a different search!"
  - [ ] Suggestions to adjust criteria
- [ ] Style results container:
  - [ ] Appropriate spacing between cards
  - [ ] Responsive grid (1 column mobile, 2+ desktop if space)
- [ ] Test with mock data array

---

## 4. Implement App.js Logic

### Main Application Setup
- [ ] Import all components (Header, SearchForm, ResultsList)
- [ ] Import mockActivities from mockData.js
- [ ] Set up state:
  - [ ] `searchResults` (array, initially empty)
  - [ ] `hasSearched` (boolean, initially false)
- [ ] Create handleSearch function:
  - [ ] Accept formData as parameter
  - [ ] Filter/display mockActivities (or just show all for now)
  - [ ] Update searchResults state
  - [ ] Set hasSearched to true
- [ ] Create handleNewSearch function:
  - [ ] Clear searchResults
  - [ ] Reset hasSearched to false
- [ ] Build layout structure:
  - [ ] Header at top
  - [ ] Two-column layout (desktop):
    - [ ] Left column: SearchForm (sticky if desired)
    - [ ] Right column: ResultsList (if hasSearched)
  - [ ] Single column (mobile): Form above, results below
- [ ] Test full app flow

---

## 5. Styling & Layout

### App.css / Global Styles
- [ ] Reset default margins/padding if needed
- [ ] Set font family: Inter, Roboto, or system sans-serif
- [ ] Define CSS variables for colors:
  - [ ] `--primary-blue: #4F7BF5`
  - [ ] `--background: #F5F5F5`
  - [ ] `--text-primary: #333333`
  - [ ] `--text-secondary: #666666`
  - [ ] `--card-bg: #FFFFFF`
  - [ ] `--border: #E0E0E0`
- [ ] Set body background color: `#F5F5F5`
- [ ] Set default text color and line-height

### Two-Column Layout (Desktop)
- [ ] Create container with max-width: 1200px, centered
- [ ] Use flexbox or grid for two columns:
  - [ ] Left: 40% width (SearchForm)
  - [ ] Right: 60% width (ResultsList)
- [ ] Add appropriate gap/spacing between columns
- [ ] Test layout at various desktop widths

### Responsive Design (Mobile)
- [ ] Add media query for screens < 768px
- [ ] Stack columns vertically (flex-direction: column)
- [ ] SearchForm takes full width
- [ ] ResultsList below form, full width
- [ ] Adjust padding/margins for mobile
- [ ] Test on mobile viewport sizes

### Component-Specific Styling
- [ ] Style Header component:
  - [ ] Background color (white or light gray)
  - [ ] Flexbox: space-between alignment
  - [ ] Padding: 16px 24px
  - [ ] Border-bottom or shadow
- [ ] Style SearchForm component:
  - [ ] Card appearance (white bg, padding, shadow)
  - [ ] Form field spacing (margin-bottom: 16px)
  - [ ] Label styles (font-weight: 600, margin-bottom: 4px)
  - [ ] Input field styles (border, padding, focus state)
  - [ ] Button styles:
    - [ ] Primary: blue bg, white text, hover effect
    - [ ] Secondary: gray border, gray text, hover effect
  - [ ] Slider styles (track color, thumb color)
- [ ] Style ActivityCard component:
  - [ ] White background, shadow, border-radius
  - [ ] Icon size and positioning
  - [ ] Text hierarchy (name > description > metadata)
  - [ ] Hover effect
- [ ] Style ResultsList component:
  - [ ] Heading style
  - [ ] Card grid/flex layout
  - [ ] Spacing between cards

### Polish
- [ ] Add smooth transitions (buttons, cards on hover)
- [ ] Ensure consistent spacing throughout
- [ ] Verify color scheme matches spec
- [ ] Check font sizes are readable
- [ ] Test contrast for accessibility

---

## 6. Interactivity & Testing

### Form Functionality
- [ ] Test city input updates state
- [ ] Test kid ages input updates state
- [ ] Test date/time input updates state
- [ ] Test distance slider updates state and displays value
- [ ] Test optional preferences textarea updates state
- [ ] Test Search button triggers handleSearch
- [ ] Test Clear button resets all form fields
- [ ] Verify form data is logged or visible

### Search & Results Display
- [ ] Click Search button
- [ ] Verify ResultsList appears with mock activities
- [ ] Verify top 5 activities are displayed
- [ ] Verify each ActivityCard shows all data correctly:
  - [ ] Icon/emoji visible
  - [ ] Name displayed
  - [ ] Time displayed
  - [ ] Description displayed
  - [ ] Location and distance displayed
- [ ] Test multiple searches (should update results)

### New Search Functionality
- [ ] Click "New Search" button in Header
- [ ] Verify results are cleared
- [ ] Verify form remains filled (or optionally cleared)
- [ ] Ready for new search

### Responsive Testing
- [ ] Test on desktop (1200px+ width)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on mobile (< 768px)
- [ ] Verify layout adapts correctly
- [ ] Verify all elements are accessible and clickable

### Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test in Edge
- [ ] Verify consistent appearance and functionality

---

## 7. Code Quality & Documentation

### Code Review
- [ ] Remove any console.logs (or keep for debugging)
- [ ] Remove unused imports
- [ ] Ensure consistent code formatting
- [ ] Add comments to complex logic (if any)
- [ ] Verify component props are used correctly
- [ ] Check for any errors or warnings in console

### Component Documentation
- [ ] Add brief comment at top of each component file
- [ ] Document props for each component
- [ ] Example:
  ```javascript
  /**
   * ActivityCard - Displays a single activity recommendation
   * @param {string} name - Activity name
   * @param {string} time - Date and time
   * @param {string} description - Activity description
   * @param {string} location - Venue/address
   * @param {string} distance - Distance from user location
   * @param {string} icon - Emoji icon
   */
  ```

### Git Commit
- [ ] Stage all changes: `git add .`
- [ ] Review changes: `git status` and `git diff`
- [ ] Commit with message: `git commit -m "Complete Milestone 1: UI setup with dummy data"`
- [ ] Verify commit was successful

---

## 8. Final Deliverables Checklist

- [ ] ✅ React app runs without errors
- [ ] ✅ UI matches the screenshot design
- [ ] ✅ All components created and functional:
  - [ ] Header with New Search button
  - [ ] SearchForm with all input fields
  - [ ] ActivityCard displaying activity details
  - [ ] ResultsList showing top 5 activities
- [ ] ✅ Mock data created with 5-10 sample activities
- [ ] ✅ Styling implemented:
  - [ ] Color scheme matches spec
  - [ ] Two-column layout (desktop)
  - [ ] Responsive design (mobile)
  - [ ] Professional appearance
- [ ] ✅ Basic interactivity working:
  - [ ] Form inputs update state
  - [ ] Search button displays results
  - [ ] Clear button resets form
  - [ ] New Search clears results
- [ ] ✅ Ready for Milestone 2 (API integration)

---

## Notes & Issues

_Use this section to track any issues, questions, or notes during implementation:_

-
-
-

---

**Milestone 1 Completion Date:** __________
**Ready to proceed to Milestone 2:** [ ] Yes [ ] No

---

## Next Steps After Milestone 1

Once all tasks are complete:
1. Review the UI and ensure it matches the design spec
2. Test thoroughly on different screen sizes
3. Commit all changes to Git
4. Proceed to **Milestone 2: Claude API Integration**
5. Reference `prompt.md` for API integration details
