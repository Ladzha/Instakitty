import { Container } from '@chakra-ui/react' 
import OneFeedPost from './OneFeedPost.jsx'
import { useState, useEffect } from 'react'

const FeedPosts = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
  })
  

  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      <OneFeedPost postImage={'/img1.png'}username={'Dzha-Dzha'} avatar={'/img1.png'}/>
      <OneFeedPost postImage={'/img2.png'}username={'Lolalalo'} avatar={'/img2.png'}/>
      <OneFeedPost postImage={'/img3.png'}username={'Mick'} avatar={'/img3.png'}/>
      <OneFeedPost postImage={'/img4.png'}username={'John'} avatar={'/img4.png'}/>
    </Container>
  )
}

export default FeedPosts