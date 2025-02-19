let mInput;
let mButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  mInput = createInput("A picture of a cyborg smoking a cigarette in the 1940s");
  mInput.position(4, 4);
  mInput.size(200, 24);

  mButton = createButton("Generate");
  mButton.position(210, 4);
  mButton.mousePressed(runChat);
}

let mCaption = "";
function draw() {
  background(220);
  text(mCaption, 0, 200);
}

async function runChat() {
  // Add instruction to answer in Shakespearean English
  let shakespeareanInstruction = "Pray, answereth in the manner of Shakespeare: ";
  let mPrompt = {
    parts: [
      { text: shakespeareanInstruction + mInput.value() },
    ],
  };
  mCaption = await generateContent(mPrompt);
}
