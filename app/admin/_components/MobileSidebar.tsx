"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClosed = useMobileSidebar((state) => state.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClosed();
  }, [onClosed])

  if (!isMounted) {
    return null;
  }

  return(
    <>
    <Button
    onClick={onOpen}
    className="block md:hidden"
    variant="ghost"
    size="sm"
    >
      <Menu className="w-5 h-5"/>
    </Button>
    <Sheet open={isOpen} onOpenChange={onClosed}>
      <SheetContent
      side="left"
      className="p-2 pt-10"
      >
        <Sidebar/>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default MobileSidebar;