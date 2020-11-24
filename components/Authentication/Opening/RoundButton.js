import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

function RoundButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1, 
        marginTop: 5 
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    }
})
export default RoundButton;