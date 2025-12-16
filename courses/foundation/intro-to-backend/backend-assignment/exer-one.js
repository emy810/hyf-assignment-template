
import express from 'express';
const app = express();
const port = 3000;

const users = [
  "Aarika Ellingworth",
  "Pren Goldsworthy",
  "Pablo Kisbee",
  "Rodie Duncan",
  "Aubry Polak",
  "Maryrose Meadows",
  "Pavel Brushneen",
  "Hedy Gerault",
  "王秀英",
  "إلياس",
  "Donald Duck",
  "Adam Smith",
  "Emebet" ];




// Route 1: All users 
app.get('/all-users', (req, res) => {
  res.json(users);
});


   

// Route 2: Recent users
app.get('/recent-users', (req, res) => {
  const recent = users.slice(-5); // last 5 entries
  res.json(recent);
});


// Route 3: User count
app.get('/user-count', (req, res) => {
  res.json({ count: users.length });
});


// Home route (HTML page)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User Dashboard</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 100px; }
          .count { font-size: 3em; color: #1187e8ff; }
        </style>
      </head>
      <body>
        <h1>Total Users</h1>
        <div id="user-count" class="count">Loading...</div>
        <script>
          fetch('/user-count')
            .then(r => r.json())
            .then(data => {
              document.getElementById('user-count').textContent = data.count;
            });
        </script>
      </body>
    </html>
  `);
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});