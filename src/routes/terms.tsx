import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Venkateswara Dental Hospital" },
      { name: "description", content: "Appointment, cancellation and treatment terms." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-taupe leading-relaxed">
          <p>
            These terms govern your visit and treatment at Venkateswara Dental Hospital. By booking
            an appointment you acknowledge them.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Appointments & cancellations</h2>
          <p>
            Please give at least 4 hours notice to reschedule or cancel. Repeated no-shows may
            require a deposit for future bookings.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Treatment consent</h2>
          <p>
            All clinical procedures will be explained, including alternatives and risks, before
            written or verbal consent is obtained. You may withdraw consent at any point.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Payments</h2>
          <p>
            Estimates are provided in writing prior to treatment. Payment is due at the time of
            service unless otherwise agreed. Receipts are itemised for insurance reimbursement.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Liability</h2>
          <p>
            We deliver care in accordance with current clinical standards. Specific outcomes cannot
            be guaranteed; we will discuss realistic expectations during consultation.
          </p>
          <h2 className="font-serif text-2xl text-charcoal mt-8">Changes</h2>
          <p>
            These terms may be updated periodically. Material changes will be reflected on this
            page.
          </p>
          <p className="text-xs">Last updated: June 2026.</p>
        </div>
      </section>
    </>
  ),
});
