import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, GridIcon, LayersIcon, RocketIcon, SearchIcon, Share2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";


const features = [
  {
    Icon: LayersIcon,
    name: "Splat AI",
    description: "An infinite canvas for AI conversations with persistent context. Connect videos, websites, PDFs and chat with context-aware AI.",
    href: "/splat",
    cta: "View Project",
    className: "col-span-1 md:col-span-3 lg:col-span-3",
    background: (
      <img
        src="/splat/connect-context.jpg"
        alt="Splat AI Canvas"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "n8n Workshops",
    description: "Hosted over 10 hours of live workshops on how to use n8n for your business.",
    href: "/n8n-workshops",
    cta: "View Project",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    background: (
      <img
        src="/n8n.jpg"
        alt="n8n workshop image"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: SearchIcon,
    name: "Client Oracle",
    description: "An Agentic RAG chatbot helping freelancers find clients. Automatic sync with Google Drive indexes the latest strategies.",
    href: "/client-oracle",
    cta: "View Project",
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    background: (
      <img
        src="/client-oracle.jpg"
        alt="Real-time Analytics"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: RocketIcon,
    name: "Exodus AI",
    description: "A daily email engine complete with AI generated emails from finetuned models, analytics, news source inspiration, and more.",
    href: "/exodus-ai",
    cta: "View Project",
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    background: (
      <img
        src="/exodus.jpg"
        alt="API Integrations"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: GridIcon,
    name: "Horde",
    description: "Multi agent system with multiple integrations to speed up everyday tasks",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    href: "#",
    cta: "🚧 Under Construction!",
    background: (
      <img
        src="/horde.jpg"
        alt="Task Scheduler"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
];

export function Work() {
  return (
    <div className="flex flex-col items-center">
        <Badge className="text-2xl sm:text-3xl m-8 sm:m-12 p-3 sm:p-4 px-6 sm:px-8 w-max">My Work</Badge>
    
        <BentoGrid className="max-w-[1150px]">
        {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
        ))}
        </BentoGrid>
    </div>
  );
}
