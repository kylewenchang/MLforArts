# Long Short Term Story

For my project, I want to make a bot that types a story one word at a time, trading off "turns" with the user.

## Abstract
Using text generation with CharRNN, I want to make a game that lets the user play one word story with a machine learning model. The model would be trained on a variety of classic/children's stories, and generate text based on user input of a word. Because the text is generated on memory from only previously generated text, I hope that the base stories that I'm training on shouldn't have too strong of an influence, and just give the algorithm a vocabulary to work with and information about writing style/different patterns.

The interface would either be a chatbot style thing where the user types a word in a text bot and "sends" it to the story block of text, or just a continuous block of text that the user types in before the computer takes over and types a word when the user hits space. The computer would generate one character at a time until it generates a space; I also think this would be cool in terms of interface because it would be giving the bot a "typing" effect. It would be cool to add buttons to share the story (downloading, copying to clipboard, etc). It would either take place in a web interface or a p5 sketch.

## Inspiration
I like playing one word story.

However, sometimes it's hard to keep it going or introduce real action/story without a driving force behind it. It can be really fun when playing in a group where some people can carry things forward, but I'm not one of those people. (Machine learning is one of those people!)

I also think that text generation is facinating. I think about the saying about if monkeys could type. Computers can sometimes be smarter than monkeys.
