import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import { Gift } from "../types";
interface Props {
  gift: Gift;
  handleDeleteItem: (id: number) => void;
}
export default function GiftsListItem({
  gift,
  handleDeleteItem,
}: Props): React.ReactElement {
  const { id, title, qty } = gift;

  return (
    <Stack
      key={id}
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      spacing={4}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        width="100%"
      >
        <Text>{title}</Text>
        <Text>(Qty: {qty})</Text>
      </Stack>
      <Button
        _hover={{ bg: "secondary.100" }}
        onClick={() => handleDeleteItem(id)}
      >
        X
      </Button>
    </Stack>
  );
}
