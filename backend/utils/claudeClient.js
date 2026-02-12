/**
 * Claude API Client Utility
 * Handles communication with Anthropic's Claude API for activity recommendations
 */

const Anthropic = require('@anthropic-ai/sdk');

// Initialize Claude client
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// Web search tool configuration
const tools = [{
  type: "web_search_20250305",
  name: "web_search"
}];

/**
 * Build dynamic prompt from user form data
 * @param {Object} formData - User search criteria
 * @returns {string} Formatted prompt for Claude
 */
function buildPrompt(formData) {
  const { city, kidAges, availability, maxDistance, optionalPreferences } = formData;

  return `You are a family activity recommendation assistant. A family is looking for activities in their area with the following criteria:

**Location:** ${city}
**Children's Ages:** ${kidAges}
**Date & Time:** ${availability}
**Maximum Distance:** ${maxDistance} miles from ${city}
**Additional Preferences:** ${optionalPreferences || 'None specified'}

Using the web_search tool, find real, current, timely local activities and events that match these criteria. Focus on family-friendly activities that are appropriate for the children's ages provided.

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
}

/**
 * Get activity recommendations from Claude API using web search
 * @param {Object} formData - User search criteria
 * @returns {Promise<Array>} Array of activity objects
 */
async function getActivityRecommendations(formData) {
  try {
    // Validate API key
    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_api_key_here') {
      throw new Error('Anthropic API key not configured. Please add ANTHROPIC_API_KEY to .env file');
    }

    // Build prompt
    const prompt = buildPrompt(formData);
    console.log('🔍 Searching for activities with Claude API...');

    // Call Claude API with web search tool
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      tools: tools,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    console.log('✅ Received response from Claude API');

    // Extract text content from response
    let textContent = '';
    for (const block of response.content) {
      if (block.type === 'text') {
        textContent += block.text;
      }
    }

    if (!textContent) {
      throw new Error('No text content in Claude response');
    }

    // Parse JSON from response
    // Remove markdown code fences if present
    let jsonText = textContent.trim();
    jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');

    // Extract JSON array from text (in case Claude adds explanatory text)
    // Look for the first '[' and last ']' to extract just the JSON array
    const startIndex = jsonText.indexOf('[');
    const endIndex = jsonText.lastIndexOf(']');

    if (startIndex === -1 || endIndex === -1) {
      console.error('Could not find JSON array in response:', jsonText.substring(0, 200));
      throw new Error('No JSON array found in Claude response');
    }

    jsonText = jsonText.substring(startIndex, endIndex + 1);

    // Parse JSON
    const activities = JSON.parse(jsonText);

    // Validate response structure
    if (!Array.isArray(activities)) {
      throw new Error('Response is not an array');
    }

    // Add IDs if not present
    const activitiesWithIds = activities.map((activity, index) => ({
      id: activity.id || index + 1,
      ...activity
    }));

    console.log(`✅ Successfully parsed ${activitiesWithIds.length} activities`);
    return activitiesWithIds;

  } catch (error) {
    console.error('❌ Error getting activity recommendations:', error.message);
    throw error;
  }
}

module.exports = {
  getActivityRecommendations,
  buildPrompt
};
