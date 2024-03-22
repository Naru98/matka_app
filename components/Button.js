import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'
import { Octicons } from '@expo/vector-icons';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 19, fontWeight: 'bold', ... { color: textColor } }}>{props.title}</Text>
            {props.title === 'Play' && <Octicons name='paper-airplane' size={19} style={styles.icon} color={ textColor} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon:{
        marginLeft: 5,
        alignSelf: 'baseline',
    },
    button: {
        flexDirection: 'row',
        paddingBottom: 16,
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button