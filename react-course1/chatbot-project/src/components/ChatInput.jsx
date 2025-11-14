import { useState} from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';
import dayjs from "dayjs";
import LoadingSpinnerImage from '../assets/loading-spinner.gif';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }
    setIsLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        id: crypto.randomUUID,
        message: inputText,
        sender: "user",
        time: dayjs().valueOf()
      },
      {
        id: crypto.randomUUID,
        message: (
          <img src={LoadingSpinnerImage} className="chat-message-loading" />
        ),
        sender: "robot",
        time: dayjs().valueOf()
      },
    ];

    setChatMessages(newChatMessages);
    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      //Borrar mensaje loading
      ...newChatMessages.slice(0, newChatMessages.length - 1),
      {
        id: crypto.randomUUID,
        message: response,
        sender: "robot",
        time: dayjs().valueOf()
      },
    ]);

    setIsLoading(false);
  }

  function keyDownHandler() {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearChatMessages(){
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Enviar un mensaje al Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={keyDownHandler}
        //Controlled Input
        value={inputText}
        disabled={isLoading}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Enviar
      </button>
      <button onClick={clearChatMessages} className="clear-button">
        Borrar
      </button>
    </div>
  );
}