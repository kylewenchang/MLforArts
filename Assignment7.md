## Reading Reflection

### Given that so many of the existing “big data” language models are trained with Western texts and proprietary datasets, what does it even mean to try to decolonize AI?

The fact that so many machine learning models are trained with data that only takes accepted Western culture into account poses an issue in that they would basically ignore/not serve those whose "input data" doesn't look like that, as the model would basically not know how to respond to this foreign-looking data. This issue compounds given the fact that most people doing machine larning (aside from large institutions who go through the process of data collection/labelling) train using public datasets or create models based on other models. I think a lot of this comes from convinience and that factors such as colonization have made Western texts/culture/ideas the most widespread and easily accessible. Because models reflect their input data, and will therefore most likely reflect the interests of those managing them, I think it's important to diversify/democratize the way public datasets are trained, but I don't know how feasable this is, especially given how quickly machine learning as a whole has evolved/is evolving.

## Assignment 7 (CharRNN Moby Dick)

For assignment 7, I decided to continue with the CharRNN example from class. After messing around with the text generation examples, I was most interested in the stateful character generation because it had been outputting interesting results and lstm learning is fascinating to me. I trained my model using a publically avaliable text file of Moby Dick using the CharRNN Google Colab Project, but was having trouble when it came to running the example code becuase I was opening index.html through Chrome and not VS Code, so it couldn't access local files. I tried running chrome with a flag, which worked, but I eventually found out that just running it through VS Code was a much better solution.

CORS Error
![CORS Error](https://i.imgur.com/ynbnGhf.png)

I was also getting errors with the imported libraries, so I ended up updating the ml5 version, and removing some unnecessary libraries that were causing errors.

Library Errors
![Library Errors](https://i.imgur.com/ZDxr8Iq.png)

Old Library Imports
![Old Library Imports](https://i.imgur.com/02e5S3Z.png)

New Library Imports
![New Library Imports](https://i.imgur.com/SQCFlwC.png)

After I got the example code working with the Woolf model, I imported my own model and pointed the code towards it.
