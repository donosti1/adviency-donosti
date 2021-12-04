import React, {useState} from "react";
import { Button } from "@chakra-ui/button";
import { Heading, List, Stack, Text } from "@chakra-ui/layout";
import "./styles.css";

/* import {Gift as IGift} from '../types'; */

export default function App() {
  const [gifts, setGifts] = useState(["Medias", "Mantecol","Pernil de cerdo"]);
  function handleSubmit (e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const gift = e.currentTarget.gift.value;
    if (gift == "" || gifts.includes(gift)){return console.log("Revisar Inpur")};
    setGifts((gifts) => gifts.concat(gift));
    e.currentTarget.gift.value = "";
  }

  return (
    <Stack height="100vh" width="100%" as="main" className="App">
      <Stack as="section" borderRadius="lg" spacing={8} padding={16} backgroundColor="whiteAlpha.900">
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={4}>
            <input type="text" name="gift"></input>
            <Button type="submit" colorScheme="primary">Agregar</Button>
          </Stack>
        </form>
        <Heading as="h1" >Regalos:</Heading>
        <List spacing={3}>
          {gifts.map((gift) => (<Stack key={gift} direction="row" alignItems="center" justifyContent="space-between"><li >{gift}</li><Button colorScheme="primary" onClick={() => setGifts((gifts) => gifts.filter((_gift) => _gift != gift))}>X</Button ></Stack>))}
        </List>
      </Stack>
    </Stack>
  );
}
