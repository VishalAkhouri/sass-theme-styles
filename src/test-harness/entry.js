// entry point for test harnesss
require("!style-loader!css-loader!./styles.css");
document.write("It works!");
document.write(require('./content.js'));
