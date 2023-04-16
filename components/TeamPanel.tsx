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
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

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
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
        
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
              />
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
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
    <Box p={4} id='Team'>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} >
        <Heading color={"blue.400"} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Our Team
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap='wrap' justify="center">
          {
            team.map((banda)=>{
              let charra = <>
              <Card key={banda.key} name={banda.name} desig={banda.desig} img={banda.img} />
              </>
              return charra
            })
          }
        </Flex>
      </Container>
    </Box>
  );
}