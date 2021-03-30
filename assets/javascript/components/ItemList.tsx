import React from "react"
import Cookies from 'js-cookie'

import { useState, useEffect } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { Spinner, Flex } from "@chakra-ui/react"

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

import {
    Skeleton,

    Stack
} from "@chakra-ui/react";



import { AddButton, DeleteButton } from "./MyButtons"

import { Input, Button, Center } from "@chakra-ui/react"


const ItemList: React.FC = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)


    const getItems = async() => {
        const response = await fetch(`https://fullstack-shopping-list.plorzon.repl.co/api/items`)
        const listItems = await response.json()
        return listItems
    }

    useEffect(() => {
        getItems()
        .then(listItems => {
            
            setItems(listItems)
            //window.alert(JSON.stringify(listItems))
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            window.alert(err)
        })
    }, []);

    const fetchItems = () => {
        setRefreshing(true)
        getItems()
        .then(listItems => {
            setItems(listItems)
            setRefreshing(false)
        })
    }

    if(refreshing) {
        return <Center>
        <Spinner />
        </Center>
    }



    if (loading) {
        return <Stack>
            <Skeleton height="30px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="30px" />
        </Stack>
    }
    return (
        <Skeleton isLoaded={!loading}>
            <Table>
                <Thead>
                    <Tr>
                    <Th isNumeric>ID</Th>
                    <Th>Name</Th>
                    <Th isNumeric>Price</Th>
                    <Th>Remove</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        items.map(item => <ItemRow item={item} fetchCallback={fetchItems}/>)
                    }
        
                </Tbody>

            </Table>
            <AddItem fetchCallback={fetchItems}/>
        </Skeleton>
    )
}


const ItemRow : React.FC = (props) => {

    const deleteItem = async(itemID) => {
        const response : any = await fetch(`/api/items${itemID}/`, {
            method: "DELETE",
            mode: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken') 
            },
            
        })
        .then((response) => {
            props.fetchCallback()
            return response.json()
        }).catch((error) => {
            window.alert(error)
            return error
        })
    }
    return (
        <Tr>
            <Td>{ props.item.id }</Td>
            <Td>{ props.item.name }</Td>
            <Td>{ props.item.price }</Td>
            <Td><DeleteButton onClick={() => deleteItem(props.item.id)}/></Td>
        </Tr>
    )
}

const AddItem : React.FC = ({fetchCallback}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const postItem = async() => {
        const response = await fetch("/api/items/", {
            method: "POST",
            mode: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken') 
            },
            body: JSON.stringify({
                name: name,
                price: price,
                is_checked: false
            })
        });
        return response.json()
    }

    const handleAddClick = () => {
       // window.alert(name)
        //window.alert(price)
        postItem()
        .then(data => {
            console.log(data)
            //window.alert(data)
            fetchCallback();
        })
        .catch(err => {
            window.alert(err)
        })
    }
    

    return (
        <Stack direction="row" spacing={4}> 
            <Input value={name} onChange={()=>{setName(event.target.value)}} placeholder="Item Name" />
            <NumberInput>
                <NumberInputField onChange={() => setPrice(event.target.value)} value={price}/>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <AddButton onClick={() => handleAddClick()} />
        </Stack>
    )
}
export default ItemList