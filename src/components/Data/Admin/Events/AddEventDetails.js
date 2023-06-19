import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { db } from "../../../../firebase-auth";

function AddEventDetails(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const collectionData = collection(db, "events");
  const navigate = useNavigate();

  const addEvent = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("Please fill in all the details");
      return;
    }
    await addDoc(collectionData, {
      title,
      description,
    });
    alert("Successfully added");
    navigate("/adminPage");
    props.setIsOpen(false);
  };

  return (
    <Box bgGradient="linear(to-r, black, gray.500)" p={4} color="white">
      <Heading>Add Event Details</Heading>

      <FormControl mt={4}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event title"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel htmlFor="description">Event Description</FormLabel>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event description"
        />
      </FormControl>

      <Button mt={4} colorScheme="teal" onClick={addEvent}>
        Add Event
      </Button>
    </Box>
  );
}

export default AddEventDetails;
