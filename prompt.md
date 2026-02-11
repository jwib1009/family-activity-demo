# Claude API Prompt Template

## Purpose
This prompt template is used in Milestone 2 to call the Claude API with the web search tool enabled. It takes user input from the search form and generates personalized family activity recommendations.

---

## Prompt Template

```
You are a family activity recommendation assistant. A family is looking for activities in their area with the following criteria:

**Location:** {city}
**Children's Ages:** {kidAges}
**Date & Time:** {availability}
**Maximum Distance:** {maxDistance} miles from {city}
**Additional Preferences:** {optionalPreferences}

Using the web_search tool, find real, current, timely local activities and events that match these criteria. Focus on family-friendly activities that are appropriate for the children's ages provided.

Please return the **top 5 most relevant activities** ranked by how well they match the family's needs.

For each activity, provide the following information:

1. **Name** - The activity or event name
2. **Time** - Date and time (e.g., "Saturday, February 15, 10:00 AM - 2:00 PM")
3. **Description** - A brief, engaging description (2-3 sentences) highlighting what makes it great for families
4. **Location** - Venue name and/or address
5. **Distance** - Approximate distance from {city} in miles (e.g., "2.5 miles")
6. **Icon** - A relevant emoji that represents the activity type (e.g., 🎨 for art, 🎭 for theater, ⚽ for sports, 🍴 for food events)

**Important Guidelines:**
- Only include activities that are actually happening (check dates carefully)
- Prioritize activities within the specified distance range
- Consider the children's ages when selecting appropriate activities
- If additional preferences are provided, weight those heavily in your recommendations
- Ensure variety in the types of activities recommended
- Include both indoor and outdoor options when available

**Output Format:**
Return your response as a JSON array with exactly 5 activities in this structure:

```json
[
  {
    "name": "Activity Name",
    "time": "Day, Date, Time Range",
    "description": "Engaging description of the activity and why it's great for families with kids of the specified ages.",
    "location": "Venue Name, Address",
    "distance": "X.X miles",
    "icon": "🎨"
  },
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

Ensure the JSON is valid and can be parsed directly. Do not include any text before or after the JSON array.
```

---

## Input Parameters

### 1. `{city}` - Location
- **Type:** String
- **Example:** "San Francisco, CA"
- **Description:** The city/location where the family wants to find activities
- **Required:** Yes

### 2. `{kidAges}` - Children's Ages
- **Type:** String or Number
- **Example:** "5, 8" or "ages 5-10"
- **Description:** Ages of children who will participate in activities
- **Required:** Yes
- **Usage:** Helps filter age-appropriate activities

### 3. `{availability}` - Date & Time
- **Type:** String
- **Example:** "Saturday afternoon" or "February 15, 2026, 2:00 PM"
- **Description:** When the family is available for activities
- **Required:** Yes
- **Usage:** Ensures activities are happening at the requested time

### 4. `{maxDistance}` - Maximum Distance
- **Type:** Number (miles)
- **Example:** 10
- **Description:** Maximum distance the family is willing to travel from their location
- **Required:** Yes
- **Range:** 1-50 miles (based on UI slider)

### 5. `{optionalPreferences}` - Additional Preferences
- **Type:** String (can be empty)
- **Example:** "outdoor activities, free or low cost, educational"
- **Description:** Any additional preferences or requirements from the family
- **Required:** No
- **Usage:** Fine-tunes recommendations based on specific interests

---

## Example API Call

### Input Data:
```javascript
{
  city: "San Francisco, CA",
  kidAges: "5, 8",
  availability: "Saturday, February 15, afternoon",
  maxDistance: 10,
  optionalPreferences: "outdoor activities, prefer free events"
}
```

### Formatted Prompt:
```
You are a family activity recommendation assistant. A family is looking for activities in their area with the following criteria:

**Location:** San Francisco, CA
**Children's Ages:** 5, 8
**Date & Time:** Saturday, February 15, afternoon
**Maximum Distance:** 10 miles from San Francisco, CA
**Additional Preferences:** outdoor activities, prefer free events

Using the web_search tool, find real, current local activities and events that match these criteria. Focus on family-friendly activities that are appropriate for the children's ages provided.

Please return the **top 5 most relevant activities** ranked by how well they match the family's needs.

[... rest of prompt ...]
```

### Expected Response:
```json
[
  {
    "name": "Golden Gate Park Playground Exploration",
    "time": "Saturday, February 15, 1:00 PM - 4:00 PM",
    "description": "Free outdoor playground adventure perfect for ages 5-8. Features multiple play structures, sand areas, and open spaces for running. Great for an afternoon of active play.",
    "location": "Golden Gate Park, 501 Stanyan St, San Francisco, CA",
    "distance": "2.3 miles",
    "icon": "🎡"
  },
  {
    "name": "Coastal Trail Family Hike",
    "time": "Saturday, February 15, 2:00 PM - 5:00 PM",
    "description": "Easy, family-friendly hiking trail along the coast with stunning ocean views. Perfect for elementary-aged children with plenty of rest spots and scenic lookouts.",
    "location": "Lands End Trailhead, San Francisco, CA",
    "distance": "4.1 miles",
    "icon": "🥾"
  },
  {
    "name": "SF Botanical Garden Free Day",
    "time": "Saturday, February 15, 10:00 AM - 5:00 PM",
    "description": "Explore 55 acres of gardens featuring plants from around the world. Free admission on select days. Educational and beautiful outdoor experience for curious kids.",
    "location": "1199 9th Ave, San Francisco, CA",
    "distance": "3.5 miles",
    "icon": "🌺"
  },
  {
    "name": "Crissy Field Beach & Park",
    "time": "Saturday, February 15, All Day",
    "description": "Spacious beach and park area with stunning Golden Gate Bridge views. Kids can fly kites, play in the sand, and explore tide pools. Completely free and outdoor.",
    "location": "1199 East Beach, San Francisco, CA",
    "distance": "3.8 miles",
    "icon": "🏖️"
  },
  {
    "name": "Children's Discovery Museum Free Saturday",
    "time": "Saturday, February 15, 10:00 AM - 3:00 PM",
    "description": "Interactive, hands-on museum with outdoor play areas. Free admission first Saturday of the month. Features science exhibits, art stations, and outdoor garden.",
    "location": "180 Woz Way, San Jose, CA",
    "distance": "9.2 miles",
    "icon": "🔬"
  }
]
```

---

## Implementation Notes

### Backend Integration (Milestone 2)

In your Express backend (`backend/routes/activities.js`), you'll construct the prompt like this:

```javascript
const buildPrompt = (formData) => {
  const { city, kidAges, availability, maxDistance, optionalPreferences } = formData;

  return `You are a family activity recommendation assistant. A family is looking for activities in their area with the following criteria:

**Location:** ${city}
**Children's Ages:** ${kidAges}
**Date & Time:** ${availability}
**Maximum Distance:** ${maxDistance} miles from ${city}
**Additional Preferences:** ${optionalPreferences || 'None specified'}

Using the web_search tool, find real, current local activities and events that match these criteria. Focus on family-friendly activities that are appropriate for the children's ages provided.

Please return the **top 5 most relevant activities** ranked by how well they match the family's needs.

For each activity, provide the following information:

1. **Name** - The activity or event name
2. **Time** - Date and time (e.g., "Saturday, February 15, 10:00 AM - 2:00 PM")
3. **Description** - A brief, engaging description (2-3 sentences) highlighting what makes it great for families
4. **Location** - Venue name and/or address
5. **Distance** - Approximate distance from ${city} in miles (e.g., "2.5 miles")
6. **Icon** - A relevant emoji that represents the activity type (e.g., 🎨 for art, 🎭 for theater, ⚽ for sports, 🍴 for food events)

**Important Guidelines:**
- Only include activities that are actually happening (check dates carefully)
- Prioritize activities within the specified distance range
- Consider the children's ages when selecting appropriate activities
- If additional preferences are provided, weight those heavily in your recommendations
- Ensure variety in the types of activities recommended
- Include both indoor and outdoor options when available

**Output Format:**
Return your response as a JSON array with exactly 5 activities in this structure:

\`\`\`json
[
  {
    "name": "Activity Name",
    "time": "Day, Date, Time Range",
    "description": "Engaging description of the activity and why it's great for families with kids of the specified ages.",
    "location": "Venue Name, Address",
    "distance": "X.X miles",
    "icon": "🎨"
  }
]
\`\`\`

Ensure the JSON is valid and can be parsed directly. Do not include any text before or after the JSON array.`;
};
```

### Claude API Call

```javascript
const Anthropic = require('@anthropic-ai/sdk');
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

async function getActivityRecommendations(formData) {
  const prompt = buildPrompt(formData);

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4096,
    tools: [
      {
        type: "web_search_20241206",
        name: "web_search"
      }
    ],
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  });

  // Handle tool use and extract final response
  // Parse JSON array from response
  // Return activities
}
```

---

## Prompt Optimization Tips

### For Better Results:
1. **Be Specific with Dates**: Instead of "this weekend", use actual dates
2. **Include Context**: Mention if it's a special occasion (birthday, holiday)
3. **Specify Constraints**: Budget, accessibility needs, indoor/outdoor preference
4. **Age Appropriateness**: Explicitly state if activities need to be suitable for multiple age groups

### Handling Edge Cases:
- **No Activities Found**: Prompt can suggest relaxing constraints (distance, time)
- **Vague Input**: Ask for clarification or make reasonable assumptions
- **Invalid Dates**: Return activities that are generally available or upcoming

### JSON Parsing:
- Claude should return clean JSON
- If Claude includes markdown code fences (```json), strip them before parsing
- Validate JSON structure before sending to frontend
- Have fallback error handling for malformed responses

---

## Testing the Prompt

### Test Cases:

1. **Basic Search:**
   - City: "Austin, TX"
   - Kid Ages: "7"
   - Availability: "Saturday morning"
   - Max Distance: 15
   - Preferences: ""

2. **Specific Preferences:**
   - City: "Seattle, WA"
   - Kid Ages: "4, 6, 9"
   - Availability: "Sunday afternoon"
   - Max Distance: 10
   - Preferences: "indoor activities, educational, STEM-focused"

3. **Free Activities:**
   - City: "Denver, CO"
   - Kid Ages: "5, 5" (twins)
   - Availability: "weekday after school"
   - Max Distance: 5
   - Preferences: "free or low-cost, outdoor, active"

4. **Special Event:**
   - City: "Chicago, IL"
   - Kid Ages: "10"
   - Availability: "Saturday, March 1, 2026"
   - Max Distance: 20
   - Preferences: "birthday party activity ideas, unique experiences"

---

## Version History

- **v1.0** (2026-02-11): Initial prompt template created
- Includes all required input fields
- JSON output format defined
- Example usage provided

---

**Note:** This prompt will be refined during Milestone 2 testing based on the quality of results returned by the Claude API.
