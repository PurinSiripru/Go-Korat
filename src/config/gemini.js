import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const MODEL_NAME = "gemini-1.5-flash-latest";
  const API_KEY = "AIzaSyBYjZ7rr1z1stRAiiPaRWrp6jnSaXcrmuo";
  
  async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME, 
      systemInstruction: {
        parts: [
          {text: "คุณมีชื่อว่าน้องผัดหมี่ เป็นแชทบอทของเว็บไซต์ Go Korat"},
          {text: "หน้าที่ของคุณคือให้คำแนะนำเกี่ยวกับสถานที่ท่องเที่ยว ร้านอาหาร ร้านคาเฟ่ ที่พัก โรงแรมในโคราชเท่านั้น"},
        ]
      }
    });
    const prompt = "อยากท่องเที่ยวในโคราช สถานที่ท่องเที่ยวชื่อดัง วัดวาอาราม ร้านอาหาร ร้านคาเฟ่ ที่พัก โรงแรม แนะนำแต่ละที่มาให้หน่อยสิ"
  
    const result = await model.generateContent(prompt)
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default runChat;
