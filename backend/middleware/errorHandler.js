// errorHandler.js - Error handling middleware
// Catches and formats errors for responses
export default function (err, req, res, next) {
  console.error(err);
  res.status(500).json({ message: err.message || 'Server Error' });
}
