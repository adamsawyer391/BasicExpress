
var express = require('express');
var path = require('path')

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});

//https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b