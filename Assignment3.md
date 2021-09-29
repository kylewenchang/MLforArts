## drum hands!
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

## Reading Response
#### What questions do you still have about the model and the associated data? Are there elements you would propose including in the biography?

After looking at the biography for PoseNet and seeing that it was trained using data from the COCO dataset, I did more research on COCO, discovering that it's managed by a group of collaborators, and sources public images from Flickr. I'm curious as to whether or not the uploaders of these photos were ever informed that their photos would be used for the dataset or given the option to opt out. Maybe the concern never came up, as the actual images never actually show up in the dataset, only in training it. This brings up the question of ownership of knowledge, as the algorithm was able to learn from the images, but doesn't ever present the images themselves.

Personally, my ideal scenario is one where the photo owners should have had to give consent for their photos to be used, but they probably figured not enough users would opt-in, so I think an opt-out with a simple, clear explination of how the data would be used in the model would be good. It seems pretty legally grey. Also, now knowing that public models are trained on other public models, I wonder if the biases of the groups that create these models compound and become even bigger issues than they began as.

#### How does understanding the provenance of the model and its data inform your creative process?

I wasn't too concerned about where the data came from in my model... I'm just a student, but learning that PoseNet was trained on full body images will be helpful moving forward with drum hands!
