For this task i decided to use react beacuse it is the framework i am most familliar with so i wouldnt need to read extensive documentation it also has quick rendering with high performance and handles dependencies.

 I also used the Bootsrap CSS framework. Though i have not used it before when doing some research before starting the project i found that it had a simple table api which allowed for searching and filtering which you requested.
 
  I also used leaflet for react in order to generate the map and plot the points required. This was also something I hadnt used before but seamed ideal to solve the problem described in the breif. 
  
  The UI in the solution is very simple allowing for clear navigation to all the tasks with titles and brief descriptions. A navigation bar can be found at the bottom of evrey page so you can move through all the pages and each page has a dedicated purpose. 
  
  Any images are located in the assets folder and i attempted to keep the code simple and break it down into components. 
  
  The solution works for the use cases described in the brief with no errors. 
  
  I used styled components for a bit more control with the css styling and so that i can bundle the css and javascript into one file.I kept the theme blue and white to stay consitent with the logo. 
  
  I created an axios.js file so that the data can be acessed anywhere by calling the data function and not having to use axios in each individual file. 
  
  Works on all devices now as tested in the google chrome browser and even when data is filtered. This can be seen by right clicking the page then selecting inspect. From here click the phone/tablet icon inbetween elements and the arrow on the top left. You can see how the application looks in different device by selecting the device on the dimensions setting in the top left. 
  
  I also added some animation to make the application a bit more interactive. I added an information.js file which is a reusable component that can be used on all pages for the title and description.
  
   I have also made some render tests and they no longer have console errors.