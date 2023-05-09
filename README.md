# gas-detection-dashboard

## Steps to run the app

1. Download the latest version of Node.js and install it
2. Open command prompt and run 'node --version' to check whether installation was successful, if not, uninstall and install Node.js again
3. Download Arduino IDE and install it
4. Plug in the Arduino Uno board along with MQ-135 sensor to your machine
5. Open Arduino IDE and load gas-detection.ino file in it
6. Go to the Tools tab in the IDE and select 'Arduino Uno' under Board dropdown and 'COM3' under Port dropdown
7. Compile and upload the sketch using Upload button
8. Now go to the root folder of the project in command prompt and run 'npm install'
9. Next, go into ./client folder and run 'npm install'
10. Now run 'npm start' from the root folder to start the Node.js application
11. Go to http://localhost:4001 and check for response, if there is one, then the app is running without any errors
12. Next go into ./client folder and run 'npm start', this will start the React app and open a new tab in the browser with the dashboard
