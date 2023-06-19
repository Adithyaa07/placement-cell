import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-auth";
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
import { RiMailLine } from "react-icons/ri";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent successfully");
      })
      .catch((error) => {
        console.log("Error sending password reset email:", error);
      });

    setShowAlert(true);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bgGradient="linear(to right, teal.400, blue.500)">
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
            Password reset instructions have been sent to your email.
            <CloseButton
              onClick={() => setShowAlert(false)}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}
        <form onSubmit={handleResetPassword}>
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
                <RiMailLine size="20px" />
              </Box>
            </Flex>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Reset Password
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Forgot;
