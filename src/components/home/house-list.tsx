import React, { FC } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { House } from "../state/house";
import { HouseItem } from "./house-item";

export interface HouseListProps {
    houses: House[];
}

export const HouseList: FC<HouseListProps> = ({ houses }) => {

    return <HStack marginLeft={200}>
        {houses.map(( houseItem : House ) => {  
            return <HouseItem house={houseItem}/>
        })}
    </HStack>
}