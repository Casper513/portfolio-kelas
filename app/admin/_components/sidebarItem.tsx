import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface sidebarItemProps {
  id?: string;
  nama: string;
  href: string;
  icon: React.ReactNode;
  onClick: (href: string) => void;
}

const SidebarItem = ({
  nama,
  href,
  icon,
  onClick,
}: sidebarItemProps) => {
  const pathname = usePathname();
  return (
    <>
      <div
          className={cn(
            "flex items-center gap-x-2 p-1.5 my-2 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
            pathname === href && "bg-sky-500/10 text-sky-700"
          )}
          onClick={() => onClick(href)}
        >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            {icon}
          </div>
          <span className="font-medium text-small">
            {nama}
          </span>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;