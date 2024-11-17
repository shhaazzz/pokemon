// src/ui/ListItem.tsx
interface ListItemProps {
  name: string;
}

export const ListItem = ({ name }: any) => {
  return <li className="p-2 border-b">{name}</li>;
};
