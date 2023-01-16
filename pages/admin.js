import TableauMazistes from "../components/TableauMazistes";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import TableNotPayed from "../components/TableNotPayed";
import { Button, Heading, Box } from "@chakra-ui/react";

function Admin() {
  const [showPayed, setShowPayed] = useState(true);
  const [users, setUsers] = useState();
  const [usersNotPayed, setUsersNotPayed] = useState();

  useEffect(() => {
    // Récupérez les utilisateurs avec une requête HTTP, par exemple avec Axios
    axios.get("https://maz-api.onrender.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    // Récupérez les utilisateurs avec une requête HTTP, par exemple avec Axios
    axios
      .get("https://maz-api.onrender.com/users/not-payed")
      .then((response) => {
        setUsersNotPayed(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <Heading mt={10} textAlign={"center"}>
        Interface admin du MAZ
      </Heading>
      <Box m={20} textAlign={"center"}>
        <Button colorScheme="blue" onClick={() => setShowPayed(!showPayed)}>
          {showPayed ? "Mazistes non-payeurs" : "Mazistes"}
        </Button>
        {showPayed ? (
          <TableauMazistes users={users} />
        ) : (
          <TableNotPayed users={usersNotPayed} />
        )}
      </Box>
    </>
  );
}

export default Admin;
