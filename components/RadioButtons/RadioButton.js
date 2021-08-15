import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from "./styles/styles";

const RadioButton = (props) => {
    const [ radio, setRadio ] = useState('');

    const select = (value) => {
        setRadio(value);
        props.onSelect(value);
    }


    return (
        <View style={{flexDirection:'row'}}>
        {
            props.data.map((q) => {
            return(
                <View  key={q.label}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => select(q.value)}
                >
                    <Icon
                    size={props.styling.size}
                    color={props.styling.color}
                    name={ radio === q.value ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                    />
                    <Text style={{alignSelf:'center',marginRight: 10, marginTop: 2, fontSize: props.styling.size - 10}}>{q.label}</Text>
                </TouchableOpacity>    
                </View>
            )
            })
        }
        </View>
    )
}

export default RadioButton;