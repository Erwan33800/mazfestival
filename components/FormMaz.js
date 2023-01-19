import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";

export default function FormMaz() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fname || !lname || !email) {
      setError("Please fill in all fields");
      return;
    }

    axios
      .post("https://maz-api.onrender.com/users", {
        fname: fname,
        lname: lname,
        email: email,
      })
      .then((response) => {
        console.log(response);
        setFname("");
        setLname("");
        setEmail("");
        setError(null);
        window.location.href = "https://lydia-app.com/pots?id=73824-maz-2023";
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  return (
    <Box bg={useColorModeValue("white", "gray.700")} borderRadius="lg">
      <Box m={8} color="#0B0E3F">
        <Heading textAlign={"center"}>MAZ Festival</Heading>
        <VStack spacing={5} mt={5}>
          <FormControl id="fname">
            <FormLabel>Ton prénom </FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement pointerEvents="none">
                <BsPerson color="gray.800" />
              </InputLeftElement>
              <Input
                type="text"
                size="md"
                value={fname}
                onChange={(event) => setFname(event.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Ton nom </FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement pointerEvents="none">
                <BsPerson color="gray.800" />
              </InputLeftElement>
              <Input
                type="text"
                size="md"
                value={lname}
                onChange={(event) => setLname(event.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="mail">
            <FormLabel>Ton mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement pointerEvents="none">
                <MdOutlineEmail color="gray.800" />
              </InputLeftElement>
              <Input
                type="text"
                size="md"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="blue"
            bg="blue.400"
            color="white"
            _hover={{
              bg: "blue.500",
            }}
            isFullWidth
            onClick={handleSubmit}
          >
            Accéder à la billeterie
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
