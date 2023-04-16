import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  HStack,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLink = ({ children,href }: { children: ReactNode, href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
    onClick={() => {
      let element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    >
    {children}
  </Link>
);

const Links = ['About', "Faculty", "Team", "Events", "Blogs"];

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <a href='#'>
                  <Image
                    boxSize="50px"
                    src="logo.png"
                    alt="logo"
                  >
                  </Image>
                </a>
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink key={link} href={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>

            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                </Stack>
            </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}