# #include x WiCS Personal Portfolio Workshop ✨
Welcome to our portfolio workshop! We're glad to have you here today. Below is a set of instructions you should read over and make sure you follow to ensure smooth sailing.

## Getting Started
1. ```Make sure you have npm```. If not, install [Nodejs](https://nodejs.org/en/download/) to get access to npm. Check by inputting the following into your terminal:
   ```
   npm --version
   ```
2. ```Fork the repository``` by clicking Fork at the top. This creates your own copy that you can change however you want!
3. ```Clone your forked repository```. Get to your desired directory and type into your terminal
   ```
   git clone repo_link
   ```
   - Replace **repo_link** with the url you find when pressing the green ```<> Code``` button in your repository
4. ```Navigate to personal-portfolio``` and you're all set to code!

## Deploying Your Project
So, now you have a forked repository and can code to your heart's content. But, how are people going to see the beautiful site that you made? This is where deployment comes into play. 

- Deployment essentially puts all of your hard work on the web for anyone to see.
- A host provider (in our case GitHub) is needed to keep the site up and they provide you a domain url, which is where people navigate to in order to get to your site.
- **If you want a custom domain url, you will have to buy it online**. For our purposes, we will be using the url that GitHub gives us.
- ```If you do not want to deploy, you can skip the next steps```. Though, we highly encourage you to do so :>

## Setting Up GitHub Pages
1. ```Click on Settings in your forked repository```.
2. ```Find Pages on the left and press it```. You should now see a **Build and deployment** with a **source**.
3. Click on **source** and select ```GitHub Actions```. 
   - This indicates that your deployment will be done through GitHub Actions.
   - We have setup a GitHub Actions file that handles the deploying already! If you're interested, look into workflows and yaml files.
4. ```Now, make a change to your code, commit, and push!``` You should now see in your GitHub repository a symbol next to your latest commit that shows whether or not the deployment was successful.

## We hope this was helpful! Made with 💜 by #include and WiCS