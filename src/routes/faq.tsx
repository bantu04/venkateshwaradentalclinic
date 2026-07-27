import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Venkateswara Dental Hospital" },
      {
        name: "description",
        content:
          "Answers to common questions about appointments, costs, root canal treatment and dental implants.",
      },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "Call us at 096763 16416, fill in the contact form on this site, or visit our clinic at SVSS Nivas Complex, Road No. 1, Sanath Nagar. We confirm appointments the same day.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept reimbursement-based dental insurance and provide itemised receipts. Cashless tie-ups are clinic-specific — please call ahead.",
  },
  {
    q: "What if I have a dental emergency?",
    a: "Call the clinic line. During working hours we will fit you in the same day. Outside hours, we return calls and can arrange next-morning care.",
  },
  {
    q: "How much does treatment cost?",
    a: "Every consultation includes a written estimate before any work begins. We're proud to be among the most transparent pricing in the area.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "A list of medications you take, any past dental records or X-rays if available, and your photo ID. That's it.",
  },
  {
    q: "What are your hygiene & sterilisation protocols?",
    a: "Autoclaved instruments, single-use disposables, surface-disinfection between patients, and HEPA filtration in treatment rooms.",
  },
  {
    q: "Do you treat children?",
    a: "Yes — pediatric consultations are paced patiently with a parent in the room throughout. Kids are welcome from age 2 onwards.",
  },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader eyebrow="Questions, Answered" title="Frequently asked." />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 divide-y divide-blush/40 border-y border-blush/40">
          {FAQS.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl text-charcoal">{f.q}</span>
                {open === i ? (
                  <Minus className="h-4 w-4 text-sage-dark shrink-0" />
                ) : (
                  <Plus className="h-4 w-4 text-sage-dark shrink-0" />
                )}
              </button>
              {open === i && <p className="pb-6 text-taupe leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
