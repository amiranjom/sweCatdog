<img src="https://i.ibb.co/GFPnN56/logo.png" alt="drawing" width="200"/>

# CatDog

**Full Stack** web application made by a group of 3 people for a senior project. 


## Table of contents

  * [Feature List](#feature-list)
  * [File Structure](#file-structure)
  * [Built With](#built-with)
  * [Project Details](#project-details)
  * [Instructions to Run (Development)](#instructions-to-run)


## Feature List
 * Engaging UI where visitors can use a demo to see the app functionality or signup.
 * Two Services provided: 
     1) Client (Pet Owner)
     2) Worker (Sitter)
 * Admin Panel for admins so that they can search Client and Worker and ban users from the website.

## File Structure
 * Back End is located at the **Root**
 * Front End is located at the **Root/Client**
 #### Deployment:
 The final deployment does not have the Client Folder. The Front End would be served by Node.Js in the Back End with the help of the auto generated React Build Folder.
 

## Built With

- [Node](https://nodejs.org) - JS Runtime Environment
- [Npm](https://www.npmjs.com) - Package Manager
- [Express](https://expressjs.com/en/starter/installing.html) - Web Framework
- [Mysql](https://mysql.com) - Database 
- [WorkBench](https://www.mysql.com/products/workbench/) - Database Design
- [React](https://reactjs.org) - Frontend Library
- [Redux](http://redux.js.org) - State Management Tool
- [React-Router](https://reacttraining.com/react-router/web/guides/philosophy) - Frontend Router
- [Git](https://git-scm.com) - Version Control
- [Google Cloud Platform](https://cloud.google.com/) - Hosting and Continuous Deployment
- [VS Code](https://code.visualstudio.com) - Code Editor
- [Chrome](https://www.google.com/chrome/browser/desktop/index.html) - Browser

## Project Details
CatDog is hassle-free and simple, we provide thoroughly vetted sitters; making the
safety of pets our highest priority. It is slick and streamline with a minimal approach to our user
interface. In this interface, we put our focus on pets by building a specified animal profile
displaying the needs of the pets. Forming a more personalized pet sitter experience. We are
focused on generating a fast, secure, and efficient application.

## Instructions to Run
  **Install the necessary packages and utilities to run the app.**

#### Package Installing: 

1) Run ```npm install -g nodemon``` inside the directory **Root**
2) Run ```npm install -g yarn``` inside the directory **Root**
3) Run ```npm install``` inside the directory **Root**
3) Run ```npm install``` inside the client directory **Root/Client**


#### To Start Both Front-End and Back-End Together
1) Come to the directory **Root** and run the command ```yarn dev``` 

#### To run them separately
1) ***Front-End:*** Run ```yarn client``` in the directory ***Root/Client***
2) ***Back-End:***  Run ```yarn server``` in the directory ***Root***


