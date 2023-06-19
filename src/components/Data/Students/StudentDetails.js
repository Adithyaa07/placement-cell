import React from "react";
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { auth } from "../../../firebase-auth";
import { signOut } from "firebase/auth";
import ReactModal from "react-modal";
import DisplayData from "./DisplayData";
import { useContext } from "react";
import { UserContext } from "../../../context/AuthContext";
import { VStack, Text, Icon, Link, Divider, Button } from "@chakra-ui/react";
import { FaUser, FaHdd, FaCalendar, FaCog, FaUniversity } from "react-icons/fa";
import {
  Box,
  Flex,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";

const StudDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useContext(UserContext);

  const logout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return <Navigate to="/student" />;
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        <DisplayData />
        <div>
          <NavLink to="/studentDetails/studentProfile">
            <Button variant="solid" colorScheme="teal" mt="4">
              Create/Update Profile{" "}
            </Button>
          </NavLink>
        </div>
      </ReactModal>

      <Flex
        as="header"
        align="center"
        justify="space-between"
        px="4"
        py="2"
        boxShadow="md"
        bg="gray.800"
      >
        <Box color="blackAlpha.100">{}</Box>

        <Flex align="center">
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            bg="white"
            icon={<Icon as={HiOutlineBell} boxSize="6" />}
            mr="4"
          />

          <Menu>
            <MenuButton as={IconButton} aria-label="Profile">
              <Avatar size="sm" src="/path/to/profile-image.jpg" />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NavLink onClick={() => setIsOpen(true)}>profile</NavLink>
              </MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={{ logout }}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Box
        bg="gray.800"
        w="64"
        color="white"
        minH="100vh"
        p="4"
        position="fixed"
        top="0"
        left="0"
      >
        <Flex alignItems="center" mb="8">
          <Icon as={FaUser} boxSize="6" mr="3" />
          <Text fontSize="xl" fontWeight="bold" lineHeight="100%" mt="24px">
            Profiles
          </Text>
        </Flex>

        <VStack spacing="4" align="start">
          <NavLink to="/" color="white" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Icon as={FaUniversity} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Home
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            to="/showDriveDetails"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaHdd} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Drives
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            to="/ShowEventDetails"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaCalendar} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Events
              </Text>
            </Flex>
          </NavLink>
          <Link href="#" color="white" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Icon as={FaCog} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Settings
              </Text>
            </Flex>
          </Link>
        </VStack>

        <Divider mt="8" borderColor="gray.600" />

        <Text mt="8" fontSize="sm" color="gray.400">
          © 2023 Your App. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default StudDetails;
