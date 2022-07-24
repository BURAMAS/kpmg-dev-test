For this task I decided to use react because it is the framework i am most familiar with so I wouldn’t need to read extensive documentation it also has quick rendering with high performance and handles dependencies.

 I also used the Bootstrap CSS framework. Though I have not used it before when doing some research before starting the project I found that it had a simple table API which allowed for searching and filtering which you requested.
 
  I also used leaflet for react to generate the map and plot the points required. This was also something I hadn’t used before but seamed ideal to solve the problem described in the brief. 
  
  The UI in the solution is very simple allowing for clear navigation to all the tasks with titles and brief descriptions. A navigation bar can be found at the bottom of every page so you can move through all the pages and each page has a dedicated purpose. 
  
  Any images are in the assets folder and I attempted to keep the code simple and break it down into components. 
  
  The solution works for the use cases described in the brief with no errors. 
  
  I used styled components for a bit more control with the CSS styling and so that I can bundle the CSS and JavaScript into one file. I kept the theme blue and white to stay consistent with the logo. 
  
  I created an axios.js file so that the data can be accessed anywhere by calling the data function and not having to use Axios in each individual file. 
  
  Works on all devices now as tested in the google chrome browser and even when data is filtered. This can be seen by right clicking the page then selecting inspect. From here click the phone/tablet icon in-between elements and the arrow on the top left. You can see how the application looks in different device by selecting the device on the dimensions setting in the top left. 
  
  I also added some animation to make the application a bit more interactive. I added an information.js file which is a reusable component that can be used on all pages for the title and description.
  
   I have also made some render tests and they no longer have console errors. you can run the tests by entering npm test in the terminal.
