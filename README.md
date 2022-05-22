# Headstart Tutors

## How to run the website

run `npm install` to install all the dependencies of the project first. 

In the terminal, run `npm start` to start the react app, you can alternatively view the website in the build production folder.



## Inspiration🎓
We found the inspiration and thought of the idea to create our project while tutoring. We realized that for every student we got, we would need to go to the hassle of creating a google classroom and to email the student and their parents back and forth. Google Classroom is tailored towards bigger classes, not one of one education. The features it has are all personalized towards larger classes, making the website inconvenient to use for tutoring. This is where our website, Headstart Tutors comes into play. Headstart Tutors personalized one on one education with features such as one on one messaging and a dashboard where all central links for the tutor and tutee are posted. Tutoring has become a big part of education especially with COVID-19 affecting in-person schools, and with lots of education systems switching online. Our group has yet to see a popular online platform dedicated to tutors and students, so we decided to make one. 


## What it does🔧
Our website is a hub for everything that tutors and students may need. It allows for easier and more fluid communication between tutors and their students, and it provides a more efficient way to teach for tutors as it's designed for one on one sessions. Its purpose was to also act as a “hub” for everything the tutor may use, including things such as notes, homework, lesson plans, links for the student and tutor, etc. In essence, our website's purpose is to enhance communication and functionality for everyone involved in online education. 


## How we built it👨‍🎨
Our website was built with React and CSS. We incorporated firebase into our website by using firebase’s user authentication and firestore (database) features. Firebase is used to authenticate and make our login and signup system work, it also allows us to save the messages that were sent by each user.


## Challenges we ran into⚖️
We ran into many, many problems during the production of our website. One of the biggest challenges was first getting the chat box function to work. To get this to work, a connection between two clients must be made with Websockets, and information must be added and fetched from our Firebase database system to be outputted to the front-end. Another challenge we ran into was with user authentication. The Firebase documentation for user authentication was not helpful for our case and a bit outdated compared to modern solutions, which messed us up on the user authentication portion of the video. 


## Accomplishments that we're proud of🧐
Although this project did not go as smoothly as we had planned, we are still proud of the accomplishments we made on the project. One accomplishment we’re proud of is the implementation of a functional login, signup, and logout system. We spent a long time making this authorization system work, since it was our first time using Firebase. Another achievement we’re proud of is making a prototype for the texting between student and tutor. We struggled a lot with fetching real time messaging data from firebase, and outputting these messages to our React front-end. We are proud to say that we learned a lot about both React and Firebase to achieve this in the end. 

## What we learned 👩‍🏫
We learned tons of different frameworks and APIs during this project. Firstly, most if not all of our group members were very inexperienced with making a large project with React. We learned the basics of React such as the basic hooks useState, useEffect, useRef, and we learned about how React components and routers work. In addition, we learned a lot more about Firebase. We learned about how Firebase authentication works, and it was our first time working with a noSQL database. Finally, we learned about Socket.io which we tried to use to help us build our chat function. Socket.io is used to communicate between servers and clients, perfect for making online web applications. While we may have not been completely successful at applying Socket.io this time, we found it was a great experience that we can definitely apply in the future.

## What's next 🚀
There were a lot of features that we did not get the time to implement for our website. One of the key features we wanted in our website was to use Twilio to send notifications to the student or tutors when they are messaged. We ended up not having enough time to implement a phone number authentication, so we could not implement this. 

One other key fundamental feature is to make our website design responsive, so that the website is friendly and looks professional for all devices. Currently, our website is non-responsive, and the design looks out-of-proportion on many devices

Finally, one other feature we wanted to fully implement was the chat messaging feature between student and tutor. We experimented with this during the hackathon using Socket.io, but we could not get this feature to work properly. This feature allows communication between student and tutor to be a lot more fluid than messaging over Gmail.
