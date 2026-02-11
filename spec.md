# Family Activity Finder - Project Specification

## Project Overview

The Family Activity Finder is a web application designed to help families discover local activities that match their preferences and availability. Users input their location, children's ages, desired date/time, maximum travel distance, and optional preferences to receive personalized activity recommendations powered by Claude AI with real-time web search.

**Purpose:** Simplify the process of finding family-friendly activities by providing curated, relevant recommendations based on specific family needs and constraints.

---

## Requirements

### Functional Requirements

1. **User Input Form**
   - City/location text input
   - Kid ages input (number or range)
   - Date & time selection
   - Maximum distance slider (1-50 miles)
   - Optional preferences text area
   - Form validation for required fields

2. **Activity Search**
   - Submit search with user preferences
   - Query Claude API with web search tool for real-time local activities
   - Process and format search results

3. **Display Results**
   - Show top 5 activity recommendations ranked by relevance
   - Display activity details:
     - Activity name
     - Time/schedule
     - Description
     - Location/address
     - Distance from user
     - Icon or image representation

4. **User Actions**
   - Clear form to reset all inputs
   - Initiate new search from results page
   - View activity details in card format

### Non-Functional Requirements

1. **Performance**
   - Search results delivered in < 5 seconds
   - Responsive UI with smooth interactions
   - Efficient API calls to minimize latency

2. **Usability**
   - Intuitive, user-friendly interface
   - Clear visual hierarchy
   - Helpful error messages and validation
   - Accessibility compliance (WCAG 2.1 AA)

3. **Reliability**
   - Graceful error handling for API failures
   - Proper handling of no-results scenarios
   - Stable performance across browsers

4. **Responsiveness**
   - Mobile-first design approach
   - Adaptive layout for tablets and desktops
   - Touch-friendly controls

---

## Tech Stack

### Frontend
- **Framework:** React.js (v18+)
  - Component-based architecture
  - Hooks for state management
  - React Router (if multi-page needed)
- **Styling:** CSS3 / Styled Components / CSS Modules
- **Build Tool:** Create React App or Vite
- **HTTP Client:** Fetch API or Axios

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **AI Integration:** Claude API (Anthropic)
  - API Endpoint: https://api.anthropic.com/v1/messages
  - Model: claude-sonnet-4-5 (recommended)
  - Tool: Web Search for real-time activity data
- **Environment Management:** dotenv

### Development Tools
- **Version Control:** Git & GitHub
- **Package Manager:** npm or yarn
- **Code Editor:** VS Code (recommended)
- **API Testing:** Postman or Thunder Client

### Deployment (Future)
- **Frontend:** Vercel, Netlify, or GitHub Pages
- **Backend:** Railway, Render, or Heroku
- **Environment Variables:** Secure management via platform settings

---

## Design Guidelines

### Color Scheme
- **Primary Blue:** #4F7BF5 (buttons, accents, links)
- **Background:** #F5F5F5 (light gray) or #FFFFFF (white)
- **Text Primary:** #333333 (dark gray/black)
- **Text Secondary:** #666666 (medium gray)
- **Card Background:** #FFFFFF with subtle shadow
- **Borders:** #E0E0E0 (light gray)
- **Error/Alert:** #DC3545 (red)
- **Success:** #28A745 (green)

### Typography
- **Font Family:** Sans-serif (Inter, Roboto, or system fonts)
- **Heading Sizes:**
  - H1: 32px (page title)
  - H2: 24px (section headers)
  - H3: 20px (card titles)
- **Body Text:** 16px (readable, comfortable)
- **Labels:** 14px (form labels, metadata)
- **Line Height:** 1.5-1.6 for readability

### Layout
- **Desktop (>768px):** Two-column layout
  - Left: Search form (40% width)
  - Right: Results display (60% width)
- **Mobile (<768px):** Single column, stacked
  - Form at top
  - Results below
- **Spacing:** Consistent 16px/24px grid system
- **Max Content Width:** 1200px (centered)

### Components

