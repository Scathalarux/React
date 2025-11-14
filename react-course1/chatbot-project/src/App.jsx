import { useState, useEffect} from "react";
import {ChatInput} from './components/ChatInput';
import {ChatMessages} from './components/ChatMessages';
import "./App.css";
import { Chatbot } from "supersimpledev";


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(()=>{
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a nice day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  },[]);

  useEffect(()=>{
    localStorage.setItem('message', JSON.stringify(chatMessages));
  },[chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
