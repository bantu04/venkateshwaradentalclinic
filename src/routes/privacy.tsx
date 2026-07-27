import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Venkateswara Dental Hospital" },
      { name: "description", content: "How we collect, use and protect your data." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 prose-content space-y-6 text-taupe leading-relaxed">
          <p>
            This page is maintained by Venkateswara Dental Hospital to answer common questions about
            how we handle your personal and clinical information.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Information we collect</h2>
          <p>
            Contact details you provide when booking, plus clinical history you share during
            consultations. We do not collect data passively beyond standard, anonymous website
            analytics.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">How we use it</h2>
          <p>
            To deliver dental care, send appointment reminders, and maintain your patient record. We
            do not sell or share your information with third parties for marketing.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Patient confidentiality</h2>
          <p>
            Clinical records are accessible only to treating clinicians and authorised staff, and
            are retained as required by applicable medical regulations.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Cookies</h2>
          <p>
            This website uses minimal cookies for navigation and anonymous usage analytics. You can
            disable cookies in your browser.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Your rights</h2>
          <p>
            You may request a copy of, correction to, or deletion of your personal information by
            contacting the clinic. Subject to record-retention requirements, we will action requests
            promptly.
          </p>
          <p className="text-xs">Last updated: June 2026.</p>
        </div>
      </section>
    </>
  ),
});
