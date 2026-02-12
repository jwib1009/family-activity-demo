# Milestone 1: UI Setup with Dummy Data - Task List

**Goal:** Create the complete frontend interface with static/dummy data
**Estimated Duration:** 3-5 days
**Status:** ✅ COMPLETED (2026-02-11)

---

## 1. Project Setup

### Initialize React Application
- [x] Choose React setup method (Create React App or Vite)
- [x] Run initialization command
  - Create React App: `npx create-react-app frontend`
  - OR Vite: `npm create vite@latest frontend -- --template react`
- [x] Navigate to frontend directory: `cd frontend`
- [x] Verify app runs successfully: `npm start` or `npm run dev`
- [x] Remove default boilerplate code (App.css, logo.svg, etc.)

### Project Structure Setup
- [x] Create `src/components/` directory
- [x] Create `src/mockData.js` file for dummy data
- [x] Create `.gitignore` file (if not auto-generated)
- [x] Verify folder structure matches spec:
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
- [x] Review if any additional packages needed
- [x] Install any CSS/styling libraries if chosen (styled-components, etc.)
- [x] Update package.json with project details

---

## 2. Create Mock Data

### mockData.js File
- [x] Create `src/mockData.js` file
- [x] Define activity object structure:
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
- [x] Add 5-10 sample activities with variety:
  - [x] Muni Heritage Weekend 🚋
  - [x] Greek Food Festival 🍴
  - [x] Sunday Funnies Exhibit 😄
  - [x] Lindy in the Park Dance Party 💃
  - [x] Add 1-2 more unique activities (art, sports, nature)
  - [x] Add 1-2 indoor activities
  - [x] Add 1-2 educational activities
- [x] Export data array: `export const mockActivities = [...]`
- [x] Verify data includes all required fields

---

## 3. Create UI Components

### Header Component
- [x] Create `src/components/Header.js` file
- [x] Add component structure:
  - [x] Logo/Title: "Family Activity Finder" or "🎯 Family Activity Finder"
  - [x] "New Search" button (right side)
- [x] Add prop: `onNewSearch` function
- [x] Style header:
  - [x] Full-width background
  - [x] Flexbox layout (space-between)
  - [x] Appropriate padding and height
  - [x] Border-bottom or shadow for separation
- [x] Test component renders correctly

### SearchForm Component
- [x] Create `src/components/SearchForm.js` file
- [x] Set up component state with useState:
  - [x] city (string)
  - [x] kidAges (string or number)
  - [x] availability (string)
  - [x] maxDistance (number, default: 10)
  - [x] optionalPreferences (string)
- [x] Create form layout with fields:
  - [x] **City** text input
    - [x] Label: "City"
    - [x] Placeholder: "e.g., San Francisco, CA"
  - [x] **Kid Ages** input
    - [x] Label: "Kid Ages"
    - [x] Placeholder: "e.g., 5, 8"
  - [x] **Date & Time** text input
    - [x] Label: "Date & Time"
    - [x] Placeholder: "e.g., Saturday afternoon"
  - [x] **Maximum Distance** slider
    - [x] Label: "Maximum Distance"
    - [x] Range: 1-50 miles
    - [x] Display current value: "{maxDistance} miles"
  - [x] **Optional Preferences** textarea
    - [x] Label: "Optional Preferences"
    - [x] Placeholder: "e.g., outdoor, educational, free events"
    - [x] Rows: 3-4
- [x] Add buttons:
  - [x] **Search** button (primary style)
  - [x] **Clear** button (secondary style)
- [x] Implement event handlers:
  - [x] handleInputChange for text fields
  - [x] handleSliderChange for distance slider
  - [x] handleSearch (calls onSearch prop with form data)
  - [x] handleClear (resets all form fields)
- [x] Add props:
  - [x] onSearch (function to handle search submission)
- [x] Test form state updates correctly

### ActivityCard Component
- [x] Create `src/components/ActivityCard.js` file
- [x] Define props:
  - [x] name
  - [x] time
  - [x] description
  - [x] location
  - [x] distance
  - [x] icon
- [x] Create card layout:
  - [x] Icon/emoji at top (large, centered or left-aligned)
  - [x] Activity name (bold, larger font)
  - [x] Time (smaller, gray text)
  - [x] Description (2-3 lines, readable size)
  - [x] Location + distance (italic, gray, bottom)
- [x] Style card:
  - [x] White background
  - [x] Box shadow: `0 2px 8px rgba(0,0,0,0.1)`
  - [x] Border radius: 8px
  - [x] Padding: 20px
  - [x] Margin between cards
