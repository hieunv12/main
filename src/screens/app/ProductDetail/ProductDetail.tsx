import React from "react";
import {useModel} from "./ProductDetail.hook";
import {View} from "react-native";
import {styles} from "./styles";
import {HeaderScreen} from "@components";
import {useRoute} from "@react-navigation/native";
import {BottomProduct} from "./block/BottomProduct";
export const ProductDetail =(props:any)=>{
    const {}=useModel(props)
    const {params}=useRoute()
    return(
        <View style={styles.container}>
            <HeaderScreen/>

            <BottomProduct/>
        </View>
    )
}
