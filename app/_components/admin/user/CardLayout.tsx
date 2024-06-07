import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardLayoutProps {
  title: string;
  children: React.ReactNode;
}

const CardLayout: React.FC<CardLayoutProps> = ({ title, children }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

export default CardLayout;
