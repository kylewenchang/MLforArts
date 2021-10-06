## Machines + Art

Rebecca Fiebrink's lecture on technology's use in the arts and how the practice has evolved over time from simple tools to more intelligent tools that that advantage of machine learning we use today was incredibly fascinating. Whenever the idea of technological advancement for the arts ever comes up, there's often a debate over how valid the art is in relation to an artist, or in relation to the art world, when created by a machine or algorhithmically. Although less so now, there used to be a lot of contention over whether digital art was considered art at all, and this conversation has kind of been reinvigorated by the popularity of NFTs. However, I think, as with most innovation, the debate over whether or not this is a valid form of creating art will pass, as it should, in my opinion.

The artistic process, in my mind, has always been about taking in outside information, absorbing it/internalizing it, and producing something based on that, and the fact that computers are able to do this in a sense, but without the knowledge/perspectives that humans are grounded with is ripe with possibility. I think a lot of the unwillingness to adapt to new technology in the art world is that people believe it waters down the art, but I would argue that lowering the barrier of entry for creation, for example, technology having removed the need for formal training for a lot of creation, will only allow more people to express more diverse ideas and perspectives.

## Assignment 4
For assignment 4, I decided to improve upon the in-class HandPose example by making it plot all of the points on the hand. I was able to do this without having to address individual point using loops, but this was actually a lot more difficult than I expected because I never figured out a way to access the subarrays in the array that HandPose outputs by index (for example, having to use ```handPoints[0][0].annotations.thumb[j][0];``` rather than something like ```handPoints[0][0][0][0][j][0];```, which would have allowed me to access the coordinated of all the points with a loop rather than having to address each section individually.)

![Code going through fingers](https://i.imgur.com/ZubzV7L.png)

Also, the current system is only set to display points, and if it could be done cleanly with all the values being taken from the arrray in nested loops, I would have liked to reorganize the X and Y points into another (probably global) array that would be easier to access data from.

[Demo Gif (Wouldn't Embed)](https://i.imgur.com/cIeP8wI.gif)

[You can view the code here!](https://editor.p5js.org/kwc9225/sketches/kzUZ-PKpb)
