# Long Short Term Story

For my project, I want to make a bot that types a story one word at a time, trading off "turns" with the user.

## Abstract
Using text generation with CharRNN, I want to make a game that lets the user play one word story with a machine learning model. The model would be trained on a variety of classic/children's stories, and generate text based on user input of a word. Because the text is generated on memory from only previously generated text, I hope that the base stories that I'm training on shouldn't have too strong of an influence, and just give the algorithm a vocabulary to work with and information about writing style/different patterns.

The interface would either be a chatbot style thing where the user types a word in a text bot and "sends" it to the story block of text, or just a continuous block of text that the user types in before the computer takes over and types a word when the user hits space. The computer would generate one character at a time until it generates a space; I also think this would be cool in terms of interface because it would be giving the bot a "typing" effect. It would be cool to add buttons to share the story (downloading, copying to clipboard, etc). It would either take place in a web interface or a p5 sketch.

With machine learning models, it's usually the user giving an input, and getting an output, but I think by making the "output" a larger story, it allows the user to continuously add input and influence future text generation.

![CharRNN Training](https://i.imgur.com/moo827X.png)
CharRNN Training from a Previous Project

## Inspiration
I like playing one word story.

However, sometimes it's hard to keep it going or introduce real action/story without a driving force behind it. It can be really fun when playing in a group where some people can carry things forward, but I'm not one of those people. (Machine learning is one of those people!)

I was also inspired by a previous project where we used CharRNN and I generated text based on Moby Dick. I think that text generation is fascinating. We learn to tell based on stories we've heard the past, by picking up on patterns in them, and the fact that machine learning algorithms can do this in a sense is compelling to me.

## Audience
This project is for myself, people who want to play one word story as a game, a creative exercise, or just people who are curious about what their writing and a machine learning algorithm can form. They would either enter text into a box and press enter to add it to the story, or type in a text box with the story in it, and have their typing disabled after they hit space, while the computer is typing.

![Two Possible Interface Designs](https://imgur.com/kiRzUgi.png)
Two Possible Interface Designs

## Challenges
Given that this is somewhat of an extension of [Assignment 7,](https://github.com/kylewenchang/MLforArts/blob/main/Assignment7.md) where I used CharRNN for text generation based on Moby Dick, I hope that I don't face too many backend technical challenges. However, I would like to train the algorithm in a way that doesn't show too strong of an influence from any one story. Hopefully training on a variety of different styles makes the algorithm adaptable to multiple different styles rather than making the output messier. I also have no clue whether or not the algorithm and user would be able to output anything cohesive.

![Assignment 7](https://camo.githubusercontent.com/ce3f14888c73f4964dac3e290e9dda047a45ef9a5c54e7308fa737fb9257f2f8/68747470733a2f2f692e696d6775722e636f6d2f654f6262516c4b2e706e67)
Interface from Assignment 7
