import React from "react";
import { Text, TouchableOpacity} from "react-native";
import styles from "./style";

export default function CardPessoas({nome}) {
    return(
        <TouchableOpacity style = {styles.containerJogos}>
            <Text style = {styles.titulo} >{nome}</Text>

        </TouchableOpacity>
    )
}