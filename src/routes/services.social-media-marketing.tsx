import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PenTool, Users2, Megaphone, BarChart3, Instagram, Linkedin, Facebook, Globe } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ServiceGuides } from "@/components/ServiceGuides";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";
import {
  AudienceSection,
  StepsSection,
  CitiesSection,
  FaqSection,
} from "@/components/ServiceGuide";

export const Route = createFileRoute("/services/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Agency in Jaipur & Ahmedabad | ZOUM" },
      {
        name: "description",
        content:
          "Social media marketing for businesses in Jaipur, Ahmedabad and across India: content, Instagram, Facebook and LinkedIn management, and Meta and LinkedIn ads.",
      },
      {
        name: "keywords",
        content:
          "social media marketing agency Jaipur, social media marketing agency Ahmedabad, social media management Jaipur, Instagram marketing Jaipur, Facebook ads Jaipur, LinkedIn marketing India, Meta ads agency India, digital marketing agency Jaipur",
      },
      {
        property: "og:title",
        content: "Social Media Marketing Agency | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Content, page management and paid campaigns on Instagram, Facebook and LinkedIn, run by one team that also builds your website.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://zoumconsultancy.com/services/social-media-marketing" },
    ],
  }),
  component: SocialMediaPage,
});

const services = [
  {
    icon: PenTool,
    name: "Brand Strategy & Content",
    desc: "A clear brand voice, a monthly content plan, and posts, reels and carousels made for your customers, not for likes alone.",
  },
  {
    icon: Users2,
    name: "Social Media Management",
    desc: "Regular publishing, replies to comments and messages, and keeping your pages active and consistent across Instagram, Facebook and LinkedIn.",
  },
  {
    icon: Megaphone,
    name: "Paid Campaigns on Meta & LinkedIn",
    desc: "Ads on Instagram, Facebook and LinkedIn, targeted by city, interest or job role, tested and adjusted to bring enquiries.",
  },
  {
    icon: BarChart3,
    name: "Reporting",
    desc: "A plain report on what was posted, what people responded to, what the ads cost, and what we change next.",
  },
];

const platforms = [
  {
    icon: Instagram,
    name: "Instagram",
    desc: "For shops, cafes, clinics, salons, coaches and any business customers discover visually. Reels, posts, stories and local reach.",
  },
  {
    icon: Facebook,
    name: "Facebook",
    desc: "Still where many customers in India search for local businesses and read reviews, and where Meta ads reach a wide audience.",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    desc: "For B2B companies, consultancies and recruiters: a company page and founder posts that build trust with decision makers.",
  },
];

const audiences = [
  {
    name: "Local Businesses",
    desc: "Shops, restaurants, clinics, salons and coaching centres in Jaipur and Ahmedabad that want more people nearby to know and visit them.",
  },
  {
    name: "B2B Companies",
    desc: "Service companies and consultancies that want a credible LinkedIn presence and enquiries from the right decision makers.",
  },
  {
    name: "Busy Owners",
    desc: "Owners who know social media matters but have no time to post regularly, reply to messages, or run ads properly.",
  },
];

const steps = [
  {
    name: "Free call",
    desc: "We learn about your business, your customers, and what you want social media to do: visits, calls, enquiries or brand trust.",
  },
  {
    name: "Plan and quote",
    desc: "We recommend the platforms, the type and number of posts, and whether ads make sense, then give you a quote.",
  },
  {
    name: "Content and setup",
    desc: "We set up or clean up your pages, agree the brand look, and prepare the first month of content for your approval.",
  },
  {
    name: "Publish and run ads",
    desc: "We publish on schedule, reply to comments and messages if you want us to, and run ads where they fit the goal.",
  },
  {
    name: "Report and improve",
    desc: "Every month we share what worked and what didn't, and adjust the plan.",
  },
];

const pageFaqs = [
  {
    q: "What does a social media marketing agency do?",
    a: "It plans and creates your content, publishes it regularly, manages your pages and messages, runs paid ads, and reports on the results, so your social media brings in customers without taking up your own time.",
  },
  {
    q: "How much does social media marketing cost?",
    a: "It depends on the platforms, how many posts you need each month, and whether you run ads. We quote after a free call, once we understand your goals. The ad budget you pay to Meta or LinkedIn is separate from our fee.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Instagram, Facebook and LinkedIn. We recommend the ones your customers actually use instead of being on every platform.",
  },
  {
    q: "Do you create the posts and reels?",
    a: "Yes. We plan and design posts, carousels and reels, write the captions, and share them with you for approval before they go live.",
  },
  {
    q: "Do you run Facebook, Instagram and LinkedIn ads?",
    a: "Yes. We set up, target and manage paid campaigns on Meta (Facebook and Instagram) and LinkedIn, and adjust them based on the enquiries they bring.",
  },
  {
    q: "How soon will I see results?",
    a: "Paid ads can bring enquiries within days of starting. Organic growth from regular posting builds over a few months. We tell you honestly what to expect for your business before you start.",
  },
  {
    q: "Can you also build our website?",
    a: "Yes. We build websites and run SEO too, so your social media, website and Google presence work together. See our website development page.",
  },
  {
    q: "Do you work with businesses in Ahmedabad?",
    a: "Yes. We work with businesses in Jaipur and Ahmedabad, and with clients across India.",
  },
];

function SocialMediaPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Social Media Marketing"
        description="Social media content, page management, and paid campaigns on Instagram, Facebook and LinkedIn for businesses in Jaipur, Ahmedabad and across India."
        url="https://zoumconsultancy.com/services/social-media-marketing"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Social Media Marketing Agency in Jaipur & Ahmedabad"
          title="Be Seen"
          italic="By The Right People."
          sub="Content, page management and paid campaigns on Instagram, Facebook and LinkedIn, run by one team that also builds websites, so everything points customers the same way."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What We Do" kicker="/ social media services">
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="platforms" title="The Right Platform For Your Business" kicker="/ platforms">
              <div className="grid md:grid-cols-3 gap-5">
                {platforms.map((p) => (
                  <div key={p.name} className="glass rounded-2xl p-6">
                    <p.icon className="h-6 w-6 text-lime" />
                    <h3 className="font-display text-lg mt-3">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <AudienceSection audiences={audiences} />

            <StepsSection steps={steps} id="process" />

            <Section id="pricing" title="Pricing" kicker="/ how we quote">
              <div className="glass-strong rounded-3xl p-8 md:p-10 max-w-3xl">
                <p className="text-muted-foreground leading-relaxed">
                  Social media is quoted per business, because a café that needs Instagram reels
                  and a B2B firm that needs LinkedIn need very different work. After a free call we
                  send a monthly plan with the platforms, the number of posts, whether ads are
                  included, and the fee. Your ad budget is paid to Meta or LinkedIn directly and is
                  separate from our fee.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="btn-lime font-semibold px-6 py-3 rounded-full inline-flex items-center"
                  >
                    Get a free quote
                  </Link>
                  <Link
                    to="/services/website-development"
                    className="glass rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 hover:bg-white transition"
                  >
                    <Globe className="h-4 w-4" /> Need a website too?
                  </Link>
                </div>
              </div>
            </Section>

            <CitiesSection
              intro={
                "We manage social media for businesses in Jaipur and Ahmedabad, and for clients anywhere in India."
              }
            />

            <FaqSection faqs={pageFaqs} />

            <ServiceGuides servicePath="/services/social-media-marketing" />
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
