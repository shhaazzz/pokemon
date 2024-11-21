import React from "react";

interface ListItemProps {
  name: string;
  onRemove: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({ name, onRemove }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
      }}
    >
      <span>{name}</span>
      <button
        onClick={onRemove}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.3rem 0.6rem",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </li>
  );
};
