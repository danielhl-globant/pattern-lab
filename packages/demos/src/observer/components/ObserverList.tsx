"use client";

import { type NotificationPayload } from "../services/types";

interface ObserverListProps {
  events: NotificationPayload[];
  activeObservers: string[];
  totalSeen: number;
}

export function ObserverList({
  events,
  activeObservers,
  totalSeen,
}: ObserverListProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <h2>Observadores</h2>
      <p style={{ margin: "4px 0" }}>
        Activos: {activeObservers.length} ({activeObservers.join(", ") || "—"})
      </p>
      <p style={{ margin: "4px 0" }}>Entregadas (contador): {totalSeen}</p>

      <h3 style={{ marginTop: 12 }}>Últimos eventos</h3>
      {events.length === 0 ? (
        <div style={{ opacity: 0.7 }}>Aún no hay notificaciones</div>
      ) : (
        <ul style={{ paddingLeft: 16 }}>
          {events.map((evt, idx) => (
            <li key={`${evt.timestamp}-${idx}`}>
              <b>{evt.level}</b> — {evt.message} (
              {new Date(evt.timestamp).toLocaleTimeString()})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
