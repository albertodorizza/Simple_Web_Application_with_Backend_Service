# Simple_Web_Application_with_Backend_Service

An assignment for the selection process to CENTS: Simple Web Application with Backend Service

# Table of contents

- [Introduction](#introduction)
- [Building and Running](#building-and-running)
- [Project structure](#project-structure)
- [Future Work](#future-work)
- [Author](#author)

# Introduction

This repository contains the development of an assignment for the selection process to CENTS. In this case a simple web application with backend service was asked to develop. <br>
In particular the objective is that this web application interacts with a backend server, where the server will perform a basic arithmetic operation (sum of two numbers provided by the user, plus the first prime number greater than the higher of the two input numbers). On the other side, the frontend will collect user input, display the result returned by the backend, and be styled using CSS.

# Building and Running

## Building

```
npm install
npm install -g nodemon
```

## Running

```
npm start OR node app.js OR nodemon app.js
```

Go to http://localhost:3000/ in order to visualize the web application.

# Project structure

```bash
.
├── README.md
├── app.js
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   ├── script.js
│   └── style.css
└── src
    └── modules
        └── nextPrime.js
```

# Future Work

The main aspects that can be improved in the future of the application are:

1. Making the application a PWA to give users the possibility of installation.
2. Improve the entire UX/UI.
3. Remove the button to do the calculation and display the result dynamically as the input changes.
4. Improve and test other faster algorithms to effectively find the next highest prime number in the input.

# Author

[Alberto Dorizza](https://www.linkedin.com/in/albertodorizza/)
