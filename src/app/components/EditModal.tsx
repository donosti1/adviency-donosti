import React, { FormEvent, useEffect, useRef } from "react";
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
  Stack,
} from "@chakra-ui/react";
import Select from "react-select";

import api from "../api";
import { Gift } from "../types";
import { Users } from "../constants";
interface IEditModal {
  giftId: number;
  handleEditGift: (e: FormEvent<HTMLFormElement>) => boolean;
}
export default function EditModal(props: IEditModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef(null);

  const gift = api.gifts.listById(props.giftId);

  function handleEditSubmit(e: FormEvent<HTMLFormElement>) {
    if (props.handleEditGift(e)) {
      onClose();
    }
  }

  return (
    <Stack>
      <Button onClick={onOpen}>E</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleEditSubmit}>
            <ModalBody color="black">
              {gift.map((gi: Gift) => (
                <Stack key={gi.id}>
                  <Input name="giftId" type="hidden" value={gi.id} />
                  <Input
                    name="originalOwner"
                    type="hidden"
                    value={gi.ownerId}
                  />
                  <Input
                    ref={firstField}
                    defaultValue={gi.title}
                    name="giftTitle"
                  />
                  <Select
                    defaultValue={{
                      label: Users.filter((u) => u.value === gi.ownerId)
                        .map((u) => u.label)
                        .join(),
                    }}
                    name="owner"
                    options={Users}
                    placeholder="Destinatario..."
                  />
                  <Input
                    defaultValue={gi.qty}
                    name="giftQty"
                    placeholder="Cantidad"
                    type="number"
                  />
                  <Input
                    defaultValue={gi.imgSrc}
                    name="imgSrc"
                    placeholder="Link a la imagen..."
                  />
                </Stack>
              ))}
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
    </Stack>
  );
}
