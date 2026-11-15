import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, ContactBlock } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ZOUM Consultancy" },
      {
        name: "description",
        content:
          "How ZOUM Consultancy collects, uses and protects your information, including cookies, Google Analytics, Google AdSense advertising and Razorpay payments.",
      },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro='This Privacy Policy explains how ZOUM Consultancy ("ZOUM", "we", "us") collects, uses and protects your information when you use zoumconsultancy.com and our services. By using this website, you agree to this policy.'
    >
      <section>
        <h2>Information we collect</h2>
        <p>
          We only collect information you choose to give us, plus basic technical data needed to run
          the website:
        </p>
        <ul>
          <li>
            <strong>Contact and enquiry forms:</strong> your name, email address, phone number,
            company name, website, and the message you send us.
          </li>
          <li>
            <strong>Job applications:</strong> details such as your name, contact details, date of
            birth, gender, city, education, experience, current and expected salary, and your resume
            if you upload one.
          </li>
          <li>
            <strong>Hiring requests from businesses:</strong> company name, contact person, the
            roles you need and the number of people.
          </li>
          <li>
            <strong>Accounts and course enrollments:</strong> when you sign in or create an account,
            your name and email address. When you buy a course, a record of which course you bought
            and the payment status.
          </li>
          <li>
            <strong>Usage data:</strong> pages visited, device and browser type, approximate
            location (city level) and how you arrived at the site, collected through cookies (see
            below).
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>To reply to your enquiries and provide the services you ask for.</li>
          <li>
            To match job seekers with suitable openings and share applications with employers you
            are being considered for.
          </li>
          <li>To enroll you in courses, process payments and send you course information.</li>
          <li>To understand how visitors use the website so we can improve it.</li>
          <li>To show advertising that helps keep parts of this website free.</li>
          <li>To meet legal, tax and accounting requirements.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>

      <section>
        <h2>Payments</h2>
        <p>
          Course payments are processed by Razorpay. Your card, UPI or bank details are entered on
          Razorpay's secure checkout and are never stored on our servers. Razorpay's handling of
          your data is covered by the{" "}
          <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">
            Razorpay Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Cookies, analytics and advertising</h2>
        <p>
          Cookies are small files stored on your device. We and our partners use them to keep you
          signed in, measure traffic and show ads.
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> helps us understand how visitors use the site, such as
            which pages are viewed and how people find us. This data is aggregated and does not
            identify you personally.
          </li>
          <li>
            <strong>Google AdSense:</strong> third-party vendors, including Google, use cookies to
            serve ads based on your previous visits to this website or other websites. Google's use
            of advertising cookies enables it and its partners to serve ads to you based on your
            visits to this site and/or other sites on the Internet.
          </li>
          <li>
            You can opt out of personalised advertising by visiting{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            , or opt out of some third-party vendors' use of cookies for personalised advertising at{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              www.aboutads.info
            </a>
            .
          </li>
          <li>
            Learn more about{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses information from sites that use its services
            </a>
            .
          </li>
        </ul>
        <p>
          You can also block or delete cookies in your browser settings. Some parts of the site,
          such as signing in, may not work without them.
        </p>
      </section>

      <section>
        <h2>Service providers</h2>
        <p>
          We use trusted providers to run this website: hosting (Vercel and Cloudflare), sign-in
          (Clerk), email delivery, payments (Razorpay), and Google for analytics and advertising.
          They only receive the information they need to perform their service for us.
        </p>
      </section>

      <section>
        <h2>How long we keep your information</h2>
        <p>
          We keep enquiries and job applications for as long as they are useful for the purpose you
          shared them for, and course and payment records for as long as the law requires. You can
          ask us to delete your information at any time.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p>
          You can ask us to access, correct or delete the personal information we hold about you, or
          withdraw your consent to us using it, by contacting us using the details below. We will
          respond within a reasonable time.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use reasonable technical measures, such as encrypted (HTTPS) connections, to protect
          your information. No method of sending or storing data online is completely secure, but we
          work to keep your information safe.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This website is not intended for children under 13, and we do not knowingly collect their
          information.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be on this
          page, with the date it was last updated.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <ContactBlock />
      </section>
    </LegalPage>
  );
}
