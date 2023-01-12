import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/auth", {
        email,
        password,
      });
      Cookies.set("jwt", response.data.accessToken);
      router.push("/admin");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      color={"#02054B"}
    >
      <Stack spacing={4}>
        <form onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Mail</FormLabel>
            <Input name="email" type="email" onChange={handleChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Mot de passe</FormLabel>
            <Input name="password" type="password" onChange={handleChange} />
          </FormControl>
          <Stack spacing={10}>
            <Link color={"blue.400"}>Mot de passe oublié?</Link>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
            >
              Se connecter
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
