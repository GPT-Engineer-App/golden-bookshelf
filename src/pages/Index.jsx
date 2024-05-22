import { Container, Box, Text, VStack, HStack, Image, Button, Link, IconButton, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaAmazon, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const books = [
  {
    title: "Book Title 1",
    description: "Short description of Book 1.",
    cover: "https://images.unsplash.com/photo-1536237880829-dd441c249e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAxfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://www.amazon.com/dp/example1",
  },
  {
    title: "Book Title 2",
    description: "Short description of Book 2.",
    cover: "https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAyfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://www.amazon.com/dp/example2",
  },
  // Add more books as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" bg="black" color="gold" p={4}>
      {/* Header */}
      <Box as="header" textAlign="center" py={4}>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" mx="auto" />
      </Box>

      {/* Featured Section */}
      <Box textAlign="center" py={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Featured Book
        </Text>
        <Image src="https://images.unsplash.com/photo-1645075960701-573cbc669de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlZCUyMGJvb2slMjBjb3ZlcnxlbnwwfHx8fDE3MTY0MjE5MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured Book" my={4} />
        <Text fontSize="2xl">Featured Book Title</Text>
        <Text>Short description of the featured book.</Text>
        <Button as={Link} href="https://www.amazon.com/dp/featured" colorScheme="yellow" mt={4} leftIcon={<FaAmazon />}>
          Buy on Amazon
        </Button>
      </Box>

      {/* Introduction */}
      <Box textAlign="center" py={8}>
        <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTY0MjE5MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Author Headshot" borderRadius="full" boxSize="150px" mx="auto" />
        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          About the Author
        </Text>
        <Text maxW="600px" mx="auto">
          Brief introduction about the author.
        </Text>
      </Box>

      {/* Latest Books */}
      <Box py={8}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Latest Books
        </Text>
        <HStack spacing={8} justify="center" wrap="wrap">
          {books.map((book, index) => (
            <Box key={index} textAlign="center" maxW="200px">
              <Image src={book.cover} alt={book.title} boxSize="150px" mx="auto" />
              <Text fontSize="xl" mt={2}>
                {book.title}
              </Text>
              <Text>{book.description}</Text>
              <Button as={Link} href={book.link} colorScheme="yellow" mt={2}>
                Read More
              </Button>
            </Box>
          ))}
        </HStack>
      </Box>

      {/* Footer */}
      <Box as="footer" textAlign="center" py={4}>
        <HStack spacing={4} justify="center">
          <IconButton as={Link} href="https://facebook.com" icon={<FaFacebook />} aria-label="Facebook" colorScheme="yellow" />
          <IconButton as={Link} href="https://twitter.com" icon={<FaTwitter />} aria-label="Twitter" colorScheme="yellow" />
          <IconButton as={Link} href="https://instagram.com" icon={<FaInstagram />} aria-label="Instagram" colorScheme="yellow" />
        </HStack>
        <Text mt={4}>© 2023 Your Name. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
