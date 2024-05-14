import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

import { Button, ButtonGroup } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

export default function Pelicula({ poster, title, fullplot }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div
        style={{
          backgroundColor: "#101010",
          width: "30vw",
          height: "auto",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          color: "#f2f2f2",
        }}
        className="pelicula"
      >
        <img src={poster} />
        <p>{title}</p>
        <Button onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>{fullplot}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
