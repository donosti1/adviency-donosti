import { useState } from "react";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { initialGifts } from "./initialGifts";
import GiftItem from "./components/GiftItem";
import AddGift from "./components/AddGift";

function App() {
  const [gifts, setGifts] = useState(() => initialGifts);

  const handleDeleteItem = (id: number) => {
    setGifts(
      gifts.filter((gift) => {
        return gift.id != id;
      })
    );
  };

  return (
    <Stack
      alignItems="center"
      background="url('/christmas-wallpaper.jpg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      className="App"
      height="100vh"
      justifyContent="center"
    >
      <Stack
        alignItems="center"
        backgroundColor={["white"]}
        padding={16}
        spacing={8}
      >
        <AddGift gifts={gifts} setGifts={setGifts} />
        <Heading as="h1">Regalos</Heading>
        <Stack width={64}>
          {gifts.length > 0 ? (
            [
              gifts.map((gift) => (
                <GiftItem
                  key={gift.id}
                  gift={gift}
                  handleDeleteItem={handleDeleteItem}
                />
              )),
              <Stack key={gifts.length}>
                <Button onClick={() => setGifts([])}>Borrar todos</Button>
              </Stack>,
            ]
          ) : (
            <Text>Pedí tu regalo</Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
