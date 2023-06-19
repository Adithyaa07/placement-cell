import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddEventDetails from "./Events/AddEventDetails";
import ReactModal from "react-modal";
import { VStack, Text, Icon, Link, Divider } from "@chakra-ui/react";
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

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundColor = "purple";
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        <div style={{ backgroundColor }}>
          <AddEventDetails setIsOpen={setIsOpen} />
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
              <MenuItem>profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
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
            Admin Dashboard
          </Text>
        </Flex>

        <VStack spacing="4" align="start">
          <NavLink to="/" color="white" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Icon as={FaUniversity} boxSize="6" mr="3" />
              <Text mt="20px" m="5px" _hover={{ fontWeight: "semibold" }}>
                Home
              </Text>
            </Flex>
          </NavLink>
          <NavLink to="/AvailableStudents">
            <Flex align="center">
              <Icon as={FaHdd} boxSize="6" mr="3" />
              <Text mt="20px" m="5px" _hover={{ fontWeight: "semibold" }}>
                Student Profiles
              </Text>
            </Flex>
          </NavLink>

          <NavLink
            to="/addDriveDetails"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaHdd} boxSize="6" mr="3" />
              <Text mt="20px" m="5px" _hover={{ fontWeight: "semibold" }}>
                Add Drives
              </Text>
            </Flex>
          </NavLink>

          <Flex align="center">
            <Icon as={FaCalendar} boxSize="6" mr="3" />
            <Text
              mt="20px"
              m="5px"
              onClick={() => setIsOpen(true)}
              _hover={{ fontWeight: "semibold" }}
            >
              Add Events
            </Text>
          </Flex>

          <Link href="#" color="white" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Icon as={FaCog} boxSize="6" mr="3" />
              <Text mt="20px" m="5px" _hover={{ fontWeight: "semibold" }}>
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

export default AdminPage;
