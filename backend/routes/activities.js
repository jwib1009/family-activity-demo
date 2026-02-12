/**
 * Activities Route
 * API endpoint for searching family activities using Claude AI
 */

const express = require('express');
const router = express.Router();
const { getActivityRecommendations } = require('../utils/claudeClient');

/**
 * POST /api/search-activities
 * Search for family activities based on user criteria
 *
 * Request body:
 * {
 *   city: string (required)
 *   kidAges: string (required)
 *   availability: string (required)
 *   maxDistance: number (required)
 *   optionalPreferences: string (optional)
 * }
 *
 * Response:
 * Array of activity objects
 */
router.post('/search-activities', async (req, res) => {
  try {
    const { city, kidAges, availability, maxDistance, optionalPreferences } = req.body;

    // Validate required fields
    if (!city || !kidAges || !availability || !maxDistance) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['city', 'kidAges', 'availability', 'maxDistance'],
        received: { city, kidAges, availability, maxDistance }
      });
    }

    // Log request
    console.log('📥 Received search request:', {
      city,
      kidAges,
      availability,
      maxDistance,
      optionalPreferences: optionalPreferences || 'none'
    });

    // Get activity recommendations from Claude
    const activities = await getActivityRecommendations(req.body);

    // Return activities
    res.json(activities);

  } catch (error) {
    console.error('❌ Error in /api/search-activities:', error);

    // Return error response
    res.status(500).json({
      error: 'Failed to get activity recommendations',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

module.exports = router;
