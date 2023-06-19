// /* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";

import { createUser } from "../../context/AuthContext";

import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { RiUserFill, RiMailLine, RiLockPasswordFill } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUser(registerEmail, registerPassword);
     toast({
        position: "top",
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/student");
    } catch (e) {
      console.log(e.message);
      setShowAlert(true);
    }
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to right, purple.400, pink.500)"
    >
      <Box
        p="8"
        mx="auto"
        maxWidth="400px"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="white"
      >
        {showAlert && (
          <Alert status="success" mb="4">
            <AlertIcon />
            Registration successful! Please check your email.
            <CloseButton
              onClick={() => setShowAlert(false)}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}
        <form onSubmit={handleRegister}>
          <FormControl mb="4">
            <FormLabel>Name</FormLabel>
            <Flex>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Box ml="2">
                <RiUserFill size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Flex>
              <Input
                type="email"
                placeholder="Enter your email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <Box ml="2">
                <RiMailLine size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Flex>
              <Input
                type="password"
                placeholder="Enter your password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <Box ml="2">
                <RiLockPasswordFill size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full">
            Register
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
