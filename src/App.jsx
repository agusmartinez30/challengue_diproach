
import { useEffect, useState } from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

// components
import Categoria from './components/categoria/Categoria'
import SubCategoria from './components/sub_categoria/SubCategoria'
import ListCategories from './components/list_categories/ListCategories'


function App() {

  const [addCategories, setAddCategories] = useState([
    {
      id: Date.now(),
      title: 'Bebidas',
      subcategories: [
        {
          id: Date.now(),
          title: "Gaseosa"
        }
      ]
    },

  ])

  useEffect(() => {
    console.log(addCategories)
  }, [addCategories])

  return (
    <>
      <Container maxW={"full"} padding={0} bgColor={'#222831'}>
        <Box maxW={'1024px'} width={'100%'} margin={'0 auto'} minH={"100vh"} padding={3}>
          <Text fontSize={"2xl"} color={'#D6D5A8'}>Challenge Diproach</Text>
          <Box display={{ base: 'column', md: 'flex' }} justifyContent={'space-between'}>
            <Box width={'100%'} display={'flex'} flexDir={'column'} gap={6} padding={6} >
              <hr />
              <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                  <Tab>Crear categoría</Tab>
                  <Tab>Crear subcategoría</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Categoria setAddCategories={setAddCategories} addCategories={addCategories} />
                  </TabPanel>
                  <TabPanel>
                    <SubCategoria setAddCategories={setAddCategories} addCategories={addCategories} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box width={'100%'} >
              <ListCategories addCategories={addCategories} />
              {
                addCategories.length <= 0 && <Text color={'#fff'} textAlign={'center'} >No existe ninguna categoria</Text>
              }
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
