import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="page">
      <section class="hero-card">
        <p class="eyebrow">Angular Demo</p>
        <h1>Hello {{ value }} 👋</h1>
        <p class="subtitle">
          This starter app now has a cleaner, more polished layout while staying intentionally simple.
        </p>

        <div class="meta-grid">
          <article class="meta-item">
            <h2>Environment</h2>
            <p>{{ environment }}</p>
          </article>
          <article class="meta-item">
            <h2>Today</h2>
            <p>{{ today | date: 'fullDate' }}</p>
          </article>
        </div>

        <button type="button" (click)="refreshTime()">Refresh timestamp</button>
        <p class="timestamp">Last refreshed: {{ today | date: 'shortTime' }}</p>
      </section>

      <aside class="url-panel" aria-label="Website details">
        <p class="url-title">Website Info</p>
        <p class="url-label">Website URL</p>
        <p class="url-value">{{ websiteUrl }}</p>
      </aside>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        font-family: Inter, Segoe UI, Roboto, Arial, sans-serif;
        color: #1f2937;
      }

      .page {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 2rem;
        background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      }

      .hero-card {
        width: min(720px, 100%);
        border-radius: 1rem;
        padding: 2rem;
        background: #ffffff;
        box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
      }

      .eyebrow {
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 0.75rem;
        color: #64748b;
      }

      h1 {
        margin: 0.5rem 0 0;
        font-size: clamp(1.8rem, 4vw, 2.6rem);
        line-height: 1.2;
      }

      .subtitle {
        margin: 1rem 0 1.5rem;
        color: #475569;
      }

      .meta-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin-bottom: 1.5rem;
      }

      .meta-item {
        border: 1px solid #e2e8f0;
        border-radius: 0.75rem;
        padding: 0.9rem 1rem;
        background: #f8fafc;
      }

      .meta-item h2 {
        margin: 0;
        font-size: 0.9rem;
        color: #334155;
      }

      .meta-item p {
        margin: 0.4rem 0 0;
      }

      button {
        border: 0;
        border-radius: 0.6rem;
        padding: 0.65rem 1rem;
        font-size: 0.95rem;
        font-weight: 600;
        color: #fff;
        background: #2563eb;
        cursor: pointer;
      }

      button:hover {
        background: #1d4ed8;
      }

      .timestamp {
        margin: 0.75rem 0 0;
        font-size: 0.85rem;
        color: #64748b;
      }

      .url-panel {
        position: fixed;
        right: 1.25rem;
        bottom: 1.25rem;
        width: min(360px, calc(100vw - 2.5rem));
        border: 1px solid #e2e8f0;
        border-radius: 0.75rem;
        padding: 0.75rem 0.9rem;
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
      }

      .url-title {
        margin: 0;
        font-weight: 700;
        font-size: 0.86rem;
        color: #0f172a;
      }

      .url-label {
        margin: 0.35rem 0 0;
        font-size: 0.73rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #64748b;
      }

      .url-value {
        margin: 0.25rem 0 0;
        font-size: 0.86rem;
        color: #1e293b;
        word-break: break-all;
      }
    `,
  ],
})
export class AppComponent {
  value = 'World';
  environment = 'Angular 13 Starter';
  today = new Date();
  websiteUrl = window.location.href;

  refreshTime(): void {
    this.today = new Date();
  }
}