- [x] Add hover effect (subtle shadow increase or border)
- [x] Test card renders with mock data

### ResultsList Component
- [x] Create `src/components/ResultsList.js` file
- [x] Define props:
  - [x] activities (array of activity objects)
- [x] Create layout:
  - [x] Heading: "Top 5 Activity Recommendations" or similar
  - [x] Grid or flex container for cards
  - [x] Map through activities array
  - [x] Render ActivityCard for each item (max 5)
- [x] Handle empty state:
  - [x] Show message: "No activities found. Try a different search!"
  - [x] Suggestions to adjust criteria
- [x] Style results container:
  - [x] Appropriate spacing between cards
  - [x] Responsive grid (1 column mobile, 2+ desktop if space)
- [x] Test with mock data array

---

## 4. Implement App.js Logic

### Main Application Setup
- [x] Import all components (Header, SearchForm, ResultsList)
- [x] Import mockActivities from mockData.js
- [x] Set up state:
  - [x] `searchResults` (array, initially empty)
  - [x] `hasSearched` (boolean, initially false)
- [x] Create handleSearch function:
  - [x] Accept formData as parameter
  - [x] Filter/display mockActivities (or just show all for now)
  - [x] Update searchResults state
  - [x] Set hasSearched to true
- [x] Create handleNewSearch function:
  - [x] Clear searchResults
  - [x] Reset hasSearched to false
- [x] Build layout structure:
  - [x] Header at top
  - [x] Two-column layout (desktop):
    - [x] Left column: SearchForm (sticky if desired)
    - [x] Right column: ResultsList (if hasSearched)
  - [x] Single column (mobile): Form above, results below
- [x] Test full app flow

---

## 5. Styling & Layout

### App.css / Global Styles
- [x] Reset default margins/padding if needed
- [x] Set font family: Inter, Roboto, or system sans-serif
- [x] Define CSS variables for colors:
  - [x] `--primary-blue: #4F7BF5`
  - [x] `--background: #F5F5F5`
  - [x] `--text-primary: #333333`
  - [x] `--text-secondary: #666666`
  - [x] `--card-bg: #FFFFFF`
  - [x] `--border: #E0E0E0`
- [x] Set body background color: `#F5F5F5`
- [x] Set default text color and line-height

### Two-Column Layout (Desktop)
- [x] Create container with max-width: 1200px, centered
- [x] Use flexbox or grid for two columns:
  - [x] Left: 40% width (SearchForm)
  - [x] Right: 60% width (ResultsList)
- [x] Add appropriate gap/spacing between columns
- [x] Test layout at various desktop widths

### Responsive Design (Mobile)
- [x] Add media query for screens < 768px
- [x] Stack columns vertically (flex-direction: column)
- [x] SearchForm takes full width
- [x] ResultsList below form, full width
- [x] Adjust padding/margins for mobile
- [x] Test on mobile viewport sizes

### Component-Specific Styling
- [x] Style Header component:
  - [x] Background color (white or light gray)
  - [x] Flexbox: space-between alignment
  - [x] Padding: 16px 24px
  - [x] Border-bottom or shadow
- [x] Style SearchForm component:
  - [x] Card appearance (white bg, padding, shadow)
  - [x] Form field spacing (margin-bottom: 16px)
  - [x] Label styles (font-weight: 600, margin-bottom: 4px)
  - [x] Input field styles (border, padding, focus state)
  - [x] Button styles:
    - [x] Primary: blue bg, white text, hover effect
    - [x] Secondary: gray border, gray text, hover effect
  - [x] Slider styles (track color, thumb color)
- [x] Style ActivityCard component:
  - [x] White background, shadow, border-radius
  - [x] Icon size and positioning
  - [x] Text hierarchy (name > description > metadata)
  - [x] Hover effect
- [x] Style ResultsList component:
  - [x] Heading style
  - [x] Card grid/flex layout
  - [x] Spacing between cards

### Polish
- [x] Add smooth transitions (buttons, cards on hover)
- [x] Ensure consistent spacing throughout
- [x] Verify color scheme matches spec
- [x] Check font sizes are readable
- [x] Test contrast for accessibility

---

## 6. Interactivity & Testing

### Form Functionality
- [x] Test city input updates state
- [x] Test kid ages input updates state
- [x] Test date/time input updates state
- [x] Test distance slider updates state and displays value
- [x] Test optional preferences textarea updates state
- [x] Test Search button triggers handleSearch
- [x] Test Clear button resets all form fields
- [x] Verify form data is logged or visible

