const { GoogleGenerativeAI } = require("@google/generative-ai");


const apiKey = process.env.REACT_APP_GENAI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(movieQuery) {
  const chatSession = model.startChat({
    generationConfig,
  });

  const result = await chatSession.sendMessage(movieQuery);
  const arr = result.response.text();
  const array = arr.split(",");
  const first = array[0];
  array[0] = first.slice(1);
  const moviesList = array.slice(0, 99);
  return moviesList;
}

export default run;
