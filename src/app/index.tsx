/* import { useState } from 'react' */
import { useState } from "react";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import { Button, Icon, Input, List } from "@chakra-ui/react";
import { Gift } from "../types";
import { RiDeleteBin2Line, RiGiftFill } from "react-icons/ri";
function App() {
  const [value, setValue] = useState("");
  const [gifts, setGifts] = useState(["Medias", "Mantecol", "Pernil de cerdo"]);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (value == "" || gifts.includes(value)) {
      return console.log("Revisar Inpur");
    }
    setGifts((gifts) => gifts.concat(value));
    setValue("");
  }
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const disableRemoveAll = gifts.length == 0 ? "disabled" : "";
  return (
    <Stack
      className="App"
      height="100vh"
      bg="url('/bg.png')"
      bgSize="cover"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        bg="blackAlpha.600"
        p={16}
        backdropFilter="blur(10px)"
        borderRadius="2xl"
      >
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={4}>
            <Input
              type="text"
              name="gift"
              variant="giftInput"
              value={value}
              onChange={handleInputChange}
            ></Input>
            <Button type="submit" colorScheme="primary">
              <Icon as={RiGiftFill} />
            </Button>
          </Stack>
        </form>
        <Heading as="h1" textAlign="center" paddingY={8}>
          Regalos:
        </Heading>
        <Stack
          background="whiteAlpha.900"
          padding={4}
          borderRadius="lg"
          maxHeight={64}
          overflowY="auto"
          justifyContent="center"
        >
          {gifts.length == 0 ? (
            <Text textAlign="center">No hay regalos</Text>
          ) : (
            <List spacing={3}>
              {gifts.map((gift) => (
                <Stack
                  key={gift}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <li>{gift}</li>
                  <Button
                    colorScheme="primary"
                    onClick={() =>
                      setGifts((gifts) =>
                        gifts.filter((_gift) => _gift != gift)
                      )
                    }
                  >
                    <Icon as={RiDeleteBin2Line} />
                  </Button>
                </Stack>
              ))}
            </List>
          )}
        </Stack>
        <Button colorScheme="primary" onClick={() => setGifts([])}>
          Borrar todos
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
