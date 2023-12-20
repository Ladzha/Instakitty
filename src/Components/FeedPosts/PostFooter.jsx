import {Box, Flex, Text, InputGroup, InputRightElement, Input, Button} from '@chakra-ui/react';
import {useState} from 'react';
import { NotificationsLogo, UnlikeLogo, CommentLogo} from '../../assets/elements'

const PostFooter = ({username}) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(1000)


  const handleLike =()=>{
    if(liked){
      setLiked(false)
      setLikes(prevLikes => prevLikes-1)
    }else{
      setLiked(true)
      setLikes(prevLikes => prevLikes+1)
    }
  }

  return (
    <Box mb={6}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo/>
        </Box>  
      </Flex>
      <Text fontSize={'sm'} fontWeight={600}>
        {likes} likes
      </Text>
      <Text fontSize={'sm'} fontWeight={700}>
        {username} {' '} 
        <Text as='span' fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text fontSize={'sm'} color={'gray'}>
        View all {'1,000'} comments
      </Text>
      <Flex justifyContent={'space-between'} alignItems={'center'} gap={2} w={'full'}>
        <InputGroup mb={4}>
        <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}/>
        <InputRightElement>
        <Button fontSize={14} color={'blue.500'} cursor={'pointer'} _hover={{color:'white'}} bg={'transparent'}>Post</Button>
        </InputRightElement>
        </InputGroup>
      </Flex>



    </Box>
  )
}

export default PostFooter