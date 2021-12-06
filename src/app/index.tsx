import { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

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
      <Stack alignItems="center" backgroundColor={["white"]} padding={16}>
        <Text>Formulario</Text>
        <Text>Regalos</Text>
        <Text>Lista de regalos</Text>
      </Stack>
    </Stack>
  );
}

export default App;