### Search & Results Display
- [x] Click Search button
- [x] Verify ResultsList appears with mock activities
- [x] Verify top 5 activities are displayed
- [x] Verify each ActivityCard shows all data correctly:
  - [x] Icon/emoji visible
  - [x] Name displayed
  - [x] Time displayed
  - [x] Description displayed
  - [x] Location and distance displayed
- [x] Test multiple searches (should update results)

### New Search Functionality
- [x] Click "New Search" button in Header
- [x] Verify results are cleared
- [x] Verify form remains filled (or optionally cleared)
- [x] Ready for new search

### Responsive Testing
- [x] Test on desktop (1200px+ width)
- [x] Test on tablet (768px - 1024px)
- [x] Test on mobile (< 768px)
- [x] Verify layout adapts correctly
- [x] Verify all elements are accessible and clickable

### Browser Testing
- [x] Test in Chrome
- [x] Test in Firefox
- [x] Test in Safari (if available)
- [x] Test in Edge
- [x] Verify consistent appearance and functionality

---

## 7. Code Quality & Documentation

### Code Review
- [x] Remove any console.logs (or keep for debugging)
- [x] Remove unused imports
- [x] Ensure consistent code formatting
- [x] Add comments to complex logic (if any)
- [x] Verify component props are used correctly
- [x] Check for any errors or warnings in console

### Component Documentation
- [x] Add brief comment at top of each component file
- [x] Document props for each component
- [x] Example:
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
- [x] Stage all changes: `git add .`
- [x] Review changes: `git status` and `git diff`
- [x] Commit with message: `git commit -m "Complete Milestone 1: UI setup with dummy data"`
- [x] Verify commit was successful

---

## 8. Final Deliverables Checklist

- [x] ✅ React app runs without errors
- [x] ✅ UI matches the screenshot design
- [x] ✅ All components created and functional:
  - [x] Header with New Search button
  - [x] SearchForm with all input fields
  - [x] ActivityCard displaying activity details
  - [x] ResultsList showing top 5 activities
- [x] ✅ Mock data created with 5-10 sample activities
- [x] ✅ Styling implemented:
  - [x] Color scheme matches spec
  - [x] Two-column layout (desktop)
  - [x] Responsive design (mobile)
  - [x] Professional appearance
- [x] ✅ Basic interactivity working:
  - [x] Form inputs update state
  - [x] Search button displays results
  - [x] Clear button resets form
  - [x] New Search clears results
- [x] ✅ Ready for Milestone 2 (API integration)

---

## Notes & Issues

_Use this section to track any issues, questions, or notes during implementation:_

-
-
-

---

**Milestone 1 Completion Date:** 2026-02-11
**Ready to proceed to Milestone 2:** [x] Yes

---

## Next Steps After Milestone 1

Once all tasks are complete:
1. Review the UI and ensure it matches the design spec
2. Test thoroughly on different screen sizes
3. Commit all changes to Git
4. Proceed to **Milestone 2: Claude API Integration**
5. Reference `prompt.md` for API integration details

---
---

# Milestone 2: Claude API Integration with Web Search - Task List

**Goal:** Replace dummy data with real activity recommendations from Claude API using the web search tool
**Estimated Duration:** 4-6 days
**Status:** Not Started

---

## 1. Backend Project Setup

### Initialize Node.js Backend
- [ ] Create `backend/` directory in project root
- [ ] Initialize Node.js project: `npm init -y`
- [ ] Install required dependencies:
  ```bash
  npm install express cors dotenv @anthropic-ai/sdk
  ```
- [ ] Create project structure:
  ```
  backend/
  ├── routes/
  │   └── activities.js
  ├── utils/
  │   └── claudeClient.js
  ├── server.js
  ├── .env
  ├── .env.example
  ├── .gitignore
  └── package.json
  ```
- [ ] Create `.gitignore` file to exclude:
  - [ ] `node_modules/`
  - [ ] `.env`
  - [ ] Any log files
- [ ] Update root `.gitignore` to include `backend/node_modules/` and `backend/.env`

### Environment Variables Setup
- [ ] Create `.env` file with:
  - [ ] `ANTHROPIC_API_KEY=your_api_key_here`
  - [ ] `PORT=3001`
- [ ] Create `.env.example` template file with:
  - [ ] `ANTHROPIC_API_KEY=`
  - [ ] `PORT=3001`
