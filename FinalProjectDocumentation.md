# Long Short Term Story

Long Short Term Story is a web app where the user is able to write a story with a text generation algorithm, one word at a time.

## Description
Using ml5's implementation of CharRNN, Long Short Term Story allows the user to 

## Inspiration
My main inspiration for this project was the game One Word Story, which functions in a similar way. Players sit in a circle, creating a story by going around the circle and each saying a word at a time. I was also inspired by a previous project where we used CharRNN and I generated text based on Moby Dick, and just the possibilities of text generation in general. We learn to tell based on stories we've heard the past, by picking up on patterns in them, and the fact that machine learning algorithms can do this in a sense is compelling to me.

The fluidity of the interaction with the user and model typing into the same text box was meant to feel almost as if the user and model were typing in the same Google doc.

Something that I didn't consider until it was brought up after my presentation was the similarity to the predictive text feature seen on phone keyboards. In retrospect, using a model for that purpose may have been more fruitful.

## Process
Before beginning the project, I considered a few different machine learning models. I looked on Hugging Face, and would have used xlnet-base-cased, however, I don't really have much experience with PyTorch or Tensorflow, so I would have to access it through the API. However, the interaction portion of this project was important to me; I wanted the feedback to be immediate, with the computer typing as soon as the user hit space. Because of that, I continued my experimenting with CharRNN, first modifying the example code to start generating when the user hit space, then writing code to make the text generation stop when the computer "typed" a space.

I originally did this by storing the old text and new text as separate variables, with newText always updating to match the text box text in the draw function. I would then check if the user typed a space every time oldText was not equal to newText. However, using the draw function posed issues (I think with the asynchronous functions used for CharRNN in the example project.) The main issue was that characters would seem to get "caught" in the character buffer, with some characters that should have been typed pre-space being typed post-space.

I tried to debug the code for a while, and after getting advice from Dan that the draw function was probably not well suited, in the end the solution to this was to rewrite a lot of the code I had written, now removing the draw function and only updating when the text box is "input" into.
```
textInput.input(userTyping);
```

The userTyping function checks if the last character typed was a space, and if so, locks the textbox and starts generating. While generating, the code checks if the last character typed by the model was a space every time a character is generated. If a space is detected, the computer stops generating, unlocking the box so the user can type again.

Another important part of the project was to reformat the example code's inteface to fit my project more. Although it still resembles the example project in terms of style, I think the changes I made to the interface make it better suited for what I was trying to do.

Old Interface            |  New Interface
:-------------------------:|:-------------------------:
![Old Interface](https://imgur.com/ZXzkPJp.png)  |  ![New Interface](https://imgur.com/VOs1kAa.png)

Up until this point I had been using the CharRNN model trained on Moby Dick, but I trained a new CharRNN model on Alice's Adventures in Wonderland, The Wonderful Wizard of Oz, and Hans Christian Andersen's Fairy tales from the Gutenberg library in Google Colab. I hoped that by using a variety of stories, and the fact that the model uses Long Short Term Memory, would mean that not too much of the original stories would come through to the text generation algorithm, mostly just the vocabulary.

In order to clean up the training data, I moved the text from the all three stories into one document, removed all the line breaks and extraneous characters as a result of the OCR process (a lot of underscores before and after words that were probably gotten from underlines, also formatting charcters, like decorative characters around chapter markers (ex. **** Chapter 4 ****), and the chapter markers themselves). Another issue caused by scanning the text was things like extraneous spaces. I just used Find and Replace to change every occurance of a double space to a single space, and made sure punctuation like commas and periods were always followed by a space.

![Google Colab Training](https://imgur.com/1uIV6SK.png)

## Audience/Context
This project is for myself, people who want to play one word story as a game, a creative exercise, or just people who are curious about what their writing and a machine learning algorithm can form. Because the results of the text generation are not really sensible, I don't imagine actual writers using this for inspiration. To me, the main appeal of the project comes though the interactivity and the fluidity, which gives the user the sense that they really are writing with another entity, however incompentent it may be. Because of this, I think its ideal form would be a finished web app as one of those "machine learning experiment web apps" for fun.

## User Testing
