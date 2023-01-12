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
  Link,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsInstagram } from "react-icons/bs";
import FormLogin from "../components/FormLogin";

export default function Login() {
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
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem alignItems={"center"}>
                <Box>
                  <Heading textAlign={"center"}>MAZ Festival</Heading>
                  <Text textAlign={"center"} mt={2} color="gray.500">
                    Authentification admin, ici c'est pour les boss !
                  </Text>
                  <HStack
                    spacing={5}
                    px={5}
                    mt={5}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="24px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsInstagram size="24px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="24px" />}
                      href="/"
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <FormLogin />
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