- [ ] Verify `.env` is in `.gitignore` (never commit API keys!)

### Express Server Setup
- [ ] Create `server.js` file
- [ ] Import required packages (express, cors, dotenv)
- [ ] Configure dotenv: `require('dotenv').config()`
- [ ] Initialize Express app
- [ ] Configure CORS middleware:
  ```javascript
  app.use(cors({
    origin: 'http://localhost:5173' // Vite dev server
  }));
  ```
- [ ] Add JSON body parser: `app.use(express.json())`
- [ ] Create health check endpoint: `GET /`
- [ ] Set up server to listen on port 3001
- [ ] Test server runs: `node server.js`
- [ ] Add start script to `package.json`: `"start": "node server.js"`
- [ ] Add dev script with nodemon (optional): `"dev": "nodemon server.js"`

---

## 2. Claude API Integration

### Install and Configure Anthropic SDK
- [ ] Verify `@anthropic-ai/sdk` is installed
- [ ] Create `utils/claudeClient.js` file
- [ ] Import Anthropic SDK: `const Anthropic = require('@anthropic-ai/sdk')`
- [ ] Create and export Claude client:
  ```javascript
  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });
  ```
- [ ] Add error handling for missing API key

### Implement Web Search Tool Configuration
- [ ] Define web search tool object:
  ```javascript
  const tools = [{
    type: "web_search_20241206",
    name: "web_search",
    max_results: 10
  }];
  ```
- [ ] Reference Claude tool use documentation: https://docs.anthropic.com/en/docs/build-with-claude/tool-use
- [ ] Understand tool use flow:
  - [ ] Send initial message with tools array
  - [ ] Handle tool_use response from Claude
  - [ ] Process multi-turn interactions if needed
  - [ ] Extract final text response

### Create Prompt Builder Function
- [ ] Create function `buildPrompt(formData)` in `utils/claudeClient.js`
- [ ] Reference `prompt.md` for prompt template
- [ ] Implement dynamic prompt construction using:
  - [ ] `formData.city`
  - [ ] `formData.kidAges`
  - [ ] `formData.availability`
  - [ ] `formData.maxDistance`
  - [ ] `formData.optionalPreferences`
- [ ] Include instructions for:
  - [ ] Using web_search tool
  - [ ] Finding real, current activities
  - [ ] Returning top 5 activities
  - [ ] Outputting valid JSON array format
- [ ] Test prompt with sample data

### Implement Claude API Call Function
- [ ] Create async function `getActivityRecommendations(formData)`
- [ ] Build prompt from formData
- [ ] Make API call to Claude:
  ```javascript
  const response = await client.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4096,
    tools: tools,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });
  ```
- [ ] Handle tool_use responses
- [ ] Extract final text content from response
- [ ] Parse JSON array from Claude's response
- [ ] Add error handling:
  - [ ] API errors
  - [ ] Invalid JSON responses
  - [ ] Missing or malformed data
- [ ] Return parsed activities array

---

## 3. API Endpoint Creation

### Create Activities Route
- [ ] Create `routes/activities.js` file
- [ ] Import Express Router
- [ ] Import `getActivityRecommendations` from utils
- [ ] Create POST route: `/api/search-activities`
- [ ] Extract formData from request body: `req.body`
- [ ] Validate required fields:
  - [ ] city
  - [ ] kidAges
  - [ ] availability
  - [ ] maxDistance
- [ ] Call `getActivityRecommendations(formData)`
- [ ] Return activities JSON response
- [ ] Add error handling and error responses:
  - [ ] 400 for missing required fields
  - [ ] 500 for server/API errors
  - [ ] Include error messages in response
- [ ] Export router

### Connect Route to Server
- [ ] Import activities router in `server.js`
- [ ] Mount router: `app.use('/', activitiesRouter)`
- [ ] Test endpoint with Postman or curl
- [ ] Verify request/response cycle works

### Test API Endpoint
- [ ] Start backend server: `npm start`
- [ ] Use Postman/Thunder Client to test POST request
- [ ] Send sample request body:
  ```json
  {
    "city": "San Francisco, CA",
    "kidAges": "5, 8",
    "availability": "Saturday afternoon",
    "maxDistance": 10,
    "optionalPreferences": "outdoor, free"
  }
  ```
- [ ] Verify 200 response with activities array
- [ ] Test error cases (missing fields, invalid data)
- [ ] Verify Claude API is being called correctly
- [ ] Check that web search is returning real activities

