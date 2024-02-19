"use service"
const OpenAI = require("openai")
const axios = require("axios")
const client = axios.create({
    proxy: {
    protocol: 'http',
  },
  headers:{
  "Authorization": `Bearer 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` ,
  'Content-Type': 'application/json'
  }
})

 async function main() {
  const params = {
  prompt: "How are you?",
  model: "text-davinci-003",
  max_tokens: 10,
  temperature: 0,
};
 
client
  .post("https://api.openai.com/v1/models", JSON.stringify(params) )
  .then((result:any) => {
    console.log(result.data.choices[0].text);
  })
  .catch((err:any) => {
    console.log(err);
  });

}
main()

