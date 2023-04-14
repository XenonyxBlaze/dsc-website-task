import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  HStack,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Links = ['Home', 'About', "Blogs", "Team", "Events", 'Contact'];

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
                <Image
                  boxSize="50px"
                  src="logo.png"
                  alt="logo"
                >
                </Image>
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
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
      </Box>
    </>
  );
}