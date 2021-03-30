import * as React from "react"
import Navbar from "./components/Navbar";
import { Box, Text} from "@chakra-ui/react"
import ItemList from "./components/ItemList"

const App: React.FC = () => {
    return (
        <>
        <Navbar />
        <Box p={7}>
        <Text fontSize="lg">Items</Text>
            <Box w="75%" p={1}>
                <ItemList />
            </Box>
        </Box>
        </>
        
    )
}

export default App;