/* eslint-disable react/jsx-key */
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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ModalMailBillet from "./ModalMailBillet";

function TableauMazistes({ users }) {
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <>
      <TableContainer>
        <Table size='sm' variant="simple" colorScheme="teal">
          <TableCaption>Liste de tous les futurs mazistes !</TableCaption>
          <Thead>
            <Tr>
              <Th>Nom Prénom</Th>
              <Th className="d-none sm:d-block">Mail</Th>
              <Th className="d-none sm:d-block">Lydia</Th>
              <Th>
                <ModalMailBillet
                  alignItem={"right"}
                  selectedRows={selectedRows}
                />
              </Th>
            </Tr>
          </Thead>
          {users &&
            users.map((user) => (
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

export default TableauMazistes;
