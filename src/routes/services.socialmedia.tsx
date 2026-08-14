import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "./services.business";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/services/socialmedia")({
  head: () => ({
    meta: [
      {
        title: "Social Media Marketing Agency Jaipur | Brand Growth & Digital Strategy | ZOUM",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy: social media marketing agency in Jaipur. Strategic content, paid campaigns, brand growth, Instagram & LinkedIn management, and digital marketing across India.",
      },
      { property: "og:title", content: "Social Media Marketing | ZOUM Consultancy Jaipur" },
      {
        property: "og:description",
        content:
          "Grow your brand online with ZOUM's social media marketing team. Content strategy, paid ads, and community management that convert attention into leads.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/socialmedia" },
    ],
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

    title: "Personal Brand Building",

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
          title="Build"
          italic="Digital Influence."
          sub="
A performance-driven social media marketing agency helping businesses grow visibility, attract customers, and build powerful online brands.
"
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="More Than Social Media Posts" kicker="/ strategy">
              <div className="glass-strong rounded-3xl p-10">
                <p className="font-serif italic text-3xl">
                  "Successful brands are built through attention, trust, and consistent digital
                  presence."
                </p>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  ZOUM creates complete social media growth systems combining content marketing,
                  social management, paid advertising, and analytics to help businesses turn online
                  attention into measurable growth.
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

            <Section id="pricing" title="Growth Partnerships" kicker="/ solutions">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Starter Growth",

                    desc: "For businesses building their first professional online presence.",
                  },

                  {
                    title: "Growth Partner",

                    desc: "Complete social media marketing including strategy, content, campaigns, and optimization.",
                  },

                  {
                    title: "Enterprise Brand",

                    desc: "A complete digital growth partnership for ambitious companies.",
                  },
                ].map((x, i) => (
                  <div
                    key={i}
                    className="glass-strong rounded-3xl p-8 hover:-translate-y-2 transition flex flex-col"
                  >
                    <h3 className="font-display text-2xl">{x.title}</h3>
                    <p className="mt-4 text-muted-foreground flex-1">{x.desc}</p>
                    <Link
                      to="/contact"
                      className="mt-6 block text-center glass rounded-full py-3 text-sm font-semibold hover:bg-white transition"
                    >
                      Get started →
                    </Link>
                  </div>
                ))}
              </div>
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
