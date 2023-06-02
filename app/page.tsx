"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as="section" direction="column" gap={4} placeItems="flex-start">
      <Heading as="h1">Chakra UI</Heading>
      <Button variant="outline" colorScheme="purple" size="lg">
        Button
      </Button>
    </Flex>
  );
}
