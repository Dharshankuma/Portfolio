const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI(process.env.GOOGLE_API_KEY);

const polishMessage = async (message) => {
  try {
    console.log("Into to the service");
    const prompt = `
Rewrite the following message in a professional tone.

Rules:
- Return ONLY the improved message.
- Do NOT give multiple options.
- Do NOT give explanations.
- Do NOT use headings.
- Do NOT add tips.
- Keep it concise.
- Do not use markdown formatting.

Message:
"${message}"
`;

    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text;
    const text = response.text();

    return text;
  } catch (err) {
    console.log("AI Error: ", err);
    throw err;
  }
};

module.exports = { polishMessage };
