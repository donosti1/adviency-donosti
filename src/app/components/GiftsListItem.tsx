import React, { RefObject } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Gift } from "../types";
/* import { DeleteItemModal } from "./DeleteItemModal"; */
interface Props {
  finalRef: RefObject<HTMLDivElement>;
  gift: Gift;
  handleDeleteItem: (id: number) => void;
}
export default function GiftsListItem({
  finalRef,
  gift,
  handleDeleteItem,
}: Props): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Text textShadow="1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;">
          {title}
        </Text>
        <Text textShadow="1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;">
          (Qty: {qty})
        </Text>
      </Stack>
      <Button _hover={{ bg: "red.300" }} onClick={onOpen}>
        X
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="blackAlpha.900">Description</Text>
          </ModalBody>

          <ModalFooter>
            <Button _hover={{ bg: "red.300" }} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => handleDeleteItem(id)}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
