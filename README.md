![image](https://i.natgeofe.com/k/47bb0144-f7d1-4a28-a102-834a590f6e57/ladybug-leaf_16x9.jpg)

Feel free to use any resources at your disposal to complete this task, just make sure that the code is your own and you are able to explain it and any decisions you made throughout the process.

This project is a simple web app with a NodeJS backend, Express middleware and React frontend.

Don't worry if you don't have experience in any of these technologies you only need to use Javascript to complete the main tasks, after that you may choose to attempt one of the optional tasks in an area of web development you are passionate about but it is not required and can also be completed in Javascript.

# How to Run

1.  If you haven't already, install Node.js from [Download NodeJS](https://nodejs.org/en/download/) (this project uses version 16.14.2)
2.  Verify your installation in the terminal with the commands 'node --version' and 'npm -v' (version 16.14.2 or above should mostly be backwards compatible
3.  Once signed in to GitHub, you can click the 'Use this template' button at the top of the GitHub page to create your own version of this repository
4.  Clone the project locally
5.  Make sure to set up your project on GitHub and make regular commits
6.  Open the folder in VSCode or alternative IDE
7.  If using VSCode recommended extensions are ESLint, React Native Tools, DotENV
8.  Normally .env files containing sensitive information would not be included in a public repository but in this case, it has been provided for you
9.  Open the terminal (Ctrl+~) to toggle or (Ctrl+Shift+`) to open a new terminal
10. Make sure that you are in the directory containing the root of the project
11. Run the command (npm install) in your terminal
12. While developing you can run the command (npm run dev) to start the node.js server and react client
13. If you do not plan to use Node at any point you may prefer to use the command (npm run client)
14. To stop these processes use the command (Ctrl+C)
15. The web app can be found on (http://localhost:3000)

# The Project

This section may be useful for any optional features you choose to add after the main tasks but don't worry if you are not familiar with any of the technology or terms used, you will be able to complete everything you need to with Javascript alone.

## NodeJS/Express

There is a simple node server ('app.js') that uses express to route to the React client.

For simplicity, all of the data in this application is stored locally within the '/node/data' folder.

The route '/node/routes/getLadybugs.js' is called by the utility function '/src/components/Utils/getLadybugs.js' and returns the ladybugs.json file as a string.

## React

The frontend of this web app was made using 'create-react-app' with a few small additions

In '/src/components/Landing/Landing.js' the 'GetLadybugs' function is called and given the following callback parameter

-   a function to handle the ladybugs JSON (which is given to you as a string)

The images specified by 'imageLocation' can be found in 'src/images' and can be accessed by importing 'src/images/index' as done in 'src/components/Landing/DisplayContent.js'

A good starting point would be to put this data into individual arrays (name, imageLocation and description) _hint_ there may also be other ways of structuring the data depending on how it will be used in your JSX

# Your Task

This task does have a rough guideline of what to create but how you do that is completely up to you.

However you prefer to plan and execute this task is accepted, just make sure that you can communicate your process, and reasoning for the decisions you made.

## Create a simple web app that displays information about ladybugs

### Data Manipulation

You will find a function 'gotDataCallback' in the file 'src/components/Landing/Landing.js' which has the ladybugs JSON passed into it as a parameter

- *Parse the string data into a JSON object*

- *Destructure the JSON object into individual arrays for name, imageLocation and description*

- *Pass your arrays for name and imageLocation into the DisplayContent component*

- *Remember to make regular commits*

### Rendering your Data

Your data should now be contained within the 'names' and 'imageLocations' arrays in the file 'src/components/Landing/DisplayContent/DisplayContent.js'.

The array 'outputJSX' is returned from this component, it has been populated with JSX (similar to HTML) so the landing page can render it.

You should be aware that the image locations you are given contain the suffix '.jpg' but the way you access the images uses only the initial part of the filename.

1. *Populate the header (line 15) with the third item in the 'names' array*

*Commit this part of the task*

2. *Populate the image source (line 16) with the third item in the 'imageLocations' array, read through the instructions for this section again if your image is not displaying*

*Commit this part of the task*


### Final Task

1. *Using a suitable technique, populate the 'outputJSX' array with the JSX (HTML) for every ladybug*

*Commit this part of the task*


## Additional Tasks (optional)

It is not necessarily expected for you to complete these tasks, perhaps just pick the one which interests you the most if you have time.

### Javascript

Put the initial ladybugs JSON into a new array of objects with (a)' Ladybug' concatinated onto each name, (b)'.jpg.' replaced by '.png' for each imageLocation (your images will no longer render if you impleted this data) and (c)include the description.  Then output your object to the console.

If you are still looking for another Javascript task you can try writing the object you have just created to a new JSON file.

### React

Implement the following functionality to your web app

- Each ladybug can be clicked on to show all of the information on its own page (preferrably without a page reload. _hint_ use hooks and components)

- Fix the warning 'Each child in a list should have a unique "key' prop" that you get in the console

### Node

Using the file 'node/data/users.json' create a POST route that will return 'true' if there is a username and password pair in the request made from React.

You can find a template for the React fetch request in 'src/components/Utils/Login/getUsers.js

If you are feeling adventurous you could even try and link this API call to the data you got from the ladybug JSON to only allow users on the list access to ladybugs that are 'locked'

### CSS

Show off your CSS skills and make your web app look nice :)

# How to Submit

To submit your final project you should send a link to your GitHub repository to DanielRyder@immersifyeducation.com.

Please make sure that your repository is set to be viewed publically.

You may also want to include any additional materials that will help you to explain your work, such as a photo of pseudo code or a plan you wrote down on paper.

Any edits and commits made after your submission time will not be considered in your application.
