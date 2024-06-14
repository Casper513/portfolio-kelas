import { useState, useEffect } from "react";
import { Briefcase, Home, Info, Mail } from "lucide-react";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  icon?: JSX.Element;
  routes: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
};

const mockMembershipData: Organization[] = [
  {
    id: "1",
    name: "Organization One",
    slug: "org-one",
    routes: [
      {
        label: "Home",
        href: "/admin/dashboard",
        icon: <Home />,
      },
      {
        label: "About",
        href: "/about",
        icon: <Info />,
      },
    ],
  },
  {
    id: "2",
    name: "Organization Two",
    slug: "org-two",
    routes: [
      {
        label: "Services",
        href: "/admin/services",
        icon: <Briefcase />,
      },
      {
        label: "Contact",
        href: "/contact",
        icon: <Mail />,
      },
    ],
  },
];

const mockActiveOrganization: Organization = {
  id: "2",
  name: "Organization Two",
  slug: "org-two",
  routes: [
    {
      label: "Services",
      href: "/admin/services",
      icon: <Briefcase />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail />,
    },
  ],
};

const useMembership = () => {
  const [data, setData] = useState<Organization[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setData(mockMembershipData);
  }, []);

  return { data };
};

const useActiveOrganization = () => {
  const [activeOrganization, setActiveOrganization] = useState<Organization | null>(null);

  useEffect(() => {
    // Simulate setting the active organization
    setActiveOrganization(mockActiveOrganization);
  }, []);

  return { activeOrganization, setActiveOrganization };
};

export { useMembership, useActiveOrganization };
