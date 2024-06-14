"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import AccItem from "./accItem";
import useAccordionState from "@/hooks/useAccordionState";
import { useRouter } from "next/navigation";
import { useMembership, useActiveOrganization, Organization } from "@/hooks/useMembership";

// Menggunakan hooks yang telah Anda definisikan
const Sidebar = () => {
  const { data: membershipData } = useMembership();
  const { activeOrganization, setActiveOrganization } = useActiveOrganization();
  const { expandedItems, handleExpand } = useAccordionState("accordion-state");
  const router = useRouter();

  const onExpanded = (id: string) => {
    handleExpand(id);
  };


  const handleRoute = (href: string) => {
    router.push(href);
    
  };


  const defaultAccordionValue: string[] = Object.keys(expandedItems || {}).reduce(
    (acc: string[], key: string) => {
      if (expandedItems[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  return (
    <>
      <div className="text-xs font-medium flex items-center mb-4">
        <span className="text-lg ml-4">Add Menu</span>
        <Button variant="ghost" className="ml-auto">
          <Plus className="h-5 w-5" />
        </Button>
      </div>
      {/* Accordion item active berdasarkan active organization, saya ingin accordion active berdasarkan active organizaton tapi jika pathname === route.href && "bg-sky-500/10 text-sky-700" */}
      <Accordion
        type="multiple"
        className="w-full space-y-2"
        defaultValue={defaultAccordionValue}
      >
        {membershipData.map((organization) => (
          <AccItem
            key={organization.id}
            organization={organization}
            routes={organization.routes}
            onRoute={handleRoute}
            isActive={activeOrganization?.id === organization.id}
            isExpand={expandedItems[organization.id]}
            onExpand={onExpanded}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
