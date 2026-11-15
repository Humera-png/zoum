import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, ContactBlock } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | ZOUM Consultancy" },
      {
        name: "description",
        content:
          "Terms for using zoumconsultancy.com and ZOUM Consultancy's services, including course enrollment, payments and the 12-day refund policy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro='These terms apply to your use of zoumconsultancy.com and the services offered by ZOUM Consultancy ("ZOUM", "we", "us"). By using this website or our services, you agree to them.'
    >
      <section>
        <h2>Our services</h2>
        <p>
          ZOUM provides job placement and recruitment, learning and development courses, AI and IT
          services, website development, business process outsourcing and business consultancy.
          Details of each service are on its page. Work for businesses is agreed separately with
          each client, and that agreement applies alongside these terms.
        </p>
      </section>

      <section>
        <h2>Job placement</h2>
        <p>
          We work to match job seekers with suitable openings, but we cannot guarantee a job, an
          interview or a particular salary. Hiring decisions are made by employers. Please make sure
          the information and resume you share with us are accurate.
        </p>
      </section>

      <section>
        <h2>Courses and enrollment</h2>
        <ul>
          <li>You need to sign in or create an account to enroll in a course.</li>
          <li>
            Course content, schedules and formats (online or in person) are described on each course
            page and may be updated from time to time.
          </li>
          <li>
            Course materials are for your personal learning only and may not be copied, shared or
            resold.
          </li>
          <li>Completing a course helps you prepare for jobs but does not guarantee employment.</li>
        </ul>
      </section>

      <section>
        <h2>Payments</h2>
        <p>
          Course fees are shown in Indian Rupees (₹) on each course page and are paid online through
          Razorpay, which supports cards, UPI and netbanking. The price charged is the price shown
          at the time you pay. Prices for website packages and business services vary depending on
          your requirements and are confirmed with you before work starts.
        </p>
      </section>

      <section id="refunds" className="scroll-mt-32">
        <h2>Refund policy</h2>
        <ul>
          <li>You can request a refund for a course within 12 days of your payment.</li>
          <li>
            To request a refund, email{" "}
            <a href="mailto:contact@zoumconsultancy.com">contact@zoumconsultancy.com</a> or WhatsApp
            us with your name, the course and your payment details.
          </li>
          <li>
            Approved refunds are returned to your original payment method through Razorpay. Your
            bank may take a few working days to show the amount.
          </li>
          <li>Requests made more than 12 days after payment are not eligible for a refund.</li>
        </ul>
      </section>

      <section>
        <h2>Using this website</h2>
        <p>
          Please don't misuse this website, for example by trying to break its security, submitting
          false information, or copying its content, logo or design without permission. All content
          on this website belongs to ZOUM Consultancy unless stated otherwise.
        </p>
      </section>

      <section>
        <h2>Third-party links and ads</h2>
        <p>
          This website may show ads and link to other websites. We are not responsible for the
          content or practices of those websites. See our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> for how ads and cookies work on this
          site.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          We provide information on this website in good faith but cannot guarantee it is always
          complete or up to date. To the extent allowed by law, ZOUM is not liable for indirect
          losses arising from your use of this website or our services.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes are subject to the courts of
          Jaipur, Rajasthan.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The latest version will always be on this
          page.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <ContactBlock />
      </section>
    </LegalPage>
  );
}
