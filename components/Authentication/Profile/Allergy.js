import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Item, Input } from 'native-base';
import WeCareLogo from '../Opening/WeCareLogo';
import RoundButton from '../Opening/RoundButton';

function Allergy({ navigation }) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Tiền Sử Dị Ứng</Text>
            </View>
            <View style={styles.allergyContainer}>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Dị Ứng'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Dị Ứng'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Dị Ứng'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Dị Ứng'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Dị Ứng'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Dị Ứng'/>
                </Item>
            </View>
            <View style={styles.button}>
                <RoundButton text="Tiếp Tục" onPress={() => navigation.navigate('Disease')} />
            </View>
            <View style={styles.logo}>
                <WeCareLogo/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1
    },
    topBar: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    topBarText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    allergyContainer: {
        flex: 0.7,
        paddingBottom: 10,
        justifyContent: "space-evenly"
    },
    items: {
        marginLeft: 30,
        marginRight: 30,
    },
    button: {
        flex: 0.1,
        paddingHorizontal: 90,
        justifyContent: "flex-end"
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})
export default Allergy;