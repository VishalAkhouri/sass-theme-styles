WORK IN PROGRESS code
# sass-theme-styles
Produces themed styles with sass and webpack

restarted# 31-oct-2018

# step by step
##target 1: compile the sass file into css file

### step: 1 first install sass on the system globally
npm install -g sass

### step 2: use sasss command to provide an input sass and output css
sass input.scss output.css

### option (step 2:) or watch input.scss for any changes
sass -watch input.scss output.css

#target 2: running npm script to compile all scss files in the folder
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "scss": "node-sass --watch src/app -o dist"
  },

#target 3: precompiling the npm project as part of push process (using jenkins or any other build pipeline) and publish it to npm repository  
## step 1: introduce webpack config to the project
npm install sass-loader node-sass webpack --save-dev
npm install style-loader css-loader --save-dev

npm install --save-dev webpack webpack-cli #webpacli is required for webpack v4 and above

## step 2: create a dist on running the script
run command: webpack --config webpack.config.js

## step 3: testing the scripts generated using the test harness , this will also serve as repos for varous styles components created.


#Development mode
## spin up a development server
npm install --save-dev webpack-dev-server
