import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import FormMaz from "../components/FormMaz";

export default function FormLogin() {
  return (
    <Container
      bg="#9DC4FB"
      maxW="full"
      centerContent
      overflow="hidden"
      h={"100vh"}
    >
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 8, lg: 16 }}
        >
          <Box ml={4} mr={4} p={5}>
            <Wrap spacing={{ base: 10, sm: 1, md: 3, lg: 20 }}>
              <WrapItem>
                <FormMaz />
              </WrapItem>
              <WrapItem alignItems={"center"}>
                <Box w={300}>
                  <Text mb={5} fontSize="2xl" textAlign={"center"}>
                    14-15-16 Juillet 2023 !
                  </Text>
                  <Text textAlign={"center"} mt={2} color="gray.500">
                    Remplis les champs de gauche <br />
                    pour accéder à la billeterie
                  </Text>
                  <Text mt={8} mb={5} fontSize="1xl" textAlign={"center"}>
                    plus de détails à venir..
                  </Text>
                  <HStack
                    spacing={5}
                    px={5}
                    mt={5}
                    alignItems="flex-start"
                    justifyContent={"center"}
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="24px" />}
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=100075189909444",
                          "_blank"
                        )
                      }
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsInstagram size="24px" />}
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/maz.festival/?hl=fr",
                          "_blank"
                        )
                      }
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="24px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
