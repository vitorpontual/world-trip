import { Box, Flex, Heading, Text, Image} from "@chakra-ui/react";


export default function Banner() {
  return (
    <Flex w='100%' h={[163, 250, 250, 335]} bgImage='url(/image/banner.jpeg)' bgRepeat='no' bgPosition={['100% 20%', '100% 20%', '100% 30%']} bgSize='cover'>
      <Flex justify={['center', 'space-between']} align='center' w='100%' mx='auto' px={['4', '10', '15', '20', '36']}>
        <Box>
          <Heading color='gray.100' fontWeight='500' fontSize={['xl', '2l', '2xl', '2xl', '4xl']} mb='24px'>
            5 continents, <br /> infinitas possibilidades.
          </Heading>
          <Text color='gray.100' fontWeight='300' fontSize={['0.8rem', 'xl']} maxW={['100%', '100%', '100%', '550px']}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image 
            w={[300, 300, 300, 430]}
            display={['none', 'none', 'block']}
            src='/image/Airplane.svg'
            alt='Avião amarelo com algumas nuvens'
            transform='translateY(48px)'
            ml='8'
          />


      </Flex>

    </Flex>
  )
}