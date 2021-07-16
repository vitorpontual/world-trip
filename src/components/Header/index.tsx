import { Flex, Grid, Image, Link, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';


export default function Header() {
  const {asPath} = useRouter()
  const notHomePage = asPath !== '/'
  console.log(notHomePage)

  return (
    <Flex
      as='header'
      bg='white'
      w='100%'
      p='1rem'
      h={['50px', '100px']}
      align='center'
      justify='center'
    >
      <Grid
        h='100%'
        mx='auto'
        w='100%'
        maxWidth={1160}
        alignItems='center'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
      >
        {notHomePage && (
          <Link href="/" gridColumn='1'>
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/Logo.svg"
          alt="Um avição voando sobre o nome da marca world trip"
          justifySelf="center"
          gridColumn="2"
        />

      </Grid>

    </Flex >
  )
}
