import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
export default function AboutSection() {
  return (
    <Box p={4} id='About'>
      <Stack as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading my={10} color={'blue.400'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
              About Us
          </Heading>
          <Text
              fontFamily={'heading'}
              fontWeight={700}
              textTransform={'uppercase'}
              mb={3}
              fontSize={'xl'}
              color={useColorModeValue('blue.200','blue.100')}>
              Data is a form of capital. And as is the case with all capital - it has to be efficiently utilized.
              
          </Text>
          <Text 
            fontWeight={500}
            color={'gray.500'}
            fontSize={{ base: 'md', sm: 'lg' }}>
              - Hendrith Vanlon Smith Jr, CEO Plymouth-Mayweather
          </Text>
          
          
      </Stack>

      <Container maxW={'5xl'} mt={20}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Text fontSize={'2xl'} color={useColorModeValue('gray.700','gray.300')}>
                The Data Science Club is a student-led organization dedicated to promoting data science knowledge and skills among students at universities and colleges. The club provides a platform for students to learn and explore various data science tools, techniques, and methodologies through workshops, talks, and hands-on projects.
                The club is open to students from all academic backgrounds who are interested in learning about data science. Members of the club come from diverse fields such as computer science, mathematics, statistics, and engineering. This diversity of membership allows for a collaborative learning environment where members can share their knowledge and experience with each other.
                Overall, the Data Science Club provides a supportive community for students to develop their data science skills and interests. The club&apos;s focus on hands-on learning and collaboration allows members to gain practical experience and build a strong foundation in data science, which can be valuable in both academia and industry.
            </Text>
          </Flex>
      </Container>

    </Box>
  );
}