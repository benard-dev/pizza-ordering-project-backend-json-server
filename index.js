const { exec } = require('child_process');

// Set port (default: 3000). For Heroku, we need to use
// the port set by the environment variable $PORT
const port = process.env.PORT || 8000;

const command = `json-server db.json --watch -p ${port}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log('Error running exec', err);
    return;
  }
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
});