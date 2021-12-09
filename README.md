# Ultimate Gaming Quiz

My site is created with the intention of delivering an entertaining source of media to users. I have done this by creating an interactive quiz about video games that will challenge users. I designed the site with an old school arcade scheme in mind, this plays on the nostalgia that users would have around video games. Any user that goes on the site will be able to easily interact with all the sites functions. IF CAN BE DONE Users will also be able to store a personal highscore to encourage sharing with friends and attempting to beat each other. This will in turn create a social aspect around the quiz.

## UX

The colour scheme of the site uses a slightly light black and bright yellow. This ensures that all the text and content of the site stands out and can easily be read. The bright yellow is based on old arcade style colour schemes, almost throwing back to games like Pacman. This is intentionally designed this way to play into the video game aspect of the quiz while maintaining a positive contrast score. Some other elements such as the play button and the actual quiz options use a bright blue and white/yellow scheme. The blue also plays into the arcadey feel of the site and again ensures that all the content can be read by all users.

Wireframes of my proposed project designs can be seen bellow:

![Screenshot showing the orignal home screen design](screenshots/home-wireframe.PNG "Screenshot of Home Screen Wireframe")
![Screenshot showing the orignal quiz screen design](screenshots/quiz-wireframe.PNG "Screenshot of Quiz wireframe")

![Screenshot showing website contract score](screenshots/site-contrast.PNG "Screenshot of Wave Evaluation Tool")

## Existing Features

### Welcome Screen

When the site is initially loaded the user is greeted with a simple heading and site description. This way the user isn't overblown with the quiz when they first enter the site. It also features a play button, which gives the user total control for when the quiz is loaded. The play button is fully interactive as well and highlights with a mouse pointer so the user can easily make out that it is a button. By using the blue background it also stands out immedietly when the page is loaded. 

### Home button

From the quiz screen, a simple home button has been made available in the top left of the screen. Rather than use a full navbar for site navigation a simple home button takes the user in between the pages of the website with ease. It uses the blue and yellow font style similar to the play button so that it can easily be located as soon as the page is loaded. This way the user isn't looking around or defaults to the back button as they have the button made obvious within seconds.

![Screenshot showing home button](screenshots/homebtn-screenshot.PNG "Screenshot of Website Home Button")

### 404 Page

The user is automatically brought to the 404 error page whenever they go to a page that does not exist. This is usually by mistyping something into the address bar or by following an incorrect link. In the case that a user makes the mistake of mistyping the page in the bar, I have created my own 404 page which follows the styling of the rest of the site. As well as this it also features a simple message to explain to users what has happened. Then they can use the provided button which will bring them back to the home page. This ensures they stay within the realms of the site and don't get lost or frustrated.

![Screenshot showing 404 page](screenshots/404-screenshot.PNG "Screenshot of 404 Page")

## Future plans

## Bugs

During the early stages of development I had issues with getting my questions to display. They would initially come up as "undefined", so to figure this out I had to do some tinkering. I found that my issue was the code trying to display the question from the html element also called "question". I changed around the names and tried different orders until it would rewrite the HTML element with the "questions" array. 

While devloping gitpod ran into issues displaying a preview of the site on a local network. To get around this I had to restart the workspace multiple times so that it would function correctly. I then also seeked out a new extension that would improve my preview experience. By downloading Live Server, any changes I made would refresh live to me on my other monitor. This made the flow of design and experimenting much easier.
## Existing Bugs

## Deployment

To begin creating my website I used the Code Institute template by navigating [here](https://github.com/Code-Institute-Org/gitpod-full-template) and clicking "Use this Template".

Once this was done I was able to simply create a new repository from the template and add it to my profile. I named my repository and clicked the create repository from the template button.

## Technologies Used

HTML

CSS

Javascript

Google Fonts

Gitpod

Live Server (Gitpod extension)

Github

## Credits

Understanding of how to put project into place thanks to Sitepoint:

https://www.sitepoint.com/simple-javascript-quiz/#whatsnext

Quiz questions were taken from:

https://icebreakerideas.com/video-game-trivia/

## Acknowledgements

Refeshed knowledge of all symbols and how to apply to project found on this stackoverflow post:

https://stackoverflow.com/questions/9549780/what-does-this-symbol-mean-in-javascript

Ability to add a timeout learned at w3 schools:

https://www.w3schools.com/jsref/met_win_settimeout.asp

Session storage applied to script using this as guidance:

https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

Was able to store an array to local storage learning through stackoverflow:

https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

A lot of the structure and understanding was thanks to the Love Maths project

Thanks to the Code Institute javascript module for teaching me the functionality and use of javascript.