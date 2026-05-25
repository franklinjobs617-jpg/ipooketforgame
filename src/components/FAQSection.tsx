import type { FaqItem } from "@/lib/guides";

export function FAQSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <p className="eyebrow">Player questions</p>
      <h2 id="faq-heading">Romestead FAQ</h2>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <article className="faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
