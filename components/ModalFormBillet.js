import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  useDisclosure,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

function ModalFormBillet({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const urlLydia = "https://lydia-app.com/pots?id=73824-maz-2023";
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Si t'as déjà rempli le formulaire, clique ici
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Maziste avéré</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text textAlign={"center"} color={"black"} w={80} mb={5}>
                Attention, il faut impérativement avoir rempli le formulaire
                pour avoir accès à la billetterie ! <br />
                <br />
                Mais si tu fais partie des plus rapides qui ont déjà rempli le
                formulaire mais non pas pris leur billet, pas de panique !{" "}
                <br />
                <br />
                Tu peux tranquillement te rendre sur le lien suivant : <br/>
                <Link
                  href="https://lydia-app.com/pots?id=73824-maz-2023"
                  color="blue.400"
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  {" "}
                  https://lydia-app.com/pots?id=73824-maz-2023
                </Link>
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalFormBillet;
