import { MouseEventHandler, RefObject } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  setGifts: React.Dispatch<[]>;
  modalTitle: string;
  modalDescription: string;
  finalRef: RefObject<HTMLDivElement>;
}
export const DeleteAllModalScreen = ({
  setGifts,
  modalTitle,
  modalDescription,
  finalRef,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDeleteAll = () => {
    setGifts([]);
    onClose();
  };

  return (
    <>
      <Button _hover={{ bg: "red.300" }} marginTop={8} onClick={onOpen}>
        Delete all gifts
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="blackAlpha.900">{modalDescription}</Text>
          </ModalBody>

          <ModalFooter>
            <Button _hover={{ bg: "red.300" }} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleDeleteAll}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
