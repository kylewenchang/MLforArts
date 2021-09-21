### Reflect on the relationship between labels and images in a machine learning image classification dataset? Who has the power to label images and how do those labels and machine learning models trained on them impact society?

Because machine learning models are trained based on the provided images and labels, whatever data is provided is crucial to the eventual output of the model. Although effort has been put in to remove some of the more problematic outcomes of the training process, the fact that there is such a small group of people making these decisions could be a cause for concern, as the decisions they make will really only consider issues from their perspective and include their biases. I'm not sure if issues can be passed on through transfer learning, but if so, us using MobileNet/Teachable Machine for our models might include the biases from those original datasets too.

### Teachable Machine Project: Open Window, Closed Window

This teachable machine project is a bit of a rehash of a [similar project I did in Creative Computing](https://itp.nyu.edu/classes/cc-f20-2/window-status/), that used your microphone to detect whether or not your window is open, but I retrained the model for his iteration. I was kind of inspired by this article I saw that was talking about how, based on audio, it could be determined what you're typing. I wanted to try a smaller version of that which used audio to get the physical state of something.

Originally, I just trained teachable machine on background noise (closed window) and audio of the open window, but issues arose whenever I talked or walked around the room (any unexpected audio), so I added a label of the window closed with talking and the window open with talking. In p5, I used if statements to combine the two labels with windows open into one label to be displayed in the output, and did the same with the background noise and "closed window with talking" labels.

![Teachable Machine Data](https://i.imgur.com/1hLwksd.png)

Ideally, I'd like to record a lot of audio with the windows open and windows closed and the audio of me just doing daily activities over it, but I assume training time would be horrible. It seemed to work pretty accurately, but would only really work in my room with my microphone with the provided data. I would also like to smooth out the display of different results, so the window state wouldn't flicker as much.

Unfortunately, this morning, everything went awry (as things tend to). I was trying to screen record my project, but my laptop started dying when I recorded and eventually blue screened. This is the second iteration of this post, and the project in the video may be slightly different from code in the [p5js project](https://editor.p5js.org/kwc9225/sketches/LzPiRTKA5), but uses the same model and labels.
