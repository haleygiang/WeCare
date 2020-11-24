import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

function WeCareLogo(props) {
    return (
        <View style={styles.wecare}>
                <Image
                    style={styles.wecareDot} 
                    source={require("../../../assets/rec.png")} 
                    // Icons made by <a href="https://www.flaticon.com/authors/hirschwolf" title="hirschwolf">hirschwolf</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                />
                <Text style={styles.wecareText}>WeCare</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wecareDot: {
        width: 10,
        height: 10
    },
    wecare: {
        // flex: 0.1,
        marginLeft: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    wecareText: {
        paddingLeft: 5,
        fontWeight: 'bold'
    }
})
export default WeCareLogo;