// src/services/aiService.ts
export async function getAIResponse(userInput: string) {
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Fashion AI assistant. Be concise." },
        { role: "user", content: userInput }
      ]
    })
  })
  .then(res => res.json())
  .then(data => data.choices[0].message.content);
}