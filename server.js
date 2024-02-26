const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const next = require('next');
const mongoose = require('mongoose');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const connectDB = require("./server/Utils/db") 
// console.log(process.env);

const corsOptions = {
  origin: [
  "http://localhost:3000",
  "*"
],
  credentials: true,
};

app.prepare().then(() => {
  const server = express();
  server.use(express.json({ limit: "50mb" }));
  server.use(express.urlencoded({ limit: "500kb", extended: true }));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors(corsOptions));
  connectDB();

  // Routers
  server.use('/api/auth', require("./server/Route/AuthRouter"));

  // Next.js request handling
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 4000;
  server.listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
