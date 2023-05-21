const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

dotenv.config({ path: './config/config.env' });

const routes = require('./routes/package');

connectDB();

const app = express();


const PORT = process.env.PORT || 8000;

//body parser
app.use(bodyParser.json());

// app.post('/package', (req, res) => {
//     res.send('Hello from the server posted');
// });
// routes has been mounted
app.use('/api/v1/package', routes);

// app.get('/package', (req, res) => {
//     res.send('Hello from the server got');
// });

app.listen(PORT, console.log(`Server running ${PORT}`))
