// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import '../../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p="6" bg="teal.500" color="white">
      <Box>
        <Link to="/">
          <Text fontSize="lg" fontWeight="bold">
            Event Manager
          </Text>
        </Link>
      </Box>
      <Box display={{ base: 'block', md: 'none' }} mt="2">
        {/* Add a responsive menu button for mobile view if needed */}
      </Box>
      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Link to="/">
          <Text mr="4">Home</Text>
        </Link>
        <Link to="/about">
          <Text mr="4">About</Text>
        </Link>
        {/* Add more navigation links as needed */}
      </Box>
    </Flex>
  );
};

export default Navbar;
