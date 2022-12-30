# Deploying a React App to GitHub Pages

This project is based on the tutorial outlined in [Log Rocket](https://blog.logrocket.com/deploying-react-apps-github-pages/#:~:text=The%20simplicity%20of%20deploying%20a,own%20custom%20domain%20or%20subdomain.).

## Motive

I wanted to learn more about frontend development and fine-tune my ReactJS skills. I also wanted to look into ways I could apply these skills, and I found the article mentioned above to deploy React apps to GitHub. I thought this would be a good primer for me. In the future, I would like to convert my current personal website into a React application to give it a better appearance and make it more extendable.

## Technologies & Dependencies

<ul>
    <li>NodeJS <a href="https://nodejs.org/en/">(download)</a></li>
    <li>ReactJS</li>
    <li>gh-pages</li>
</ul>

### Installing ReactJS (via NodeJS)

After installing NodeJS, run the following command to install React:

``npm install --save react react-dom``

Then, to create a blank React project, run the following command:

``npm create-react-app [name of your project]``

### Installing GitHub Pages Dependencies

After creating your project and GitHub repo, run the following command:

``npm install gh-pages --save-dev``

To deploy your React app to GitHub Pages, run the following command:

``npm run deploy``