import React, { useState, useEffect, useContext } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-auth";
import { UserContext } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function DisplayData() {
  const usersCollectionRef = collection(db, "students");
  const user = useContext(UserContext);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const q = query(usersCollectionRef);
    const unSub = onSnapshot(q, (querySnapshot) => {
      let detailsArr = [];
      querySnapshot.forEach((doc) => {
        detailsArr.push({ ...doc.data(), id: doc.id });
      });
      setDetails(detailsArr);
    });

    return () => unSub();
  },);

  if (!user) {
    return <Navigate to="/student" />;
  }

  return (
    <Box
      bgGradient="linear(to-r, teal.500, blue.500)"
      p={4}
      minHeight="0vh"
    >
      <Box maxW="lg" mx="auto">
        {details && details.length > 0 ? (
          details.map((user) => (
            <Box
              key={user.id}
              bg="white"
              p={4}
              mt={4}
              borderRadius="md"
              boxShadow="md"
            >
              <p>FirstName: {user.firstName}</p>
              <p>LastName: {user.lastName}</p>
              <p>Year studying: {user.year}</p>
              <p>CGPA: {user.cgpa}</p>
              <p>Address: {user.address}</p>
              <p>Contact: {user.contact}</p>
              <p>No of Backlogs: {user.backlogs}</p>
            </Box>
          ))
        ) : (
          <Box bg="white" p={4} mt={4} borderRadius="md" boxShadow="md">
            No profile details available
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DisplayData;
