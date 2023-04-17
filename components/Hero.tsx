import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    calc,
    } from '@chakra-ui/react';

export default function CallToActionWithVideo() {

    return (
        <Box id="hero">
        <Container maxW={'7xl'}>
        <Stack
        // height to fill the screen
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            h='calc(100vh)'>
            <Stack flex={1} spacing={{ base: 5, md: 10 }} padding={10} className='glassify' >
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                    <Text
                    as={'span'}
                    position={'relative'}
                    >
                    Data Science Club
                    </Text>
                    <br />
                    <Text as={'span'} color={'blue.400'}>
                    VIT Bhopal
                    </Text>
                </Heading>
                <Text color={useColorModeValue("gray.500","gray.50")}>
                    We Are An Officially Recognized Community For Data Science From VIT Bhopal University.
                    Welcome To The Universe Of Data So Called Data-Verse ,
                    A Community Where We Learn | Create | Innovate To Counter Real Life Problems Using Concepts Of Data Science And Other Computer Science Diciplines.
                </Text>
                <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: 'column', sm: 'row' }}>
                    <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'blue'}
                    bg={'blue.400'}
                    _hover={{ bg: 'blue.500' }}
                    onClick={
                        () => {
                            document.getElementById('Team').scrollIntoView({behavior: 'smooth'});
                        }
                    }>
                    Our Team
                    </Button>
                    <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}>
                    Join Us
                    </Button>
                </Stack>
            </Stack>
            <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            h='calc(100vh)'>
                <Blob
                    w={'150%'}
                    h={'150%'}
                    position={'absolute'}
                    top={'-20%'}
                    left={0}
                    zIndex={-1}
                    color={useColorModeValue('blue.200', 'blue.100')}
                />
                <Box
                    position={'relative'}
                    height={'300px'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    overflow={'hidden'}>
                    <Image
                    alt={'DataScience Image'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={
                        'https://ok-interservice.com/media/images/datascience.width-1920.jpg'
                    }
                    />
                </Box>
            </Flex>
        </Stack>
        </Container>
        </Box>
    );
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
        width={'100%'}
        viewBox="10 100 140 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.5,-37.6C35.8,-31.8,42.8,-24,43.3,-15.7C43.8,-7.3,37.8,1.5,32.8,8.7C27.7,15.9,23.7,21.4,18.4,29.8C13,38.2,6.5,49.5,-2.9,53.5C-12.4,57.6,-24.8,54.4,-30.9,46.2C-37,38.1,-36.8,25,-32.2,15.9C-27.7,6.8,-18.9,1.8,-20.7,-11.1C-22.5,-23.9,-34.9,-44.5,-33.2,-52.5C-31.5,-60.5,-15.8,-55.8,-3.1,-51.6C9.6,-47.3,19.2,-43.5,27.5,-37.6Z"
            transform="translate(100 100)"
            fill="currentColor"
        />
    </Icon>
);
};