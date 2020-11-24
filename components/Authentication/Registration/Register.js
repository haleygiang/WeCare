import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native';
import WeCareLogo from '../Opening/WeCareLogo';
import {Input, Item, Form, Label } from 'native-base';
import RoundButton from '../Opening/RoundButton';

function Register(props) {

    return (
        <View style={styles.wholeScreen}>
            {/* <View style={styles.topBar}>
                <Text style={styles.topBarText}>Đăng Kí Sử Dụng</Text>
            </View> */}
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require('../../../assets/18.jpg')}/>
            </View>
            <View style={styles.iconContainer}>
                <Image
                style={styles.icon}
                source={require('../../../assets/stamped.png')}/>
                {/* Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                <Text style={styles.iconText}>Đăng Kí Tài Khoản</Text>
            </View>
            <View style={styles.registrationContainer}>
                <View style={styles.form}>
                    <Form>
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Họ và Tên</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Email</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Mật Khẩu</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Xác Nhận Mật Khẩu</Label>
                            <Input />
                        </Item>
                    </Form>
                </View>
                <View style={styles.button}>
                    <RoundButton text="Đăng Kí" onPress={() => Alert.alert('Đăng Kí Thành Công!')}/>
                </View>
            </View>
            <View style={styles.logo}>
                <WeCareLogo/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1,
    },
    // topBar: {
    //     flex: 0.05,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // paddingTop: 30,
    // },
    // topBarText: {
    //     fontSize: 20,
    // },
    imageContainer: {
        flex: 0.4, 
        paddingBottom: 20
    },
    image: {
        height: 260,
        width: null,
        left: 0,
        right: 0
    },
    iconContainer: {
        flex: 0.13,
        alignItems: "center",
        // padding: 10
    },
    icon: {
        width: 50,
        height:50,
        alignSelf: "center",
        paddingTop: 40
    },
    iconText: {
        paddingTop: 10,
        fontSize: 17,
        fontWeight: "500"
    },
    registrationContainer: {
        flex: 0.37,
    },
    form:{
        marginLeft: 10,
        marginRight: 20
    },
    labelText: {
        fontSize: 16
    },
    button: {
        paddingTop: 10,
        paddingHorizontal: 90
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})
export default Register;