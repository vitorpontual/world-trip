import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";

interface CaracteristicProps {
  icon: string;
  text: string;
}

export default function Caracteristic({icon, text}: CaracteristicProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Flex
    direction={['row', 'column']} align='center' justify='center'
    >{isMobile ? <Image src={`/icon/${icon}`} w='85px' h='85px' mb='6' /> :  <Text color='yellow.400' fontSize='4xl'>⦁</Text>
  }
    <Text fontWeight='600' color='gray.700' fontSize={['md', 'xl', '2xl']}>{text}</Text>

    </Flex>
  ) 
}