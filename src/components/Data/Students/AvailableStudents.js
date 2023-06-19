// import React, { useState, useEffect } from "react";
// import { collection, query, onSnapshot } from "firebase/firestore";
// import { db } from "../../../firebase-auth";
// // import classes from './displayData.module.css'

// function AvailableStudents() {
//   const usersCollectionRef = collection(db, "students");

//   const [details, setDetails] = useState([]);

//   useEffect(() => {
//     const q = query(usersCollectionRef);
//     const unSub = onSnapshot(q, (querySnapshot) => {
//       let detailsArr = [];
//       querySnapshot.forEach((doc) => {
//         detailsArr.push({ ...doc.data() });
//       });
//       setDetails(detailsArr);
//     });

//     return () => unSub();
//   });

//   return (
//     <div>
//       {details && details.length > 0 ? (
//         details.map((user, index) => (
//           <div key={index}>
//             <p>
//               <b>FirstName: </b>
//               {user.firstName}
//             </p>
//             <p>LastName: {user.lastName}</p>
//             <p>Year studying: {user.year}</p>
//             <p>CGPA: {user.cgpa}</p>
//             <p>Address: {user.address}</p>
//             <p>Contact: {user.contact}</p>
//             <p>No of Backlogs: {user.backlogs}</p>
//           </div>
//         ))
//       ) : (
//         <div>No profile details available</div>
//       )}
//     </div>
//   );
// }

// export default AvailableStudents;
import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-auth";
import { Box, Text } from "@chakra-ui/react";
import { Container, Grid, Flex } from "@chakra-ui/layout";

function AvailableStudents() {
  const usersCollectionRef = collection(db, "students");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const q = query(usersCollectionRef);
    const unSub = onSnapshot(q, (querySnapshot) => {
      let detailsArr = [];
      querySnapshot.forEach((doc) => {
        detailsArr.push({ ...doc.data() });
      });
      setDetails(detailsArr);
    });

    return () => unSub();
  },);

  return (
    <Box bg="blue.500" py={8}>
      <Container maxW="container.lg">
        <Flex justifyContent="center">
          <Box bg="white" borderRadius="md" boxShadow="md" p={4}>
            {details && details.length > 0 ? (
              <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
                {details.map((user, index) => (
                  <Box key={index}>
                    <Text>
                      <b>FirstName: </b>
                      {user.firstName}
                    </Text>
                    <Text>
                      <b>LastName: </b>
                      {user.lastName}
                    </Text>
                    <Text>
                      <b>Year studying: </b>
                      {user.year}
                    </Text>
                    <Text>
                      <b>CGPA: </b>
                      {user.cgpa}
                    </Text>
                    <Text>
                      <b>Address: </b>
                      {user.address}
                    </Text>
                    <Text>
                      <b>Contact: </b>
                      {user.contact}
                    </Text>
                    <Text>
                      <b>No of Backlogs: </b>
                      {user.backlogs}
                    </Text>
                  </Box>
                ))}
              </Grid>
            ) : (
              <Text>No profile details available</Text>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default AvailableStudents;