---

## 4. Frontend-Backend Integration

### Update Frontend to Call Backend API
- [ ] Open `frontend/src/App.jsx`
- [ ] Locate `handleSearch` function
- [ ] Add loading state: `const [loading, setLoading] = useState(false)`
- [ ] Add error state: `const [error, setError] = useState(null)`
- [ ] Replace mock data logic with API call:
  ```javascript
  const handleSearch = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/search-activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch activities');
      }

      const data = await response.json();
      setSearchResults(data);
      setHasSearched(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  ```
- [ ] Test API call in browser console

### Create Loading Component
- [ ] Create `frontend/src/components/LoadingSpinner.jsx`
- [ ] Add spinner/loading animation
- [ ] Style loading state:
  - [ ] Centered spinner
  - [ ] "Searching for activities..." message
  - [ ] Smooth animation
- [ ] Export component

### Update ResultsList for Loading/Error States
- [ ] Import LoadingSpinner component
- [ ] Accept `loading` and `error` props
- [ ] Show LoadingSpinner when `loading === true`
- [ ] Show error message when `error !== null`
- [ ] Show empty state when no activities and not loading
- [ ] Show activities when available

### Update App.jsx to Pass States
- [ ] Pass `loading` prop to ResultsList
- [ ] Pass `error` prop to ResultsList
- [ ] Update component structure to show loading/error states

### Add Error Styling
- [ ] Create error styles in `App.css`:
  - [ ] `.error-container` with red border/background
  - [ ] `.error-icon` for emoji/icon
  - [ ] `.error-message` for text
  - [ ] `.retry-button` for retry action

---

## 5. Testing & Refinement

### Test Various Search Scenarios
- [ ] Start both frontend and backend servers
- [ ] Frontend: `cd frontend && npm run dev`
- [ ] Backend: `cd backend && npm start`
- [ ] Test basic search:
  - [ ] City: "San Francisco, CA"
  - [ ] Kid Ages: "5, 8"
  - [ ] Date/Time: "Saturday afternoon"
  - [ ] Distance: 10 miles
  - [ ] Preferences: (empty)
- [ ] Test with different cities:
  - [ ] New York, NY
  - [ ] Austin, TX
  - [ ] Seattle, WA
- [ ] Test with different kid ages:
  - [ ] Single age: "7"
  - [ ] Multiple ages: "4, 6, 9"
  - [ ] Teenagers: "13, 15"
- [ ] Test with specific preferences:
  - [ ] "outdoor activities"
  - [ ] "free or low cost"
  - [ ] "educational, STEM-focused"
  - [ ] "indoor, rainy day activities"
- [ ] Test different distances: 5, 15, 25, 50 miles
- [ ] Test weekend vs. weekday searches

### Verify Web Search Results Quality
- [ ] Check that activities are real and current (not outdated)
- [ ] Verify activities match the specified location
- [ ] Confirm activities are age-appropriate for specified kid ages
- [ ] Check that preferences are being considered
- [ ] Ensure distance estimates are reasonable
- [ ] Verify JSON formatting is consistent

### Test Edge Cases
- [ ] Missing required fields (should show validation error)
- [ ] Very small distance (1 mile) - may return few/no results
- [ ] Very large distance (50 miles) - should return results
- [ ] Obscure city names - test error handling
- [ ] API key invalid/missing - verify error message
- [ ] Network timeout - test loading/error states
- [ ] Claude API rate limit - handle gracefully
- [ ] Malformed JSON response - error handling

### Test Loading States
- [ ] Verify spinner appears immediately on search
- [ ] Check that form is disabled during loading (optional)
- [ ] Confirm "Searching for activities..." message displays
- [ ] Test that loading state clears after response
- [ ] Verify multiple rapid searches don't cause issues

### Test Error Handling
- [ ] Stop backend server - verify frontend shows error
- [ ] Invalid API key - check error message
- [ ] Network error - verify user-friendly message
- [ ] Empty response - show "no activities found"
- [ ] Malformed response - handle gracefully

### Performance Testing
- [ ] Measure search response time (should be < 5 seconds)
- [ ] Test with slow network connection
- [ ] Verify app remains responsive during search
- [ ] Check for memory leaks (multiple searches)

---

## 6. Prompt Refinement

### Optimize Claude Prompt
- [ ] Review initial search results quality
- [ ] Identify areas for improvement:
  - [ ] Activity relevance
  - [ ] Date accuracy
  - [ ] Distance calculations
  - [ ] Age-appropriateness
  - [ ] Variety in activity types
