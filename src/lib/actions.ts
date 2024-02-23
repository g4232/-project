"use server"
import OpenAI from "openai";
import  {HttpsProxyAgent} from "https-proxy-agent"
const httpsAgant = new HttpsProxyAgent("http://127.0.0.1:10809")
const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY,httpAgent:httpsAgant})

export const OpenaiService =async (content:string)=>{
   const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: content }],
    model: "gpt-3.5-turbo",
  });

  return  completion.choices[0].message;
  }
export const convertPdfToDocx = async (pdfFile:string,docFile:string)=>{

}