#### Input Fields
- Clear labels above inputs
- Placeholder text for guidance
- Border on focus (#4F7BF5)
- Error states with red border and message

#### Buttons
- **Primary Button (Search):**
  - Background: #4F7BF5
  - Text: White, bold
  - Padding: 12px 24px
  - Border radius: 6px
  - Hover: Darker blue (#3D5FCC)
- **Secondary Button (Clear):**
  - Background: Transparent or light gray
  - Text: #666666
  - Border: 1px solid #CCCCCC
  - Hover: Light gray background

#### Distance Slider
- Range: 1-50 miles
- Blue track color
- Display current value below slider
- Smooth dragging interaction

#### Activity Cards
- White background
- Box shadow: 0 2px 8px rgba(0,0,0,0.1)
- Border radius: 8px
- Padding: 20px
- Icon/emoji at top left
- Content hierarchy:
  - Activity name (bold, larger)
  - Time (smaller, gray)
  - Description (2-3 lines)
  - Location + distance (italic, gray)

#### Loading State
- Spinner or skeleton screens during search
- "Searching for activities..." message

#### Empty State
- Friendly message when no results found
- Suggestions to adjust search criteria

---

## Milestones

### Milestone 1: UI Setup with Dummy Data
**Status:** Not Started
**Estimated Duration:** 3-5 days
**Goal:** Create a fully functional frontend interface with static/dummy data

#### Tasks

1. **Initialize React Application**
   - [ ] Set up project with Create React App or Vite
   - [ ] Configure project structure:
     ```
     frontend/
     ├── public/
     ├── src/
     │   ├── components/
     │   │   ├── Header.js
     │   │   ├── SearchForm.js
     │   │   ├── ActivityCard.js
     │   │   └── ResultsList.js
     │   ├── mockData.js
     │   ├── App.js
     │   ├── App.css
     │   └── index.js
     └── package.json
     ```
   - [ ] Install dependencies (if needed)

2. **Create UI Components**

   **Header Component:**
   - [ ] Logo/title: "Family Activity Finder"
   - [ ] "New Search" button (clears results, resets form)

   **SearchForm Component:**
   - [ ] City input (text field)
   - [ ] Kid Ages input (number or text)
   - [ ] Date & Time input (text or datetime-local)
   - [ ] Maximum Distance slider (1-50 miles, display value)
   - [ ] Optional Preferences textarea
   - [ ] Search button (blue, primary)
   - [ ] Clear button (gray, secondary)
   - [ ] Form state management with useState

   **ActivityCard Component:**
   - [ ] Props: name, time, description, location, distance, icon
   - [ ] Display icon/emoji at top
   - [ ] Format activity details
   - [ ] Responsive card styling

   **ResultsList Component:**
   - [ ] Display grid/list of ActivityCard components
   - [ ] Show top 5 activities
   - [ ] Handle empty state

3. **Create Dummy Data**
   - [ ] Create `mockData.js` with 5-10 sample activities
   - [ ] Include example activities:
     - Muni Heritage Weekend (🚋 emoji)
     - Greek Food Festival (🍴 emoji)
     - Sunday Funnies Exhibit (😄 emoji)
     - Lindy in the Park Dance Party (💃 emoji)
     - Additional family activities
   - [ ] Each activity object structure:
     ```javascript
     {
       id: 1,
       name: "Activity Name",
       time: "Saturday, 10:00 AM - 5:00 PM",
       description: "Brief description...",
       location: "Address or venue name",
       distance: "2.5 miles",
       icon: "🎨" // emoji or image URL
     }
     ```

4. **Implement Styling**
   - [ ] Create App.css or component-level styles
   - [ ] Implement two-column layout (desktop)
   - [ ] Responsive breakpoints for mobile
   - [ ] Match color scheme from design guidelines
   - [ ] Style form inputs and buttons
   - [ ] Style activity cards with shadows
   - [ ] Add hover effects

5. **Basic Interactivity**
   - [ ] Form inputs update component state
   - [ ] Search button displays dummy data in ResultsList
   - [ ] Clear button resets form inputs
   - [ ] Distance slider shows current value
   - [ ] "New Search" clears results

#### Deliverables
- ✅ Fully functional UI matching the screenshot design
- ✅ All components created and styled
- ✅ Responsive layout (desktop and mobile)
- ✅ Form interactivity with dummy data
- ✅ Professional appearance ready for API integration

---

### Milestone 2: Claude API Integration with Web Search
**Status:** Not Started
**Estimated Duration:** 4-6 days
**Goal:** Replace dummy data with real activity recommendations from Claude API using the web search tool

#### Tasks

1. **Set Up Express Backend**
   - [ ] Initialize Node.js project in `backend/` directory
   - [ ] Install dependencies:
     ```bash
     npm install express cors dotenv @anthropic-ai/sdk
     ```
   - [ ] Create `server.js` with Express setup
   - [ ] Configure CORS to allow frontend requests
   - [ ] Set up environment variables:
     - `.env` file with `ANTHROPIC_API_KEY`
     - `.env.example` template for version control
   - [ ] Create API endpoint: `POST /api/search-activities`
   - [ ] Test server with basic response

2. **Implement Claude API Integration**
   - [ ] Install and configure `@anthropic-ai/sdk`
   - [ ] Create Claude client with API key
   - [ ] Implement Web Search tool:
     ```javascript
     const tools = [{
       type: "web_search_20241206",
       name: "web_search",
       max_results: 10
     }];
     ```
   - [ ] Reference documentation: https://docs.anthropic.com/en/docs/build-with-claude/tool-use
   - [ ] Handle tool use responses and multi-turn interactions
   - [ ] Extract final text response from Claude

3. **Create Search Prompt Engineering**
   - [ ] Build dynamic prompt from user inputs:
     - City/location
     - Kid ages
     - Date & time
     - Maximum distance
     - Optional preferences
   - [ ] Prompt structure:
     ```
     You are a family activity recommendation assistant. A family is looking for activities with the following criteria:

     - Location: {city}
     - Children ages: {kidAges}
     - Date/Time: {dateTime}
     - Maximum distance: {maxDistance} miles
     - Additional preferences: {optionalPreferences}

     Using the web_search tool, find real, current local activities that match these criteria. Return the top 5 most relevant family-friendly activities.

     For each activity, provide:
     1. Activity name
     2. Date and time
     3. Brief description (2-3 sentences)
     4. Location/address
     5. Approximate distance from {city} in miles
     6. A relevant emoji icon

     Format the response as a JSON array with this structure:
     [
       {
         "name": "...",
         "time": "...",
         "description": "...",
         "location": "...",
         "distance": "...",
         "icon": "..."
       }
     ]
     ```
   - [ ] Test prompt with various inputs
   - [ ] Refine prompt for better results

4. **Connect Frontend to Backend**
   - [ ] Update React app to call backend API
   - [ ] Replace dummy data fetch with real API call:
     ```javascript
     const response = await fetch('http://localhost:3001/api/search-activities', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     ```
   - [ ] Add loading state (spinner, "Searching..." message)
   - [ ] Update ResultsList to display API results
   - [ ] Handle errors gracefully:
     - Network errors
     - API errors
     - No results found
     - Invalid responses
   - [ ] Display error messages to user

5. **Testing**
   - [ ] Test various search queries:
     - Different cities
     - Various kid ages
     - Weekend vs. weekday searches
     - Different distances
     - With and without optional preferences
   - [ ] Verify web search returns relevant, current activities
   - [ ] Check data formatting consistency
   - [ ] Test edge cases (no results, API timeout)
   - [ ] Verify error handling displays properly
   - [ ] Test loading states

#### Deliverables
- ✅ Working Express backend server
- ✅ Claude API integration with web search tool
- ✅ Frontend connected to real API
- ✅ Real-time activity data displayed in UI
- ✅ Error handling and loading states
- ✅ Tested with multiple search scenarios

---

### Milestone 3: Polish & Deployment
**Status:** Not Started
**Estimated Duration:** 3-5 days
**Goal:** Refine the application, add enhancements, and prepare for deployment

#### Tasks

1. **Enhanced Features**
   - [ ] "New Search" button functionality in header
   - [ ] Sorting options (by relevance, distance, time)
   - [ ] Filter options (activity type, indoor/outdoor)
   - [ ] Activity detail expansion (click to see more info)
   - [ ] Add activity images (from web search results if available)
   - [ ] Save/bookmark favorite activities (localStorage)
   - [ ] Share search results (copy link, social media)

2. **UX Improvements**
   - [ ] Add helpful placeholder text:
     - "e.g., San Francisco, CA"
     - "e.g., 5, 8"
     - "e.g., Saturday afternoon"
   - [ ] Input validation with error messages:
     - Required fields highlighted
     - Format validation (city, dates)
   - [ ] Better empty state:
     - Friendly message: "No activities found"
     - Suggestions: "Try adjusting your search criteria"
   - [ ] Loading animations and transitions
   - [ ] Accessibility improvements:
     - ARIA labels on all inputs
     - Keyboard navigation support
     - Screen reader compatibility
     - Focus indicators
   - [ ] Tooltips for optional preferences
   - [ ] Success messages after search

3. **Performance Optimization**
   - [ ] Cache recent searches (optional, in-memory or Redis)
   - [ ] Debounce search input if auto-search implemented
   - [ ] Optimize API calls (avoid duplicate requests)
   - [ ] Lazy load images in activity cards
   - [ ] Minimize bundle size
   - [ ] Code splitting (if application grows)

4. **Documentation**
   - [ ] **README.md** with:
     - Project description
     - Features list
     - Tech stack
     - Setup instructions (frontend & backend)
     - Environment variables configuration
     - How to run locally
     - Screenshots
     - Future enhancements
   - [ ] **API Documentation:**
     - Endpoint details (POST /api/search-activities)
     - Request/response formats
     - Error codes
   - [ ] **Component Documentation:**
     - JSDoc comments for components
     - Props documentation
     - Usage examples
   - [ ] **CONTRIBUTING.md** (if open source)
   - [ ] **LICENSE** file

5. **Deployment Preparation**
   - [ ] Environment configuration for production
     - Production API URLs
     - Secure API key management
   - [ ] Build optimization:
     - Run `npm run build` for React app
     - Minify and bundle assets
     - Test production build locally
   - [ ] Deployment guides:
     - **Frontend (Vercel/Netlify):**
       - Connect GitHub repo
       - Configure build settings
       - Set environment variables
     - **Backend (Railway/Render):**
       - Deploy Express server
       - Set ANTHROPIC_API_KEY
       - Configure CORS for production domain
   - [ ] Domain configuration (optional)
   - [ ] HTTPS setup
   - [ ] Monitoring and error tracking (Sentry, LogRocket)

#### Deliverables
- ✅ Polished, production-ready application
- ✅ Enhanced features and UX improvements
- ✅ Complete documentation (README, API docs)
- ✅ Deployed application (frontend + backend)
- ✅ Deployment instructions and guides

---

## Critical Files to Create

### Root Directory
- `spec.md` - This project specification document ✅
- `README.md` - Project overview and setup instructions
- `.gitignore` - Exclude node_modules, .env, build files

### Frontend Directory (`frontend/`)
```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── SearchForm.js
│   │   ├── ActivityCard.js
│   │   ├── ResultsList.js
│   │   └── LoadingSpinner.js
│   ├── mockData.js (for Milestone 1)
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── .gitignore
```

### Backend Directory (`backend/`)
```
backend/
├── routes/
│   └── activities.js (search endpoint)
├── utils/
│   └── claudeClient.js (API integration)
├── server.js
├── .env (not committed to Git)
├── .env.example
├── package.json
└── .gitignore
```

---

## Verification Checklist

### Milestone 1 Verification
- [ ] React app runs without errors (`npm start`)
- [ ] UI matches the provided screenshot design
- [ ] All form inputs are functional
- [ ] Search button displays dummy data
- [ ] Clear button resets form
- [ ] Responsive design works on mobile and desktop
- [ ] Activity cards display correctly with all details
- [ ] Navigation and buttons work as expected

### Milestone 2 Verification
- [ ] Backend server runs without errors
- [ ] Claude API key is configured correctly
- [ ] Frontend successfully calls backend API
- [ ] Search queries return real activity data
- [ ] Web search tool provides relevant results
- [ ] Activity results are properly formatted
- [ ] Error handling works (API failures, no results)
- [ ] Loading states display during search
- [ ] Multiple searches work correctly
- [ ] Different search criteria return varied results

### Milestone 3 Verification
- [ ] All enhanced features work as expected
- [ ] UX improvements are noticeable
- [ ] Accessibility features are implemented
- [ ] Documentation is complete and accurate
- [ ] Production build is successful
- [ ] Application is deployed and accessible
- [ ] Performance is acceptable (< 5 second searches)
- [ ] Application is stable across browsers

---

## Next Steps

1. **Review and Approve Spec** ✅
   - Ensure all requirements are clear
   - Confirm tech stack choices
   - Validate milestone breakdown

2. **Begin Milestone 1: UI Setup**
   - Initialize React application
   - Create component structure
   - Implement dummy data and basic interactivity
   - Match design from screenshot

3. **Proceed to Milestone 2: API Integration**
   - Set up backend server
   - Integrate Claude API with web search
   - Connect frontend to backend

4. **Complete Milestone 3: Polish & Deploy**
   - Add enhancements and polish
   - Write documentation
   - Deploy to production

---

## Resources

- **Claude API Documentation:** https://docs.anthropic.com/
- **Web Search Tool Guide:** https://docs.anthropic.com/en/docs/build-with-claude/tool-use
- **React Documentation:** https://react.dev/
- **Express.js Guide:** https://expressjs.com/
- **Deployment Platforms:**
  - Vercel: https://vercel.com/
  - Railway: https://railway.app/
  - Render: https://render.com/

---

**Document Version:** 1.0
**Last Updated:** 2026-02-11
**Status:** Ready for Implementation
