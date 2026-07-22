import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "@/components/ServicePage";
import { PageBackdrop } from "@/components/PageBackdrop";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/services/socialmedia")({
  head: () => ({
    meta: [
      {
        title: "Social Media Marketing Agency Jaipur | Brand Growth & Digital Strategy | ZOUM",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy — social media marketing agency in Jaipur. Strategic content, paid campaigns, brand growth, Instagram & LinkedIn management, and digital marketing across India.",
      },
      { property: "og:title", content: "Social Media Marketing | ZOUM Consultancy Jaipur" },
      {
        property: "og:description",
        content:
          "Grow your brand online with ZOUM's social media marketing team. Content strategy, paid ads, and community management that convert attention into leads.",
      },
      { property: "og:url", content: "https://zoumconsultancy.com/services/socialmedia" },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/socialmedia" }],
  }),

  component: MarketingPage,
});

type StrategyItem = {
  code: string;
  tag: string;
  title: string;
  desc: string;
  points: string[];
};

const strategies: StrategyItem[] = [
  {
    code: "01",
    tag: "Strategy",

    title: "Brand Strategy & Positioning",

    desc: "We define how your brand should appear online by building a clear strategy based on your audience, competitors, and business goals.",

    points: ["Audience research", "Brand messaging", "Competitor analysis", "Platform selection"],
  },

  {
    code: "02",
    tag: "Content",

    title: "Content Marketing System",

    desc: "We create content systems that attract attention, educate customers, and build long-term trust with your audience.",

    points: [
      "Content planning",

      "Creative direction",

      "Short-form videos",

      "Storytelling framework",
    ],
  },

  {
    code: "03",
    tag: "Management",

    title: "Social Media Management",

    desc: "Complete management of your social channels with consistent publishing, engagement, and performance improvement.",

    points: [
      "Instagram management",

      "LinkedIn growth",

      "Community engagement",

      "Monthly reporting",
    ],
  },

  {
    code: "04",
    tag: "Advertising",

    title: "Paid Social Campaigns",

    desc: "Performance-focused advertising campaigns designed to generate qualified leads and increase conversions.",

    points: ["Meta advertising", "Audience targeting", "A/B testing", "ROI optimization"],
  },

  {
    code: "05",
    tag: "Authority",

    title: "Executive Brand Building",

    desc: "We help founders and companies become trusted voices through strategic personal branding and thought leadership.",

    points: ["LinkedIn strategy", "Founder branding", "Industry visibility", "Online reputation"],
  },

  {
    code: "06",
    tag: "Analytics",

    title: "Growth Optimization",

    desc: "We analyze your marketing data and continuously improve your strategy to create sustainable growth.",

    points: [
      "Performance tracking",

      "Growth reports",

      "Conversion analysis",

      "Strategy improvements",
    ],
  },
];

function StrategyCard({
  item,

  index,
}: {
  item: StrategyItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,

        y: 40,
      }}
      whileInView={{
        opacity: 1,

        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.08,

        duration: 0.5,
      }}
      className="

group

glass

rounded-3xl

p-8

relative

overflow-hidden

hover:-translate-y-2

transition-all

duration-500

"
    >
      <div
        className="

absolute

right-[-60px]

top-[-60px]

w-48

h-48

rounded-full

bg-lime/20

blur-3xl

opacity-0

group-hover:opacity-100

transition

"
      />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <span
            className="

text-lime

text-xs

tracking-[0.3em]

"
          >
            S{item.code}
          </span>

          <span
            className="

border

rounded-full

px-3

py-1

text-xs

uppercase

text-muted-foreground

"
          >
            {item.tag}
          </span>
        </div>

        <h3
          className="

font-display

text-3xl

mb-4

"
        >
          {item.title}
        </h3>

        <p
          className="

text-muted-foreground

leading-relaxed

"
        >
          {item.desc}
        </p>

        <div className="mt-7 space-y-3">
          {item.points.map((p: string) => (
            <div
              key={p}
              className="

flex

items-center

gap-3

text-sm

"
            >
              <span
                className="

h-2 w-2

rounded-full

bg-lime

"
              />

              {p}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MarketingPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Social Media Marketing"
          title="Posting but"
          italic="not converting?"
          sub="Content without a strategy just fills a feed. We build the system behind it — message, content, and channels working together — so attention turns into leads."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="Why posting more isn't the fix" kicker="/ the problem">
              <div className="glass-strong rounded-3xl p-10">
                <p className="font-serif italic text-3xl">
                  "More posts without a strategy just means more content nobody was waiting for."
                </p>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  If your content isn't converting, the issue usually isn't effort — it's that
                  there's no system connecting what you post to what you're trying to sell. We
                  build that system: strategy, content, and paid reach working together.
                </p>
              </div>
            </Section>

            <Section id="process" title="Our Social Growth System" kicker="/ methodology">
              <div className="grid md:grid-cols-2 gap-8">
                {strategies.map((item, index) => (
                  <StrategyCard key={item.code} item={item} index={index} />
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Frequently asked" kicker="/ faq">
              <FAQSection
                items={[
                  {
                    q: "How does social media marketing actually generate leads?",
                    a: "By pairing content that earns attention with a clear next step — a landing page, a DM flow, or a paid campaign — so people who engage have somewhere to go, instead of just scrolling past.",
                  },
                  {
                    q: "How long until we see results?",
                    a: "Engagement and reach typically build within 4–6 weeks. Lead volume follows once the content-to-conversion system is fully in place — usually within the first two to three months.",
                  },
                  {
                    q: "Do you handle paid ads too, or just organic content?",
                    a: "Both. We build organic content and paid campaigns as one system, not two separate efforts, so they reinforce each other instead of competing for budget.",
                  },
                  {
                    q: "Which platforms do you work on?",
                    a: "Primarily Instagram and LinkedIn, with Meta and other paid channels layered in where it makes sense for your audience — not every platform, just the ones that convert.",
                  },
                ]}
              />
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
