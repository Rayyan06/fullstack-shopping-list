import React from "react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"

export const DeleteButton : React.FC = ({removeItem}) => {
    return <IconButton colorScheme="red" size="sm" variant="ghost" onClick={removeItem} icon={<DeleteIcon />} aria-label="Remove Item" />
}


export const AddButton : React.FC = ({ onClick }) => {
    return <IconButton icon={<AddIcon />} variant="outline" colorScheme="purple" aria-label="Add Item" onClick={onClick}/>
}