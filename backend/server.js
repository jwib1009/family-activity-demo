/**
 * Family Activity Finder - Backend Server
 * Express server with Claude API integration for activity recommendations
 */

// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const activitiesRouter = require('./routes/activities');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173' // Vite dev server
}));
app.use(express.json());

// Routes
app.use('/api', activitiesRouter);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Family Activity Finder API',
    version: '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`✅ CORS enabled for http://localhost:5173`);

  // Check if API key is configured
  if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_api_key_here') {
    console.warn('⚠️  WARNING: ANTHROPIC_API_KEY not configured in .env file');
    console.warn('   Get your API key from: https://console.anthropic.com/');
  } else {
    console.log('✅ Anthropic API key configured');
  }
});
