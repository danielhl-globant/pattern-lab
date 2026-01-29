"use client";

import { useState } from "react";
import { type NotificationPayload } from "../services/types";

type ToggleState = {
  console: boolean;
  alert: boolean;
  counting: boolean;
};

interface ControlsProps {
  toggles: ToggleState;
  onToggle: (next: ToggleState) => void;
  onEmit: (payload: NotificationPayload) => void;
}

export function Controls({ toggles, onToggle, onEmit }: ControlsProps) {
  const [message, setMessage] = useState("Nueva notificación");
  const [level, setLevel] = useState<NotificationPayload["level"]>("info");

  const emit = () => {
    onEmit({
      message,
      level,
      timestamp: Date.now(),
    });
  };

  const handleToggle = (key: keyof ToggleState) => {
    onToggle({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <h2>Emisor</h2>

      <div style={{ marginBottom: 12 }}>
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

      <div style={{ marginBottom: 12 }}>
        <label>
          Nivel:{" "}
          <select
            value={level}
            onChange={(e) =>
              setLevel(e.target.value as NotificationPayload["level"])
            }
          >
            <option value="info">info</option>
            <option value="warn">warn</option>
          </select>
        </label>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={toggles.console}
            onChange={() => handleToggle("console")}
          />{" "}
          Console
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.alert}
            onChange={() => handleToggle("alert")}
          />{" "}
          Alert
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.counting}
            onChange={() => handleToggle("counting")}
          />{" "}
          Counting
        </label>
      </div>

      <button onClick={emit}>Enviar notificación</button>
    </div>
  );
}