- [ ] Adjust prompt wording for better results
- [ ] Test modified prompts
- [ ] Document prompt changes

### Handle JSON Parsing Edge Cases
- [ ] Check if Claude includes markdown code fences (```json)
- [ ] Add code to strip markdown formatting:
  ```javascript
  let jsonText = response.content[0].text;
  jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
  const activities = JSON.parse(jsonText);
  ```
- [ ] Validate JSON structure before parsing
- [ ] Handle partial or incomplete responses

### Ensure Consistent Data Format
- [ ] Verify all activities have required fields:
  - [ ] id (generate if missing)
  - [ ] name
  - [ ] time
  - [ ] description
  - [ ] location
  - [ ] distance
  - [ ] icon
- [ ] Standardize distance format ("X.X miles")
- [ ] Ensure icon is always a single emoji
- [ ] Validate descriptions are 2-3 sentences

---

## 7. Code Quality & Documentation

### Code Review
- [ ] Review all backend code for:
  - [ ] Proper error handling
  - [ ] Consistent code style
  - [ ] No console.logs in production
  - [ ] Commented complex logic
- [ ] Review frontend changes for:
  - [ ] Proper state management
  - [ ] Error handling
  - [ ] Loading states
  - [ ] No unused imports

### Add Comments and Documentation
- [ ] Add JSDoc comments to:
  - [ ] `buildPrompt()` function
  - [ ] `getActivityRecommendations()` function
  - [ ] API endpoint handler
- [ ] Document environment variables needed
- [ ] Add inline comments for complex logic

### Create README for Backend
- [ ] Create `backend/README.md` with:
  - [ ] Setup instructions
  - [ ] Environment variables needed
  - [ ] How to run the server
  - [ ] API endpoint documentation
  - [ ] Example request/response

### Update Root README
- [ ] Update main `README.md` with:
  - [ ] Milestone 2 completion
  - [ ] Backend setup instructions
  - [ ] How to run both frontend and backend
  - [ ] Environment setup guide
  - [ ] Screenshots (optional)

---

## 8. Git Commit & Push

### Prepare for Commit
- [ ] Run both servers and verify everything works
- [ ] Check for any console errors
- [ ] Remove any debugging code
- [ ] Ensure `.env` is NOT being committed

### Git Workflow
- [ ] Run `git status` to see changes
- [ ] Review changes: `git diff`
- [ ] Stage backend files: `git add backend/`
- [ ] Stage frontend changes: `git add frontend/src/App.jsx frontend/src/components/`
- [ ] Verify `.env` is excluded: `git status` (should not show .env)
- [ ] Commit with descriptive message:
  ```bash
  git commit -m "Complete Milestone 2: Claude API integration with web search

  - Set up Express backend server with CORS
  - Implement Claude API integration with web search tool
  - Create activity search endpoint
  - Connect frontend to backend API
  - Add loading and error states
  - Test with multiple search scenarios
  - Ready for Milestone 3

  Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
  ```
- [ ] Push to GitHub: `git push origin master`
- [ ] Verify push was successful

---

## 9. Final Deliverables Checklist

- [ ] ✅ Express backend server running on port 3001
- [ ] ✅ Claude API integrated with web search tool
- [ ] ✅ POST `/api/search-activities` endpoint working
- [ ] ✅ Frontend successfully calls backend API
- [ ] ✅ Real-time activity data displayed in UI
- [ ] ✅ Loading states show during API calls
- [ ] ✅ Error handling for network/API failures
- [ ] ✅ Tested with multiple cities and preferences
- [ ] ✅ Activities are real, current, and relevant
- [ ] ✅ JSON parsing handles edge cases
- [ ] ✅ Code is clean and documented
- [ ] ✅ Changes committed and pushed to GitHub
- [ ] ✅ Ready for Milestone 3 (Polish & Deployment)

---

## Notes & Issues

_Use this section to track any issues, questions, or notes during implementation:_

-
-
-

---

**Milestone 2 Completion Date:** __________
**Ready to proceed to Milestone 3:** [ ] Yes [ ] No

---

## Next Steps After Milestone 2

Once all tasks are complete:
1. Test the entire application flow end-to-end
2. Verify real activity data is accurate and relevant
3. Document any API issues or limitations
4. Commit all changes to Git
5. Proceed to **Milestone 3: Polish & Deployment**
6. Consider adding features like activity images, favorites, etc.
