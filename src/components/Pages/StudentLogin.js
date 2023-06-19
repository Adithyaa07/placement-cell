import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { useToast } from "@chakra-ui/react";
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
  Text,
} from "@chakra-ui/react";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";

const Student = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();
  const user = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        position: "top",
        title: "login success",
        description: "You are logged in successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      if (!user) {
        return <navigate to="/student" />;
      }

      navigate("/studentDetails");
    } catch (error) {
      setShowAlert(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to right, teal.400, blue.500)"
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
          <Alert status="error" mb="4">
            <AlertIcon />
            Invalid email or password/Not Registered. Please try again.
            <CloseButton
              onClick={() => setShowAlert(false)}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}
        <form onSubmit={handleLogin}>
          <Text
            fontSize="px"
            fontWeight="semibold"
            lineHeight="110%"
            letterSpacing="-1%"
          >
            Student's Login
          </Text>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Flex>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Box ml="2">
                <RiUserFill size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Flex>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Box ml="2">
                <RiLockPasswordFill size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
          <span>
            <NavLink to="studentRegister">Don't have an account ?</NavLink>
          </span>
          <span>
            <NavLink to="studentForgot">Forgot password</NavLink>
          </span>
        </form>
      </Box>
    </Flex>
  );
};

export default Student;
