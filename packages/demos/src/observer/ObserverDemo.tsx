"use client";

import { useEffect, useMemo, useState } from "react";
import { Controls } from "./components/Controls";
import { ObserverList } from "./components/ObserverList";
import { Subject } from "./services/Subject";
import { AlertObserver } from "./services/observers/AlertObserver";
import { ConsoleObserver } from "./services/observers/ConsoleObserver";
import { CountingObserver } from "./services/observers/CountingObserver";
import { CollectingObserver } from "./services/observers/CollectingObserver";
import { type NotificationPayload } from "./services/types";

export const ObserverDemo = () => {
  const subject = useMemo(() => new Subject<NotificationPayload>(), []);
  const consoleObserver = useMemo(() => new ConsoleObserver(), []);
  const alertObserver = useMemo(() => new AlertObserver(), []);
  const countingObserver = useMemo(() => new CountingObserver(), []);

  const [events, setEvents] = useState<NotificationPayload[]>([]);
  const [toggles, setToggles] = useState({
    console: true,
    alert: false,
    counting: true,
  });

  const uiObserver = useMemo(
    () =>
      new CollectingObserver<NotificationPayload>("ui-list", (payload) => {
        setEvents((prev) => {
          const next = [payload, ...prev];
          return next.slice(0, 8);
        });
      }),
    []
  );

  useEffect(() => subject.subscribe(uiObserver), [subject, uiObserver]);

  useEffect(() => {
    if (!toggles.console) return;
    return subject.subscribe(consoleObserver);
  }, [consoleObserver, subject, toggles.console]);

  useEffect(() => {
    if (!toggles.alert) return;
    return subject.subscribe(alertObserver);
  }, [alertObserver, subject, toggles.alert]);

  useEffect(() => {
    if (!toggles.counting) return;
    return subject.subscribe(countingObserver);
  }, [countingObserver, subject, toggles.counting]);

  const emit = (payload: NotificationPayload) => {
    subject.notify(payload);
  };

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Observer Pattern – React + TypeScript</h1>
      <p style={{ maxWidth: 520 }}>
        Un <b>sujeto</b> mantiene una lista de observadores y los notifica cuando
        hay nuevos eventos. Cambia qué observadores están suscritos y dispara
        notificaciones para ver cómo reaccionan.
      </p>

      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
        <Controls toggles={toggles} onToggle={setToggles} onEmit={emit} />
        <ObserverList
          events={events}
          activeObservers={subject.ids()}
          totalSeen={countingObserver.count()}
        />
      </section>
    </main>
  );
};

export default ObserverDemo;
