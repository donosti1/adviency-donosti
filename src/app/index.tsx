import {
  Avatar,
  Button,
  Heading,
  Stack,
  Text,
  Input,
  useRangeSlider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "./api";
import FormModal from "./components/FormModal";
import { Gift } from "./types";
import { Users } from "./constants";

function App() {
  const [gifts, setGifts] = useState(api.gifts.list);
  const [giftMessage, setGiftMessage] = useState("");

  function handleDeteleItem(id: number) {
    setGifts(
      gifts.filter((gift: Gift) => {
        return gift.id !== id;
      })
    );
  }
  function handleDeteleAll() {
    setGifts([]);
  }
  function handleAddGift(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const giftTitle = e.currentTarget.giftTitle.value;

    if (!giftTitle) {
      setGiftMessage("Ingresa un regalo");

      return false;
    } else if (
      gifts.some((g: Gift) => g.title.toLowerCase() === giftTitle.toLowerCase())
    ) {
      setGiftMessage("Regalo repetido");

      return false;
    }
    const giftQty = e.currentTarget.giftQty.value;
    const giftImgSrc = e.currentTarget.imgSrc.value;
    const owner = e.currentTarget.owner.value;
    const newGift: Gift = {
      id: Date.now(),
      qty: Number(giftQty) < 1 ? 1 : Number(giftQty) > 6 ? 6 : Number(giftQty),
      ownerId: Number(owner),
      title: giftTitle,
      imgSrc: giftImgSrc,
    };

    setGifts([...gifts, newGift]);
    e.currentTarget.giftTitle.value = "";
    e.currentTarget.giftQty.value = "";
    e.currentTarget.imgSrc.value = "";

    return true;
  }
  useEffect(() => {
    if (gifts.length) {
      return localStorage.setItem("adviency", JSON.stringify(gifts));
    }

    return localStorage.removeItem("adviency");
  }, [gifts]);
  function clearGiftInput() {
    setGiftMessage("");
  }

  return (
    <Stack
      alignItems="center"
      background="primary.500"
      backgroundImage="url('/bg.png') "
      backgroundRepeat="no-repeat"
      bgPos="50% 50%"
      bgSize="100% 100%"
      className="App"
      height="100vh"
      justifyContent="center"
    >
      <Stack
        backdropFilter="blur(12px)"
        background="linear-gradient(22deg, var(--chakra-colors-secondary-300) 0%, var(--chakra-colors-secondary-100) 74%)"
        borderRadius="3xl"
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        padding={8}
        spacing={4}
        width="container.sm"
      >
        <Heading as="h1" textAlign="center">
          Regalos
        </Heading>
        <Stack>
          {gifts.length > 0 ? (
            <Stack key={Date.now()} spacing={8}>
              <Stack
                maxHeight="xs"
                overflowY="auto"
                paddingRight={4}
                spacing={5}
              >
                {gifts.map((gift: Gift) => (
                  <Stack
                    key={gift.id}
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={8}
                  >
                    <Stack
                      alignItems="center"
                      direction="row"
                      justifyContent="space-between"
                      spacing={8}
                      width="100%"
                    >
                      <Avatar name={gift.title} src={gift.imgSrc} />
                      <Stack
                        alignItems="center"
                        direction="row"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Stack spacing={0}>
                          <Text>{gift.title}</Text>
                          <Text>
                            {Users.filter((us) => {
                              return us.value === gift.ownerId;
                            }).map((us) => us.label)}
                          </Text>
                        </Stack>
                        <Text>(Qty: {gift.qty})</Text>
                      </Stack>
                    </Stack>
                    <Button
                      _hover={{ bg: "red.300" }}
                      onClick={() => handleDeteleItem(gift.id)}
                    >
                      X
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ) : (
            <Stack>
              <Text>No hay Regalos, agregalos desde el formulario!</Text>
            </Stack>
          )}
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          {gifts.length > 0 ? (
            <Button onClick={handleDeteleAll}>Borrar todos los regalos</Button>
          ) : null}
          <FormModal
            clearGiftInput={clearGiftInput}
            giftMessage={giftMessage}
            handleAddGift={handleAddGift}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
