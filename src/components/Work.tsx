import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";


const features = [
  {
    Icon: FileTextIcon,
    name: "Project Management",
    description: "Streamlined project workflows and file organization.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/cc-rendered.png"
        alt="Project Management"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: BellIcon,
    name: "Real-time Analytics",
    description: "Get insights and notifications for your applications.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/cc-rendered.png"
        alt="Real-time Analytics"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "API Integrations",
    description: "Seamless integrations with popular third-party services.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/cc-rendered.png"
        alt="API Integrations"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Task Scheduler",
    description: "Advanced scheduling and calendar management system.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View Project",
    background: (
      <img
        src="/cc-rendered.png"
        alt="Task Scheduler"
        className="w-full h-full object-cover object-center"
      />
    ),
  },
];

export function Work() {
  return (
    <div className="flex flex-col items-center">
        <Badge className="text-3xl m-12 p-4 px-8 w-max">Work</Badge>
    
        <BentoGrid className="max-w-[1100px]">
        {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
        ))}
        </BentoGrid>
    </div>
  );
}
