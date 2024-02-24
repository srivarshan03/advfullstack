// Services.jsx

import React from 'react';
import { Container, Heading, Text, Box, SimpleGrid } from '@chakra-ui/react';
import '../../assets/css/services.css';

const ServiceCard = ({ title, description }) => (
  <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
    <Heading as="h3" size="lg" mb="2">
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const Services = () => {
  const servicesData = [
    {
      title: 'Event Planning and Coordination',
      description: 'From concept development to on-site coordination, we ensure a seamless and successful event.',
    },
    {
      title: 'Venue Selection and Management',
      description: 'We help you find the perfect venue for your corporate event and manage all logistics related to it.',
    },
    {
      title: 'Catering and Hospitality',
      description: 'Delicious catering options and top-notch hospitality services to enhance your event experience.',
    },
    {
      title: 'Audio-Visual Production',
      description: 'State-of-the-art audio-visual solutions to make your corporate event visually and acoustically impressive.',
    },
    {
      title: 'Entertainment Booking',
      description: 'Book the best entertainment acts to keep your guests engaged and entertained throughout the event.',
    },
    {
      title: 'On-Site Staffing',
      description: 'Professional on-site staffing to ensure everything runs smoothly during your corporate event.',
    },
  ];

  return (
    <Container maxW="container.xl" mt="8">
      <Heading as="h1" mb="4">
        Our Corporate Event Management Services
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Services;
