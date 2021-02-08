import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default props => {
    return (
        <TouchableOpacity
            style={[props.buttonStyle, props.stylesLevel]}
            onPress={() => props.onLevelSelected()}>
            <Text style={props.buttonLabel}>{props.label}</Text>
        </TouchableOpacity>
    )
}