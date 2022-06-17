import {
  Center,
  Text,
  Heading,
  HStack,
  Image,
  VStack,
  IconButton,
  Button,
} from "@chakra-ui/react";
import "./App.css";
import { FaUser, FaPhoneAlt, FaCalendarAlt, FaRandom } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { useState } from "react";

const data = {
  picture:
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  name: "random",
  dob: "random dob",
  email: "random.com",
  phone: "random number",
  address: "random address",
};

const referenceData = {
  name: "Hi, I am",
  email: "My email is",
  dob: "My birthday is",
  phone: "My phone number is",
  address: "I live in,",
};

function App() {
  const [reference, setReference] = useState(referenceData.name);
  const [header, setHeader] = useState(data.name);

  return (
    <VStack h="100vh" w="100vw" justifyContent="center">
      <VStack p={4} w={{ base: "90vw", md: "50vw" }} border="2px" rowGap={5}>
        <Center>
          <Image src={data.picture} w="10rem" borderRadius="full" />
        </Center>
        <VStack>
          <Text fontSize="lg" color="gray.400" fontWeight="bold">
            {reference}
          </Text>
          <Heading>{header}</Heading>
        </VStack>
        <HStack w="80%" justifyContent="space-evenly">
          <IconButton
            icon={<FaUser />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.name);
              setHeader(data.name);
            }}
          />
          <IconButton
            icon={<FaCalendarAlt />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.dob);
              setHeader(data.dob);
            }}
          />
          <IconButton
            icon={<MdLocationPin />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.address);
              setHeader(data.address);
            }}
          />
          <IconButton
            icon={<FaPhoneAlt />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.phone);
              setHeader(data.phone);
            }}
          />
          <IconButton
            icon={<MdEmail />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.email);
              setHeader(data.email);
            }}
          />
        </HStack>
        <Center>
          <Button rightIcon={<FaRandom />} colorScheme="blue">
            Random
          </Button>
        </Center>
      </VStack>
    </VStack>
  );
}

export default App;
