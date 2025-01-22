import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: "us-east-1", // Update with your region
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  }
});

export async function getPersonalizedRecommendations(userPreferences: any) {
  const prompt = {
    prompt: `Based on the user preferences: ${JSON.stringify(userPreferences)}, 
    suggest fashion items and style recommendations.`,
    max_tokens: 100,
    temperature: 0.7,
  };

  try {
    const command = new InvokeModelCommand({
      modelId: "anthropic.claude-v2", // or your preferred model
      body: JSON.stringify(prompt),
      contentType: "application/json",
    });

    const response = await client.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    return result.completion;
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    throw error;
  }
}

// Alternative using OpenAI
export async function getOpenAIRecommendations(userPreferences: any) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{
        role: "user",
        content: `Based on these preferences: ${JSON.stringify(userPreferences)}, suggest fashion items and style recommendations.`
      }],
      temperature: 0.7,
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}