import Box from "@mui/material/Box";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import { Text } from "../Text";

interface ListProps {
  title: string;
  items: string[];
}

export const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <Box>
      <Text fontSize="small">{title}</Text>
      <MuiList sx={{ padding: 1 }}>
        {items.map((item, index) => (
          <ListItem key={index} sx={{ padding: 0 }}>
            <Text fontSize="small">{item}</Text>
          </ListItem>
        ))}
      </MuiList>
    </Box>
  );
};
export default List;