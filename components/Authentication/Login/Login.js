import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import {Input, Item, Form, Label } from 'native-base';
import WeCareLogo from '../Opening/WeCareLogo';

function Login({ navigation}) {
    return (
        <View style={styles.wholeScreen}>
            {/* <View style={styles.topBar}>
                <Text style={styles.topBarText}>Đăng Nhập</Text>
            </View> */}
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require('../../../assets/login.jpg')}/>
            </View>
            <View style={styles.iconContainer}>
                <Image
                style={styles.icon}
                source={require('../../../assets/user-login-button.png')}/>
                {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                <Text style={styles.iconText}>Đăng nhập ngay và Quản lý tài khoản của bạn</Text>
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.form}>
                    <Form>
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Email</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Mật Khẩu</Label>
                            <Input />
                        </Item>
                    </Form>
                </View>
                <View style={styles.cantLogin}>
                    <View style={styles.noAccount}>
                        <Text style={styles.noAccountText}>Chưa Có Tài Khoản?</Text>
                        <Text style={styles.highlightText} onPress={() => navigation.navigate('Register')}>Đăng Kí Ngay</Text>
                    </View>
                    <Text style={styles.highlightText}>Quên Mật Khẩu</Text>
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
        flex: 1
    },
    // topBar: {
    //     flex: 0.1,
    //     alignItems: "center",
    //     paddingTop: 30,
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
        flex: 0.15,
        alignItems: "center",
        justifyContent: "flex-start"
        // padding: 10
    },
    icon: {
        width: 50,
        height:50,
        alignSelf: "center",
        // paddingTop: 40
    },
    iconText: {
        paddingTop: 10,
        fontSize: 17,
        fontWeight: "500"
    },
    loginContainer: {
        flex: 0.35,
    },
    form:{
        marginLeft: 10,
        marginRight: 20
    },
    labelText: {
        fontSize: 16
    },
    cantLogin: {
        paddingTop: 15,
        marginLeft: 25,
    },
    noAccount: {
        flexDirection: "row",
        paddingBottom: 5
    },
    noAccountText: {
        fontSize: 15,
        paddingRight: 10
    },
    highlightText: {
        fontSize: 15,
        textDecorationLine: "underline",
        textDecorationColor: "blue",
        fontWeight: "600",
        color: "blue"
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})

export default Login;