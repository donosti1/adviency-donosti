import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import { Gift } from "../../types";
interface IProps {
  gift: Gift;
  handleDeleteItem: (id: number) => void;
}

export default function GiftItem({
  gift,
  handleDeleteItem,
}: IProps): React.ReactElement {
  const { id, title } = gift;

  return (
    <Stack
      key={id}
      alignItems="center"
      direction="row"
      justifyContent="space-between"
    >
      <Text>{title}</Text>
      <Button onClick={() => handleDeleteItem(gift.id)}>Borrar</Button>
    </Stack>
  );
}
