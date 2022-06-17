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
import { useEffect, useState } from "react";
import axios from "axios";
import Background from "./assets/Background.svg";
import { ReactComponent as Loader } from "./assets/Loader.svg";
import { motion } from "framer-motion";

const referenceData = {
  name: "Hi, I am",
  email: "My Email is",
  dob: "My Birthday is",
  phone: "My Phone Number is",
  address: "I Live in,",
};

function App() {
  const [reference, setReference] = useState(referenceData.name);
  const [loading, setLoading] = useState(null);
  const [header, setHeader] = useState("");
  const [user, setUser] = useState({});

  const getUser = async () => {
    setLoading(true);
    const response = await axios.get("https://randomuser.me/api/");
    const user = response.data.results[0];
    console.log(user);
    const { phone, email } = user;
    const { large: picture } = user.picture;
    const { first, last } = user.name;
    const { date: dob } = user.dob;
    const { city, country } = user.location;

    const newUser = {
      picture,
      name: `${first} ${last}`,
      dob: dob.slice(0, 10),
      address: `${city}, ${country}`,
      phone,
      email,
    };
    setUser(newUser);
    setHeader(newUser.name);
    setReference(referenceData.name);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return (
      <VStack h="100vh" w="100vw" justifyContent="center">
        <Loader />
      </VStack>
    );
  }

  return (
    <VStack h="100vh" w="100vw" justifyContent="center">
      <VStack
        w={{ base: "90vw", md: "50vw" }}
        rowGap={5}
        boxShadow="2xl"
        borderRadius="lg"
        overflow="hidden"
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      >
        <Center bgImage={Background} p={4} w="100%">
          <Image src={user.picture} w="10rem" borderRadius="full" />
        </Center>
        <VStack>
          <Text fontSize="lg" color="gray.400" fontWeight="bold">
            {reference}
          </Text>
          <Heading fontSize={{ base: "xl", md: "3xl" }}>{header}</Heading>
        </VStack>
        <HStack w="80%" justifyContent="space-evenly">
          <IconButton
            icon={<FaUser />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.name);
              setHeader(user.name);
            }}
          />
          <IconButton
            icon={<FaCalendarAlt />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.dob);
              setHeader(user.dob);
            }}
          />
          <IconButton
            icon={<MdLocationPin />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.address);
              setHeader(user.address);
            }}
          />
          <IconButton
            icon={<FaPhoneAlt />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.phone);
              setHeader(user.phone);
            }}
          />
          <IconButton
            icon={<MdEmail />}
            size="lg"
            isRound
            onClick={() => {
              setReference(referenceData.email);
              setHeader(user.email);
            }}
          />
        </HStack>
        <Center p={2}>
          <Button
            rightIcon={<FaRandom />}
            colorScheme="blue"
            bg="#385490"
            onClick={getUser}
          >
            Random
          </Button>
        </Center>
      </VStack>
    </VStack>
  );
}

export default App;
