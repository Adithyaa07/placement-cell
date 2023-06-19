import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FiAlertCircle, FiLock, FiMail } from "react-icons/fi";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    if (email && password) {
      // Login successful
      setShowAlert(false);
      console.log("Logged in");
      navigate("/adminPage");
    } else {
      // Show alert if fields are empty
      setShowAlert(true);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      background="linear-gradient(to right, #667eea, #764ba2)"
    >
      <form onSubmit={handleSubmit}>
        <Box
          maxW="md"
          p="6"
          bg="white"
          rounded="md"
          shadow="md"
          w="100%"
          mx="4"
        >
          <Text
            fontSize="px"
            fontWeight="semibold"
            lineHeight="110%"
            letterSpacing="-1%"
          >
            Student's Login
          </Text>

          {showAlert && (
            <Alert status="error" mb="4" borderRadius="md">
              <AlertIcon as={FiAlertCircle} boxSize={4} mr={2} />
              Please enter your email and password.
            </Alert>
          )}
          <FormControl>
            <FormLabel>
              <Icon as={FiMail} boxSize={4} mr={2} />
              Email
            </FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>
              <Icon as={FiLock} boxSize={6} mr={2} />
              Password
            </FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </FormControl>
          <Box mt="4">
            <Button colorScheme="blue" type="submit">
              Log In
            </Button>
          </Box>
          <Box mt="4" textAlign="center">
            <NavLink to="/forgotpassword">Forgot password?</NavLink>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Admin;
