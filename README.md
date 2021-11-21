# Rock Paper and Scissors

## Description

I have created a Rock, Paper, Scissors game using HTML5, CSS3 and JavaScript. Users can click on an icon where then this is compared to the computer's choice. There is a counter for the user and computer where it stops when the counter is 5 for either side. The icons are then hidden and users have the ability to play the game again.

## Wireframes

I have used Figma to create wireframes of this website.
Attached is a link to a PDF file [here](https://github.com/terencecistudent/rock_paper_scissors/blob/main/wireframes/rock-paper-scissors.pdf).

## UX

### User Stories

1. As a user, I would like to be able to click on an icon which shows a colour, either green, red or white when it is compared to the computer's choice.

   - **End User Goal:** User is able to click on an icon which will display a colour, depending if they are correct or not.
   - **End Business Goal:** Icons to be clickable and functionality working correctly.
   - **Acceptance Criteria:** For all the functionality of the icons to work correctly.
   - **Measurement Of Success:** Test on live demo.

2. As a user, I would like to see the scores go up by 1 when I or the computer gets a correct choice.

   - **End User Goal:** Scores to update correctly depending on who selected the correct icon/choice.
   - **End Business Goal:** Score functionality to increase by 1 each time there is a winner.
   - **Acceptance Criteria:** For all the functionality of the scores to work correctly.
   - **Measurement Of Success:** Check Manual Tests.

3. As a user, I would not like to see the icons or be able to click on the icons when the game is over.

   - **End User Goal:** User is not able to click on any icons because the icons are hidden.
   - **End Business Goal:** Game over functionality to work correctly.
   - **Acceptance Criteria:** Users cannot continue with current game as icons are hidden.
   - **Measurement Of Success:** Test on live demo/Check manual tests.

4. As a user, I would like to be to play the game again when the current game is over.
   - **End User Goal:** User is able to restart the game.
   - **End Business Goal:** Restart game functionality to work correctly.
   - **Acceptance Criteria:** For the functionality for starting a new game to work correctly.
   - **Measurement Of Success:** Test on live demo/Check manual tests.

## Requirements

Access to desktop, laptop, table or mobile devices and internet connection.

## Deployment

I have used GitHub Pages to host my website.

Visit the live demo at [Rock Paper Scissors](https://terencecistudent.github.io/rock_paper_scissors/).

## Installing

I have used VS Code to write my code with.

You can download it from here: https://code.visualstudio.com/

## Testing

### Manual Testing

Manual tests can be found [here](https://github.com/)

### Responsiveness on different devices

Responsiveness tests can be found [here]()

### Running Responsive Designs on Google Chrome:

**To view responsive applications:**

1. Right click then go to **Inspect Element**
2. Click on the **Toggle Device Toolbar** (Icons showing two devices):

![image](https://user-images.githubusercontent.com/48124466/68051275-f2ebf500-fcde-11e9-8b3a-adc7abc16c5f.png)

3. Click on any device, for example, iPhone 5/SE selected:

![image](https://user-images.githubusercontent.com/48124466/68051467-5aa24000-fcdf-11e9-8666-d29f1afa8955.png)

### Code Validation

- HTML
  - is validated using [W3 validator](https://validator.w3.org/).
- CSS
  - is validated using [W3 Jigsaw](https://jigsaw.w3.org/css-validator/).
- JavaScript
  - is validated using [JS Hint](https://jshint.com/).

## Technologies Used

**Languages:**

- HTML5
  - Used to structure the page.
- CSS3
  - Used to add styling to the page.
- JavaScript
  - Used to help with the game functionality.

**Frameworks:**

- Bootstrap v5
  - Used to help style elements and make the website reponsive.

**Libraries:**

- Font Awesome
  - Used to add icons to the website.

**Markdown:**

- README.md
  - Used for documentation.

**Others**

- Git
  - Version control to the GitHub repositories.
- GitHub
  - Stored the code on here.
- Google Chrome Developer Tools
  - Helped with small changes.

## Cloning and Pushing To The Respository

### Cloning:

- Here is a link how to clone a repository:
  https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

### Pushing To The Respository:

- To add, commit and push files to the repository, e.g. index.html, open a New Terminal and type:

1. git add index.html
2. git commit -m "Leave a message here"
3. git push origin master - (which is for the master branch).

- To create a new branch within your current application, open a New Terminal:

1. Create a branch: git checkout -b new-branch-name
2. Edit, add to your application and commit the files.
3. Push the branch to the remote repository: git push origin new-branch-name.

## Roadmap

In the future I would like to implement:

- More interesting transition styling for the rock, paper and scissors icons.

## Difficulties Faced

- I created a reset game function however I struggled at first. I created a couple of different functions, one for the user score and one for the computer score. I wanted to use that to set an if statement but was struggling to connect the two. I then deleted those 2 functions and worked with the knowledge I have within the win and lose functions. In here I created if statements with the scores within those functions and was able to work of that.

## Support

To contact GitHub, follow this link: https://support.github.com/

## Credits

### Media

- Icons beside the for the rock, paper and scissors are from https://fontawesome.com/

### Author

Terence Logue
