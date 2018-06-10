const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/NCOfficialWeb'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/NCOfficialWeb/index.html'));
});
app.listen(process.env.PORT || 8080);

console.log('ncec server listening..');