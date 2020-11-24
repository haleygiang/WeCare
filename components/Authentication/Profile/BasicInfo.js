import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WeCareLogo from '../Opening/WeCareLogo';
import {Form, Item, Input, Label, DatePicker} from 'native-base';
import RoundButton from '../Opening/RoundButton';

function UsersInfo({ navigation }) {
    const [date, setDate] = useState(new Date())

    function handleDatePicker(newDate) {
        setDate(newDate)
    }

    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Thông Tin Cơ Bản</Text>
            </View>
            <View style={styles.avatarContainer}>
                <Text>User's Avatar</Text>
            </View>
            <View style={styles.infoContainer}>
                <Form>
                <Item floatingLabel>
                    <Label>Họ và Tên</Label>
                    <Input />
                </Item>
                    
                <Item>
                    <Label>Ngày Sinh</Label>
                    <DatePicker 
                        defaultDate={date}
                        minimumDate={new Date(1900, 1, 1)}
                        maximumDate={new Date(2020, 12, 31)}
                        locale={"vi"}
                        placeHolderTextStyle={styles.labelText}
                        onDateChange={() => handleDatePicker()}
                        />
                </Item>
                
                <Item floatingLabel>
                    <Label>Giới Tính</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Địa chỉ</Label>
                    <Input />
                </Item>
                </Form>
            </View>
            <View style={styles.button}>
                <RoundButton text="Tiếp Tục" onPress={() => navigation.navigate('Health')}/>
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
export default UsersInfo;