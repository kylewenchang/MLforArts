## Assignment 8
The [model I explored in Runway](https://app.runwayml.com/models/akhaliq/MiDaSv2) is one that takes input images or videos and tries to create an accurate depth map from them. This caught my eye as depth information is typically something extra hardware is required for, but I've seen examples in the past of software being used to compensate for this lack of hardware, like Google's 1-lens portrait mode on the Pixel's for a while.

The model was trained on five existing datasets: ReDWeb for dynamic scenes with a wide stereo baseline for depth capture, MegaDepth for static scenes with better far-depth data, WSVD for stereo videos from the web (no depth data included, but the depth data could be built from the stereo image), and DIML Indoor for indoor scenes with Kinect depth data. In addition to these datasets, the team used a small selection of 3D movies with accurate enough depth data to train the model.

The model takes my webcam video and outputs a 600x400 video that uses luminance values for depth information in impressively close to real time. I held my phone closer or further away from the webcam to see if it would be able to estimate its depth. I didn't have any real data to compare it too but it seemed to get relative depth pretty accurately.

#### Phone close to webcam
![Close Phone](https://i.imgur.com/OzYuXK5.png)

#### Phone far from webcam
![Far Phone](https://i.imgur.com/X5qorm1.png)

To test the model's limits, I wanted a way to change the way the computer perceived the image without changing the depth info, so I tried turning on an off a lamp in the background of the image, causing a huge chunk of pixels to have drastically different values.

#### Lamp off
![Lamp Off](https://i.imgur.com/F0gbHZu.png)

### Lamp on
![Lamp On](https://i.imgur.com/6S7Kgjc.png)

The drastic change in the image didn't really change the depth map at all!
