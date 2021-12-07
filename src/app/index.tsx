/* import { useState } from "react"; */

import { useState } from "react";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { sampleGifts } from "./sampleGifts";
import AddGift from "./components/AddGift";
import GiftsListItem from "./components/GiftsListItem";

function App() {
  const [gifts, setGifts] = useState(() => sampleGifts);

  /*   const handleDeleteItem = (id: number) => {
    setGifts(gifts.filter((gift) => gift.id != id));
  }; */
  console.log(gifts);

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
        <AddGift gifts={gifts} setGifts={setGifts} />
        <Heading as="h1" textAlign="center">
          Regalos
        </Heading>
        <Stack>
          {gifts.length > 0 ? (
            [
              gifts.map((gift) => (
                <GiftsListItem
                  key={gift.id}
                  gift={gift}
                  handleDeleteItem={(id) =>
                    setGifts(
                      gifts.filter((gift) => {
                        return gift.id != id;
                      })
                    )
                  }
                />
              )),
              <Stack key={Date.now()}>
                <Button marginTop={8} onClick={() => setGifts([])}>
                  Delete all gifts
                </Button>
              </Stack>,
            ]
          ) : (
            <Text>Add a gift to your wishlist.</Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
