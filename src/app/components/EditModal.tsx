import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useRef } from "react";

export default function FormModal({ giftId }: { giftId: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef(null);

  function handleEditSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log({ giftId });
  }

  return (
    <>
      <Button onClick={onOpen}>E</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleEditSubmit}>
            <ModalBody>
              <Input
                ref={firstField}
                name="giftTitle"
                placeholder="Regalo..."
                /* value={} */
                /* onChange={props.clearGiftInput} */
              />
              {/* <Text color="secondary.300" paddingLeft={4}>
                {props.giftMessage}
              </Text> */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Cerrar
              </Button>
              <Button type="submit">Editar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
