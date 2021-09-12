### Explore ImageNet. What surprises you about this data set? What questions do you have? Thinking back to last week’s assignment, can you think of any ethical considerations around how this data was collected? Are there privacy considerations with the data?

I wasn't able to download the ImageNet dataset, but after looking at it in class, I'm surprised by how many categorized images there are. I wonder where the images came from and whether or not they're manually labelled. If so, I wonder how much cultural bias played a role into the categorization. If they were publically sourced, I'm curious about licensing and consent of the original rights holders. I assume privacy concerns might be why there aren't people in the dataset.

### Using the ml5.js examples above, try running image classification on a variety of images. Pick at least 10 objects in your room. How many of these does it recognize? What other aspects of the image affect the classification, including but not limited to position, scale, lighting, etc.

When I held up my water bottle, it labeled it as hairspray, and occasionally, water bottle would pop up at the bottom for a split second. I assume it has something to do with a color, the fact that the lighting is bad, and also the busy background. It labelled a camera as a projector, probably recognizing the lens. It didn't recognize most of the images I tried, but what I found intersting was how it confused a turned-on phone for a TV. With no sense of scale, and the fronts of phones being so indescript, there's not very much visual distinction.

### Document your thoughts on MobileNet and image classification in a blog post and add a link to the Assignment 1b Wiki.

I think the fact that MobileNet makes image classification so accessible for developers and also on a wide variety of devices is really great. It's important for CV algorithms to be able to run on mobile devices because that's where most people are using their cameras, and image classification lays the groundwork for a lot of possibilities.
