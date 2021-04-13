let express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require("./routes");
let app = express();
const PORT = process.env.PORT || 3001;
// const db = require("./models");

const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://gonimbly-proj.herokuapp.com/'];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }



// Add routes, both API and view
app.use(routes);

  

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })


app.listen(PORT, function() {
    console.log(`🌎  ==> CORS-enabled API Server now listening on PORT ${PORT}!`);
});