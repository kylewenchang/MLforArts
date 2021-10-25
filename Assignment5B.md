### Assignment 5B

My original plan was to make a project that predicted the user's drawing in real time, and updated an output to show the image of what the computer predicted the user was drawing. I thought this wouldn't be too difficult using DoodleNet and the Quick, Draw! API. Unfortunately, it seems as if Google has updated the dataset since the example code was posted, dataset now being filled with .ndjson files vs .json files. After doing some research, I think that p5 currently just doesn't handle the format well, so instead I decided to combine HandPose and DoodleNet to guess drawings that users make in the air with their finger. I used Handpose to detect the top of the hand's index finger, and used lerping to smooth the points, which were drawn on the canvas, which was then fed into DoodleNet for classification. Although it only tracks one point on the index finger, I found the tracking more accurate when you showed the camera an entire hand.

Because the webcam wouldn't be drawn on the canvas, I couldn't figure out a way to flip the reference video, so I thought to turn it off was less confusing that having a mirrored video at the bottom. I think the main issue with this current version is latency. I think this might be able to be solved by adding a classification button rather than classifying live, which also changes the user experience of the project.

Also, some things I would like to add/change in the future would be using a path drawn between points rather than a series of points so the lines drawn would look more like a solid line. Also, using a regression to tell whether or not the hand is open or closed for drawing would be useful.

[You can look at the code/try the project here!](https://editor.p5js.org/kwc9225/sketches/afd_lNyQ-)
