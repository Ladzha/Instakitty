
import { Flex, Container, VStack, Box, Image } from '@chakra-ui/react'
import AuthForm from '../../Components/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
      <Container maxW={'container.md'} padding={0} >
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          {/* Left side */}
          <Box display={{base:'none', md:'block'}}>
            <Image src='/auth.png' h={450} alt='Phone image'/>
          </Box>
          {/* Right side */}
          <VStack spacing={4} align={'stretch'}>
            <AuthForm/>
            <Box textAlign={'center'}>Get the app</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image src='playstore.png' alt='Playstore.png' h={10}/>
              <Image src='microsoft.png' alt='Microsoft.png' h={10}/>
            </Flex>
          </VStack>

        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage