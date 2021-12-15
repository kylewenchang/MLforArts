// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Stateful LSTM Text Generation Example using p5.js
This uses a pre-trained model on a corpus of Virginia Woolf
For more models see: https://github.com/ml5js/ml5-data-and-training/tree/master/models/lstm
=== */

let charRNN;
let textInput;
let generating = false;
let userText = "";
let fullText = "";
let boxLocked = false;

const canvasHeight = 100;

function setup() {
  noCanvas();
  // Create the LSTM Generator passing it the model directory
  charRNN = ml5.charRNN('models/stories/', modelReady);
  // Grab the DOM elements
  textInput = select('#textInput');

  // DOM element events
  textInput.input(userTyping);
}

function userTyping(){
  userText = document.getElementById("textInput").value;
  if (userText[userText.length - 1] == " "){
      console.log("SPACE TYPED BY USER")
      lockTextbox();
      readFromBox();
      generate();
    }
}

function lockTextbox(){
  document.getElementById("textInput").disabled = true;
  boxLocked = true;
  console.log("Text box locked");
}

function unlockTextbox(){
  document.getElementById("textInput").disabled = false;
  document.getElementById("textInput").focus();
  boxLocked = true;
  console.log("Text box unlocked");
}

function readFromBox(){
  fullText = document.getElementById("textInput").value;
}

function writeInBox(){
  document.getElementById("textInput").value = fullText;
}

function checkStop(){
  if(generating && fullText[fullText.length-1] == " "){
    console.log("SPACE PRESSED BY MODEL")
    generate();
    unlockTextbox();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, canvasHeight);
}

async function modelReady() {
  select('#status').html('Model Loaded');
  resetModel();
}

function resetModel() {
  charRNN.reset();
  const seed = fullText;
  charRNN.feed(seed);
  console.log("Model Reset");}

function seedModel() {
  const seed = fullText;
  charRNN.feed(seed);
  console.log("Model Seeded");
}

function generate() {
  if (generating) {
    generating = false;
  } else {
    generating = true;
    loopRNN();
  }
}

async function loopRNN() {
  while (generating) {
    await predict();
  }
}

async function predict() {
  const temperature = 0.75;
  const next = await charRNN.predict(temperature);
  await charRNN.feed(next.sample);
  fullText = fullText + next.sample;
  writeInBox();
  checkStop();
}