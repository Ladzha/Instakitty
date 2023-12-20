import {Box, Image} from '@chakra-ui/react' 
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const OneFeedPost = ({postImage, username, avatar}) => {
  return (
    <>
    <PostHeader username={username} avatar={avatar}/>
    <Box my={2}>
      <Image src={postImage} borderRadius={4} alt={username}/>
    </Box>
    <PostFooter username={username}/>
    </>
  )
}

export default OneFeedPost