const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.static('public')); // serve frontend files

// Endpoint to receive password
app.post('/check-password', async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password) {
    return res.json({ message: 'Username or password missing!' });
  }

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // For demo, we just return success message
  res.json({ message: `Password for ${username} hashed successfully: ${hashedPassword.substring(0,20)}...` });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
