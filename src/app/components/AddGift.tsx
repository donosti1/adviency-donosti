import React, { useState } from "react";
import { Button, Input, Stack } from "@chakra-ui/react";
import { Gift } from "../../types";
interface IProps {
  gifts: Gift[];
  setGifts: React.Dispatch<Gift[]>;
}

export default function AddGift({
  gifts,
  setGifts,
}: IProps): React.ReactElement {
  const [value, setValue] = useState("");
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gift = e.currentTarget.gift.value;

    if (gift == "") {
      return console.log("Para pedir un regalo, primero debes indicarlo");
    }
    if (gifts.some((g) => g.title === gift)) {
      return console.log("Ya se encuentra en la lista");
    }
    const newGift: Gift = {
      id: Date.now(),
      title: value,
    };

    setGifts([...gifts, newGift]);
    setValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Input name="gift" value={value} onChange={handleInputChange} />
        <Button _hover={{ bg: "primary.700" }} type="submit">
          Pedir
        </Button>
      </Stack>
    </form>
  );
}
