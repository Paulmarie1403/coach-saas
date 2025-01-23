import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

export const ClientCard = ({ client }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image
        src={client.avatar}
        alt={client.name}
        borderRadius="full"
        boxSize="100px"
      />
      <Text mt="2" fontWeight="bold">{client.name}</Text>
      <Text>Programme: {client.program}</Text>
      <Text>Progrès: {client.progress}%</Text>
    </Box>
  );
};
