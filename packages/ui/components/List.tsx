// src/ui/List.tsx
import React from "react";

interface ListProps {
  children: React.ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>;
};
