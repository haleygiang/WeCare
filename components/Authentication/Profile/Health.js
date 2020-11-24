import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WeCareLogo from '../Opening/WeCareLogo';
import {Form, Item, Input, Label} from 'native-base';
import RoundButton from '../Opening/RoundButton';

function Health({ navigation}) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Thông Tin Sức Khoẻ</Text>
            </View>
            <View style={styles.avatarContainer}>
                <Text>User's Avatar</Text>
            </View>
            <View style={styles.infoContainer}>
                <Form>
                <Item floatingLabel>
                    <Label>Chiều cao (cm)</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Cân nặng (kg)</Label>
                    <Input />
                </Item>
                </Form>
            </View>
            <View style={styles.button}>
                <RoundButton text="Tiếp Tục" onPress={() => navigation.navigate('Drugs')}/>
            </View>
            <View style={styles.logo}>
                <WeCareLogo />
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
    avatarContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: "center",
    },
    infoContainer: {
        flex: 0.6,
    },
    button: {
        flex: 0.1,
        paddingHorizontal: 90
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
})

export default Health;