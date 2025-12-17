import { useState } from "react";
import { createNotifier, type Channel } from "../services/notifier";

export function NotificationDemo() {
  const [channel, setChannel] = useState<Channel>("email");
  const [message, setMessage] = useState("Hola mentee 👋");

  const handleSend = () => {
    const notifier = createNotifier(channel);
    notifier.send(message);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
      <h2>Notification Factory Demo</h2>

      <div style={{ marginBottom: 8 }}>
        <label>
          Canal:{" "}
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value as Channel)}
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>
          Mensaje:{" "}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: 240 }}
          />
        </label>
      </div>

      <button onClick={handleSend}>Enviar notificación</button>
    </div>
  );
}
