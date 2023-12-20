import { Box, Button, Input, VStack, Image, Flex, Text } from '@chakra-ui/react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] =useState({
    email:'',
    password:'',
    confirmPassword:''
  });

  const navigate = useNavigate();


  const handleAuth=()=>{

    if(!inputs.email || !inputs.password){
      alert('Please fill all the fields')
      // if(isLogin){
      //   console.log('');
      // }else{
      //   console.log('');
      // }
      return
    }

    setInputs({
      email:'',
      password:'',
      confirmPassword:''
    })

    navigate('/');

  }

  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>

        <Image src={'/logo.png'} h={20} cursor={'pointer'} alt='Instakitty'/>

        <Input type='email' placeholder='Email' fontSize={14} 
        value={inputs.email} 
        onChange={(event)=>setInputs({...inputs, email: event.target.value})}/>

        <Input type='password' placeholder='Password' fontSize={14} 
        value={inputs.password} 
        onChange={(event)=>setInputs({...inputs, password: event.target.value})}/>

        {!isLogin ? 
        <Input type='password' placeholder='Confirm password' fontSize={14} 
        value={inputs.confirmPassword} 
        onChange={(event)=>setInputs({...inputs, confirmPassword: event.target.value})}/> 
        : null}

        <Button  w={"full"} colorScheme={'blue'} size={'sm'} fontSize={14}
        onClick={handleAuth}>{isLogin ? 'Log in' : 'Sign up'} </Button>

        <Flex justifyContent={'center'} alignItems={'center'} my={4} gap={1} w={'full'}>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
            <Text mx={1} color={'white'}>OR</Text>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
        </Flex>

        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
          <Image src='/google.png' w={5} alt='Google logo'/>
          <Text mx={3} color={'blue.500'}>Log in with Google</Text>    
        </Flex>  

      </VStack>
    </Box>

    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Box mx={2} fontSize={14}>
          {isLogin? "Don't have an account" : "Already have an account"}
        </Box>
        <Box onClick={()=>setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'} fontSize={14}>
          {isLogin ? 'Sign up' : 'Log in'}
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default AuthForm