import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, Home, Info, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


export type Organization = {
  id: string;
  name: string;
  slug: string;
  icon?: JSX.Element;
};



interface routesProps {
  label: string;
  href: string;
  icon: JSX.Element;
}

interface AccItemProps {
  organization: Organization;
  routes: routesProps[];
  onRoute: (href: string) => void;
  isActive: boolean;
  isExpand: boolean;
  onExpand: (id: string) => void;
}

const AccItem = ({
  organization,
  routes,
  onRoute,
  isActive,
  isExpand,
  onExpand,
}: AccItemProps) => {
  const pathname = usePathname();

  console.log(isActive, isExpand)
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpand && "bg-sky-500/10 text-sky-700"
        )}
        onClick={() => onExpand(organization.id)}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            {organization.icon}
          </div>
          <span className="font-medium text-small">
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
      {routes.map ((route) =>(
          <Button
          key={route.href}
          size="sm"
          onClick={() => onRoute(route.href)}
          className={cn("w-full font-normal justify-start pl-10 mt-1",
            pathname === route.href && "bg-sky-500/10 text-sky-700"
          )}
          variant="ghost"
        >
          {route.icon}
          {route.label}
        </Button>
      ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccItem;
