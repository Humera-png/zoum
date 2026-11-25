import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, TabletSmartphone, Server, Rocket, Plug, Wrench } from "lucide-react";
import { ItServicePage } from "@/components/ItServicePage";

const PATH = "/services/mobile-app-development";

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development Company, Android & iOS | ZOUM" },
      {
        name: "description",
        content:
          "Android and iOS app development for startups and businesses worldwide: design, development, backend, app store launch and support, by an India-based team.",
      },
      {
        name: "keywords",
        content:
          "mobile app development company, android app development company, iOS app development company, app development company India, cross platform app development, hire app developers India, app development company Jaipur, app development company Ahmedabad",
      },
      { property: "og:title", content: "Mobile App Development | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "Android and iOS apps with the backend and admin panel behind them, built for businesses in India and worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: `https://zoumconsultancy.com${PATH}` }],
  }),
  component: () => (
    <ItServicePage
      path={PATH}
      schemaName="Mobile App Development"
      schemaDescription="Android and iOS app development, app backends and admin panels, app store launch and support, for clients in India and worldwide."
      pill="Mobile App Development · Android & iOS · Worldwide"
      title="Apps People"
      italic="Keep Using."
      sub="Android and iOS apps, with the backend and admin panel behind them, planned around your users and built to launch on the app stores."
      servicesTitle="App Development Services"
      servicesIntro="We build the whole product, not just the screens: the app, the server it talks to, and the tools your team uses to run it."
      services={[
        {
          icon: Smartphone,
          name: "Android App Development",
          desc: "Native-quality Android apps for phones and tablets, tested on the devices your customers use.",
        },
        {
          icon: TabletSmartphone,
          name: "iOS App Development",
          desc: "iPhone and iPad apps that follow Apple's guidelines, so review and approval go smoothly.",
        },
        {
          icon: TabletSmartphone,
          name: "Cross-Platform Apps",
          desc: "One codebase for Android and iOS when it suits your budget and timeline, without a second-rate experience.",
        },
        {
          icon: Server,
          name: "Backend & Admin Panel",
          desc: "The server, database and admin panel behind your app: user accounts, content, orders, notifications and reports.",
        },
        {
          icon: Plug,
          name: "Payments & Integrations",
          desc: "Payment gateways, maps, notifications, sign-in with Google or Apple, and connections to your existing systems.",
        },
        {
          icon: Rocket,
          name: "Launch & Support",
          desc: "App Store and Google Play submission, then updates, fixes and new features after launch.",
        },
      ]}
      audiences={[
        {
          name: "Startups",
          desc: "Founders launching a first app who need a team to take it from idea to the app stores.",
        },
        {
          name: "Businesses",
          desc: "Companies that want an app for their customers, field staff or internal operations.",
        },
        {
          name: "Companies Abroad",
          desc: "Businesses in the US, UK, Europe, the Middle East and Australia looking for an app development partner in India.",
        },
      ]}
      steps={[
        {
          name: "Discovery call",
          desc: "We learn who the app is for, what it must do, and which platforms matter first.",
        },
        {
          name: "Scope and quote",
          desc: "A written scope with screens, features, platforms, timeline, milestones and price.",
        },
        {
          name: "Design",
          desc: "Clickable screens you can try and approve before development starts.",
        },
        {
          name: "Build and test",
          desc: "We build in milestones, share test builds on your phone, and fix what you find.",
        },
        {
          name: "Launch and support",
          desc: "We submit to the App Store and Google Play, then support and improve the app.",
        },
      ]}
      pricingText="Apps are quoted per project after a free discovery call, based on the platforms, screens, backend and integrations. You get a written scope with milestones before work starts. International clients are invoiced in US dollars or another agreed currency."
      faqs={[
        {
          q: "Do you build both Android and iOS apps?",
          a: "Yes. We build for Android and iOS, either as separate native apps or as one cross-platform app, and recommend the approach that fits your users and budget.",
        },
        {
          q: "How much does it cost to build an app?",
          a: "It depends on the number of screens, the features, the backend and the integrations. We quote after a free discovery call with a written scope and milestones.",
        },
        {
          q: "Do you also build the backend and admin panel?",
          a: "Yes. We build the server, database and admin panel behind the app, so your team can manage users, content and orders.",
        },
        {
          q: "Will you publish the app on the App Store and Google Play?",
          a: "Yes. We prepare and submit the app to both stores, and handle the review process with you.",
        },
        {
          q: "Do you work with clients outside India?",
          a: "Yes. We work remotely with clients in the US, the UK, Europe, the Middle East and Australia, and invoice in US dollars or another agreed currency.",
        },
        {
          q: "Will you sign an NDA?",
          a: "Yes. We sign an NDA on request, before you share your app idea in detail.",
        },
        {
          q: "Do you support the app after launch?",
          a: "Yes. We offer support for fixes, operating system updates and new features, on terms agreed up front.",
        },
      ]}
      related={[
        { label: "Custom software development", to: "/services/software-development" },
        { label: "AI agents & chatbots", to: "/services/ai-agents-chatbots" },
        { label: "Website development", to: "/services/website-development" },
      ]}
    />
  ),
});
