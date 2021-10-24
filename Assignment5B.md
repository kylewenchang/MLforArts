### Assignment 5B

My original plan was to make a project that predicted the user's drawing in real time, and updated an output to show the image of what the computer predicted the user was drawing. I thought this wouldn't be too difficult using DoodleNet and the Quick, Draw! API. Unfortunately, it seems as if Google has updated the dataset since the example code was posted, dataset now being filled with .ndjson files vs .json files. After doing some research, I think that p5 currently just doesn't handle the format well, so instead I decided to adapt DoodleNet to use the webcam.
