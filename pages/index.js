import React from 'react';
import { Box, Heading, Container, SimpleGrid } from '@chakra-ui/react';
import { ClientCard } from '../components/ClientCard';

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Box padding="4">
        <Heading>Coach Dashboard</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={6}>
          <ClientCard 
            client={{
              name: "John Doe",
              program: "Fitness",
              progress: 75,
              avatar: "https://via.placeholder.com/150"
            }}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
