import {
  Box,
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <Image boxSize='50px' src='images/logo.png' />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blue.200', 'blue.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const socialsDetail = [
    {
        label: 'Twitter',
        href:'https://twitter.com/DSC_VITB',
        icon: <FaTwitter />
    },
    {
        label: 'Instagram',
        href:'https://www.instagram.com/dsc_vitb',
        icon: <FaInstagram />
    },
    {
        label: 'Linkedin',
        href:'https://www.linkedin.com/in/data-science-club-vit-bhopal-5b9b02232',
        icon: <FaLinkedin />
    },
    {
        label: 'Github',
        href:'https://github.com/cdsvitbhopal',
        icon: <FaGithub />
    },
    {
        label: 'Youtube',
        href:'https://www.youtube.com/channel/UC5pB8eW_kDoimQ5s4S7QgeA',
        icon: <FaYoutube />
    }
]

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© 2023 DSC VITB . All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
            <HStack
                as={'nav'}
                spacing={2}
                display={{ base: 'none', md: 'flex' }}>
                    {socialsDetail.map((social)=> (
                        <SocialButton key={social.label} label={social.label} href={social.href}>
                            {social.icon}
                        </SocialButton>
                    ))}
            </HStack>
        </Stack>
      </Container>
    </Box>
  );
}