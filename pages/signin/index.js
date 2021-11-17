import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import SignInMotion from "@/components/motions/signin-isometric";
import Layout from "@/components/layouts/format";
import Loading from "@/components/loading";
import { useForm } from "react-hook-form";
import { useAuth } from "@/libs/firebase/auth";

const SignIn = () => {
  const {
    user,
    classicSignIn,
    credentialWithGoogle,
    credentialWithGithub,
    error,
    isFetching,
    isSubmit,
  } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { colorMode } = useColorMode();

  function onSubmit(values) {
    classicSignIn(values.email, values.password);
  }

  if (user) {
    router.push("/");
    return <></>;
  }

  return (
    <>
      {isFetching ? (
        <Layout title="Sign in">
          <Loading />
        </Layout>
      ) : (
        <Layout title="Sign in">
          <Container
            display="flex"
            maxW="container.lg"
            position="relative"
            pt="2rem"
            justifyContent="center"
          >
            <Box
              as="div"
              width={{ base: "20em", md: "30em", lg: "30em" }}
              height="32em"
              position={{ base: "", md: "absolute", lg: "absolute" }}
              css={{ backdropFilter: "blur(10px)" }}
              zIndex={1}
              transform={{ base: "", md: "", lg: "translateX(-9em)" }}
              borderRadius="10px"
            >
              {error && (
                <Alert
                  status="error"
                  w={"90%"}
                  borderRadius={"40px"}
                  bg={"white"}
                  color={"black"}
                  position="absolute"
                  transform={"translateY(-2rem)"}
                >
                  <AlertIcon color={"black"} />
                  <AlertTitle mr={2}>{error}</AlertTitle>
                </Alert>
              )}
              <Heading>Sign in</Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl id="signin-email" isInvalid={errors.email} mt={4}>
                  <FormLabel mt={4}>email:</FormLabel>
                  <Input
                    w="90%"
                    transition="all 300ms ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                    placeholder="君のEメール"
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9-_]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
                        message:
                          "Invalid email address (allow only alphabets, numbers, [_, -]).",
                      },
                      minLength: {
                        value: 8,
                        message: "Minimum email characters length is 8.",
                      },
                      maxLength: {
                        value: 40,
                        message: "Maximum email characters length is 40.",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="signin-password"
                  isInvalid={errors.password}
                  mt={4}
                >
                  <FormLabel mt={4}>password:</FormLabel>
                  <Input
                    w="90%"
                    transition="all 300ms ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                    placeholder="君のパスワード"
                    type="password"
                    {...register("password", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9@_]{2,}$/i,
                        message:
                          "Invalid password key syntaxs (allow only alphabets, numbers, [@, _]).",
                      },
                      minLength: {
                        value: 8,
                        message: "Mimimum password characters length is 8.",
                      },
                      maxLength: {
                        value: 40,
                        message: "Maximum password characters length is 40.",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  mt={4}
                  isLoading={isSubmit}
                  bg={"black"}
                  color={"white"}
                  transition="all 400ms ease-in-out"
                  type="submit"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  Submit
                </Button>
              </form>
              <Text mt={8}>
                Still not have account?
                <Link href="/signup">
                  <a
                    style={{
                      color: colorMode == "light" ? "black" : "white",
                      fontWeight: "bold",
                      marginLeft: "0.5rem",
                    }}
                  >
                    sign-up here
                  </a>
                </Link>
                !
              </Text>
              <Text mt={4}>
                Forgot{" "}
                <Link href="/signin/forgot">
                  <a
                    style={{
                      color: colorMode == "light" ? "black" : "white",
                      fontWeight: "bold",
                      marginLeft: "0.5rem",
                    }}
                  >
                    password
                  </a>
                </Link>
                ?
              </Text>
              <HStack mt={8}>
                <Button
                  bg={colorMode == "light" ? "white" : "#e73727"}
                  leftIcon={<FaGoogle />}
                  onClick={credentialWithGoogle}
                >
                  Google
                </Button>
                <Button
                  bg={colorMode == "light" ? "white" : "black"}
                  leftIcon={<FaGithub />}
                  onClick={credentialWithGithub}
                >
                  Github
                </Button>
              </HStack>
            </Box>
            <Box
              as="div"
              transform="translateX(14rem)"
              display={{ base: "none", md: "inline-block" }}
            >
              <SignInMotion />
            </Box>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default SignIn;
