import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';


interface CardProps {
  name: string;
  desig: string;
  img: string;
}

const Card = ({ name, desig, img }: CardProps) => {
  return (
    <Box
      role={'group'}
      p={6}
      maxW={'250px'}
      h={'100%'}
      mt={20}
      mx={10}
      w={'full'}
      bg={useColorModeValue('gray.200', 'gray.700')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
        
            <Image
              rounded={'lg'}
              height={250}
              width={200}
              objectFit={'cover'}
              src={'images/Team/'+img}
              />
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text color={useColorModeValue('blue.700','blue.300')} fontWeight={500} fontSize={'xl'}>
              {desig}
            </Text>
          </Stack>
        </Stack>
    </Box>
  );
};

const team = [
  {
    key:1,
    name:'Charchit Jain',
    desig: 'President',
    img: 'charchitf.jpg'
  },
  {
    key:2,
    name:'Chetan Saini',
    desig: 'Vice President',
    img: 'chetan2.jpg'
  },
  {
    key:3,
    name:'Kannchi Maithil',
    desig: 'Treasurer',
    img: 'kanchiitest.jpg'
  },
  {
    key:4,
    name:'Vivek Yadav',
    desig:'Tech Team Head',
    img:'vivekf.jpg'
  },
  {
    key:5,
    name:'Aditya Kumar',
    desig:'Web Dev Team Lead',
    img:'aditya5.jpg'
  },
  {
    key:6,
    name:'Ujjwal Srivastava',
    desig:'Social Media Lead',
    img:'ujjwal2.jpg'
  },
  {
    key:7,
    name:'Anush Dubey',
    desig:'Design Team Lead',
    img:'anushf.jpg'
  },
  {
    key:8,
    name:'Ayush Kumar',
    desig:'Content Team Lead',
    img:'ayush1.jpg'
  },
  {
    key:9,
    name:'Ishika Shrivastava',
    desig:'Outreach Lead',
    img:'ishika1.jpg'
  },
  {
    key:10,
    name:'Deepti Shakya',
    desig:'Event Team Lead',
    img:'deepti1.jpg'
  }
]

export default function gridListWith() {
  return (
    <Box p={4} mb={20} id='Team'>
      <Container>
        <Heading textAlign={'center'}  mt={20} mb={10} color={'blue.400'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Our Team
        </Heading>
      </Container>

      <Flex flexWrap='wrap' justify="center">
        {
          team.map((banda)=>(
            <>
            <Card key={banda.key} name={banda.name} desig={banda.desig} img={banda.img} />
            </>
          ))
        }
      </Flex>
    </Box>
  );
}