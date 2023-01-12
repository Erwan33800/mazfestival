import FormMaz from "../components/FormMaz";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Checkbox,
  Container,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import ModalMailBillet from "./ModalMailBillet";

function TableNotPayed({ users }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Input
        w={"30%"}
        ml={20}
        placeholder="Rechercher un utilisateur"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableContainer>
        <Table size='sm' variant="simple" colorScheme="teal">
          <TableCaption>Liste de tous les futurs mazistes !</TableCaption>
          <Thead>
            <Tr>
              <Th>Nom Prénom</Th>
              <Th>Mail</Th>
              <Th>Lydia</Th>
              <Th>
                <ModalMailBillet
                  alignItem={"right"}
                  selectedRows={selectedRows}
                />
              </Th>
            </Tr>
          </Thead>
          {filteredUsers.map((user) => (
            <Tbody>
              <Tr>
                <Td>
                  {user.fname} {user.lname}
                </Td>
                <Td>{user.email}</Td>
                <Td>{user.hasPayed ? "Oui" : "Non"}</Td>
                <Td>
                  {user.hasPayed ? (
                    <Checkbox size="lg" isDisabled></Checkbox>
                  ) : (
                    <Checkbox
                      size="lg"
                      value={user._id}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRows([...selectedRows, user]);
                        } else {
                          setSelectedRows(
                            selectedRows.filter((row) => row._id !== user._id)
                          );
                        }
                      }}
                    ></Checkbox>
                  )}
                </Td>
              </Tr>
            </Tbody>
          ))}

        </Table>
      </TableContainer>
    </>
  );
}

export default TableNotPayed;
