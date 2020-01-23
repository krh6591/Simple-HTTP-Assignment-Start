const fs = require('fs');

function getImage(request, response) {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(fs.readFileSync(`${__dirname}/../client/spongegar.png`));
  response.end();
}

module.exports = {
  getImage,
};
