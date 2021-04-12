var express = require('express');

var cors = require('cors');
const routes = require("./routes");
var app = express();
const PORT = process.env.PORT || 3001;
// const db = require("./models");



app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

  

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })


app.listen(PORT, function() {
    console.log(`🌎  ==> CORS-enabled API Server now listening on PORT ${PORT}!`);
});