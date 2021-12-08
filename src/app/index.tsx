/* import { useState } from "react"; */

import React, { useEffect, useState } from "react";
import { Button, Heading, Modal, Stack, Text } from "@chakra-ui/react";
import { sampleGifts } from "./sampleGifts";
import AddGift from "./components/AddGift";
import GiftsListItem from "./components/GiftsListItem";
import { DeleteAllModalScreen } from "./components/DeleteAllModal";
import { Gift } from "./types";

function App() {
  const finalRef = React.useRef<HTMLDivElement>(null);
  const sampleGiftsInit = () => {
    const savedItems = localStorage.getItem("adviency");

    return savedItems ? JSON.parse(savedItems) : sampleGifts;
  };

  const [gifts, setGifts] = useState(sampleGiftsInit);

  useEffect(() => {
    gifts.length
      ? localStorage.setItem("adviency", JSON.stringify(gifts))
      : localStorage.removeItem("adviency");
  }, [gifts]);

  return (
    <Stack
      alignItems="center"
      background="primary.500"
      backgroundImage="url('/giftsBg.png'), url('/giftsBg.png'), linear-gradient(22deg, var(--chakra-colors-primary-500) 0%, var(--chakra-colors-primary-100) 74%)"
      backgroundRepeat="no-repeat"
      bgPos="15% 50%,85% 50%"
      bgSize="30%, 30%, 100%"
      className="App"
      height="100vh"
      justifyContent="center"
    >
      <Stack
        backgroundColor="whiteAlpha.500"
        borderRadius="3xl"
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        padding={8}
        spacing={4}
      >
        <Heading ref={finalRef} as="h1" textAlign="center">
          Regalos
        </Heading>
        <Stack>
          {gifts.length > 0 ? (
            <Stack key={Date.now()}>
              <Stack
                maxHeight="xs"
                overflowY="auto"
                paddingRight={4}
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "16px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0.1)`,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0.4)`,
                  },
                }}
              >
                {gifts.map((gift: Gift) => (
                  <GiftsListItem
                    key={gift.id}
                    finalRef={finalRef}
                    gift={gift}
                    handleDeleteItem={(id: number) =>
                      setGifts(
                        gifts.filter((gift: Gift) => {
                          return gift.id != id;
                        })
                      )
                    }
                  />
                ))}
              </Stack>

              <Stack key={Date.now()}>
                <DeleteAllModalScreen
                  finalRef={finalRef}
                  modalDescription="Description"
                  modalTitle="Delete all items"
                  setGifts={setGifts}
                />
              </Stack>
            </Stack>
          ) : (
            <Text>Add a gift to your wishlist.</Text>
          )}
        </Stack>
        <AddGift gifts={gifts} setGifts={setGifts} />
      </Stack>
    </Stack>
  );
}

export default App;
