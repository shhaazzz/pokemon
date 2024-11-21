// src/ui/List.tsx
import React from "react";
import "./List.css"; // Import CSS for styling

interface ListProps {
  children: React.ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <ul className="list-grid">{children}</ul>;
};
