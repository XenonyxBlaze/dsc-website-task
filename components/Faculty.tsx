import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    HStack,
    Container,
    Image,
    Flex,
    Spacer,
    Button,
  } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

const FacultyCard = ({name,imgurl,desc}:{ name:string, imgurl:string, desc:string}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (

    <Center py={12}>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={imgurl}
                />
                <Text>{desc}</Text>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    
        <Box
            role={'group'}
            p={6}
            maxW={'full'}
            h={'100%'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
                h={'full'}
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    filter: 'blur(15px)',
                    zIndex: -1,
                    backgroundImage: `url(${imgurl})`,
                }}
                >
                <Image
                    rounded={'lg'}
                    height={250}
                    width={282}
                    objectFit={'cover'}
                    src={imgurl}
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                 {name}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        <Button onClick={
                            () => {
                                // Launch modal with fac values
                                onOpen()
                            }
                        }>
                            <InfoOutlineIcon />
                        </Button>
                    </Text>
                </Stack>
            </Stack>
        </Box>
      </Center>
    );
  }

const faculty = [
    {
        key: 1,
        name: "Dr. Pon Harshavardhanan",
        imgurl: "pontest.png",
        desc:"Dr. Pon Harshavardhanan Is An Associate Professor In The School Of Computing Science & Engineering, VIT Bhopal University, India. He Was Awarded With B.E (CSE) From Bharathiar University, Coimbatore In The Year 2001, M.E (CSE) From Sathyabama Institute Of Science And Technology, Chennai In The Year 2006 And Doctoral Degree Ph.D (CSE) From Anna University, Chennai In The Year 2018. He Has 15 Years Of Teaching Experience From Engineering Institutions And 2 Years Of Industrial Experience From IT Industries. He Has Published 9 Research Articles In International And National Journals. His Research Areas Include Semantic Web Services, Distributed Systems, Cloud Computing, Machine Learning And Data Science."
    },
    {
        key: 2,
        name: "Dr. Abha Trivedi",
        imgurl: "abha.png",
        desc:"Dr. Abha Trivedi Has Completed My Ph.D. (GIS Cell) From Motilal Nehru National Institute Of Technology Allahabad (MNNIT), Prayagraj, India. I Received My MTech. Degree In Computer Science And Engineering From Rajiv Gandhi University, Itanagar, India. I Received The Degree Of B.Sc. Honors In Computer Science And Masters Of Computer Application From Bundelkhand University, Jhansi, India. Her Research Interest Is Towards Utilizing An Emerging Technology Of Computer Science (Agent-Based Modelling And Simulation) And Geographic Information Systems (GIS) To Deal With The Problems Existing In Social Scenarios Such As Crowd Safety In Large Gatherings. She Has Worked On Two Different Projects Assigned By The NCR Railway Department And Police Department During The Kumbh Mela Festival Held At Prayagraj, Uttar Pradesh From 14 January To 25 March, 2019."
    }
]

export default function FacultySection() {

    return (
        <Box p={4} id='Faculty'>
            <Container>
                <Heading mt={10} mb={20} color={'blue.400'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Our Faculty Coordinators 
                </Heading>

            </Container>
            <Flex p={5}>
                {
                    faculty.map((fac) => {
                        let skill_issue = 
                        <>
                            <Spacer />
                            <FacultyCard key={fac.key} name={fac.name} imgurl={fac.imgurl} desc={fac.desc} />
                        </>
                        return skill_issue
                    })
                }
                <Spacer />
            </Flex>
        </Box>
    );

}