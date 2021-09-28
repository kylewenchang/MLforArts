For this project, I wanted to use PoseNet to detect whether your right or left hand was up and let you play airdrums. I took Code of Music last semester so I was intrigued by the possibility to combine skills from the two. Using the example code for PoseNet and ML5js, I trained a model using the the following classifiers.

| Label  |Description|
| ------------- | ------------- |
| n  | Neither Hand Drumming |
| d  | Neutral (Hands down) |
| r  | Right Hand Drumming  |
| l  | Left Hand Drumming  |
| b  | Both Hands Drumming  |

I did a test using the Pose model of teachable machine, and it was pretty responsive and worked relatively smoothly, spiking one of the classifiers to 100% as I hit an invisible drum. However, when I tried the same thing with the PoseNet model, it wasn't nearly as accurate. The classification was basically too innacurate to be usable, even after running it twice with two different sets of training data. I think the problem may have been solved with more data, and maybe if I wiggled around more during each pose for each of the captures. I'm curious as to whether determining the drum state using the positions of the hands relative to the hips would have been easier.

[Here is the link to the p5 sketch](https://editor.p5js.org/kwc9225/sketches/zbl4D2kzK), and this is a [demo video](https://www.youtube.com/watch?v=kMFKfuopU4A), which doesn't really work...
