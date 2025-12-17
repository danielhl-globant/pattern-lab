import { badCounter } from "./badCounter";
import { counter } from "./counter";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const SingletonDemo = () => {
  const sVal = counter.bump(1);
  const mVal = badCounter.bump(1);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>HMR Contrast: Singleton vs Módulo</h1>
      <section>
        <h2>Singleton (globalThis)</h2>
        <p>
          <b>value:</b> {sVal}
        </p>
        <p>
          <b>id:</b> {counter.id}
        </p>
        <p>
          <b>createdAt:</b> {counter.createdAt}
        </p>
      </section>
      <section style={{ marginTop: 16 }} key={Date.now().toString()}>
        <h2>Solo módulo (sin globalThis)</h2>
        <p>
          <b>value:</b> {mVal}
        </p>
        <p>
          <b>id:</b> {badCounter.id}
        </p>
        <p>
          <b>createdAt:</b> {badCounter.createdAt}
        </p>
      </section>
      <ol style={{ marginTop: 24 }}>
        <li>
          Refresca varias veces: ambos suben (mismo proceso =&gt; módulo
          cacheado).
        </li>
        <li>
          Ahora **edita este archivo** (por ejemplo, cambia este texto) y guarda
          para disparar <b>HMR</b>.
        </li>
        <li>
          Observa: el **módulo** cambia de <code>id</code>/
          <code>createdAt</code> (se reinstanció), mientras que el **singleton**
          mantiene sus valores.
        </li>
      </ol>
    </main>
  );
}

export default SingletonDemo;
