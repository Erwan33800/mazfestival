import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Checkbox,
  ModalCloseButton,
  ModalBody,
  Button,
  Lorem,
  ModalFooter,
  useDisclosure,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function ModalMailBillet({ selectedRows }) {
  function sendCheckedUsersToBackend(users) {
    console.log(users);
    // Envoyez les identifiants cochés au backend en utilisant une requête HTTP, par exemple avec Axios
    axios
      .post("https://maz-api.onrender.com/mails-billet", { users: users })
      .then((response) => {
        console.log(response.data);
      });
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>Envoyer mail</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Envoyer mail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OrderedList>
              {selectedRows.map((row) => (
                <ListItem key={row.id}>
                  {row.fname} {row.lname} : {row.email}
                </ListItem>
              ))}
            </OrderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button
              colorScheme="green"
              onClick={() => sendCheckedUsersToBackend(selectedRows)}
            >
              Envoyer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalMailBillet;
