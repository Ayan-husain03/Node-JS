const path = require("path");
module.exports = path.dirname(require.main.filename); // Get the directory name of the main module (app.js) and export it
// This will be the root directory of your application, which can be used to construct absolute paths to other files or directories in your <project className=""></project>