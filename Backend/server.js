const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error')
const cors = require('cors');
dotenv.config({ path: './config/config.env' });
const mongoSanitize = require('express-mongo-sanitize');

const routes = require('./routes/package');

connectDB();

const app = express();

// const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true  //g
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;
const auth = require('./routes/auth');
//body parser
app.use(bodyParser.json());
// app.use(cors({
//     origin: 'http://localhost:3000',  //g
//     credentials: true,
// }));
app.use(cookieParser());
app.use(mongoSanitize());
// app.post('/package', (req, res) => {
//     res.send('Hello from the server posted');
// });
// routes has been mounted
app.use('/api/v1/package', routes);
app.use('/api/v1/stay', require('./routes/stay'));
app.use('/api/v1/transport', require('./routes/transport'));
app.use('/api/v1/gauth', require('./routes/gauth'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use(errorHandler);
// app.get('/package', (req, res) => {
//     res.send('Hello from the server got');
// });

app.listen(PORT, console.log(`Server running ${PORT}`))
