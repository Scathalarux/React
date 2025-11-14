import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import UserProfileImage2 from '../assets/profile-1.jpg';
import './ChatMessage.css'

function ChatMessage({ message, sender, time }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} alt="" className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        <p>{message}</p>
        {time && (
          <div className="chat-message-time">
            {dayjs(time).format('HH:mm')}
          </div>
        )}
        </div>
      {sender === "user" && (
        <img src={UserProfileImage2} alt="" className="chat-message-profile" />
      )}

    </div>
  );
}

export default ChatMessage;