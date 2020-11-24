import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Item, Input} from 'native-base';
import WeCareLogo from '../Opening/WeCareLogo';
import RoundButton from '../Opening/RoundButton';

function Drugs({ navigation }) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Thuốc Đã và Đang Sử Dụng</Text>
            </View>
            <View style={styles.drugsContainer}>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
                <Item rounded style={styles.items}>
                    <Input placeholder='Tên Thuốc'/>
                </Item>
            </View>
            <View style={styles.button}>
                <RoundButton text="Tiếp Tục" onPress={() => navigation.navigate('Allergy')} />
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
    drugsContainer: {
        flex: 0.7,
        paddingBottom: 10,
        justifyContent: "space-between"
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
export default Drugs;