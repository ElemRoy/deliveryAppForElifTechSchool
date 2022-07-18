# deliveryAppForElifTechSchool

How to run the website:

1. Development:
  - Download the zip and dearchive
  - Open the extracted folder with VSCode
  - Write "npm i --save-dev nodemon concurrently" and wait some time
  - Run "npm run dev" and wait some time for website on localhost to open
  - Congrats!
  
2. Build:
  - Set "frontend" in .gitignore
  - Open package.json in the frontend folder and replace "build": "react-scripts build", with "build": "CI=false && react-scripts build",
  - Login in Heroku and create new app
  - Open the newly created app panel and go to Deploy
  - There will be instructions to deploy back-end to Heroku
  - Once you've done that, go to frontend folder in terminal and type "npm i axios", wait for it to complete
  - Login in Netlify
  - Create new github repository and go through steps to commit and push frontend folder to the repository
  - On the Netlify panel choose Add new site -> Import an existing project -> Choose frontend repository -> Deploy without changing deploy rules
  - Wait some time and open the webapp
  - Congrats!
