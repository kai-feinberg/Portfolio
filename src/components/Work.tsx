import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, GridIcon, RocketIcon, SearchIcon, Share2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";


const features = [
  {
    Icon: Share2Icon,
    name: "n8n Workshops",
    description: "Hosted over 10 hours of live workshops on how to use n8n for your business.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/n8n.png"
        alt="n8n workshop image"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: SearchIcon,
    name: "Client Oracle",
    description: "Built a RAG application for freelancers to find clients",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/client-oracle.png"
        alt="Real-time Analytics"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: RocketIcon,
    name: "Exodus AI",
    description: "A daily email engine complete with AI generated emails from finetuned models, analytics, news source inspiration, and more.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/exodus.png"
        alt="API Integrations"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: GridIcon,
    name: "Horde",
    description: "Multi agent system with multiple integrations to speed up everyday tasks",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View Project",
    background: (
      <img
        src="/horde.png"
        alt="Task Scheduler"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
];

export function Work() {
  return (
    <div className="flex flex-col items-center">
        <Badge className="text-3xl m-12 p-4 px-8 w-max">My Work</Badge>
    
        <BentoGrid className="max-w-[1100px]">
        {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
        ))}
        </BentoGrid>
    </div>
  );
}
