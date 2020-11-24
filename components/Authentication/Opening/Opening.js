import React from 'react';
import { version } from 'react';
import { StyleSheet, Image, View, Text, Alert } from 'react-native';
import RoundButton from "./RoundButton";
import WeCareLogo from './WeCareLogo';

function Opening({ navigation }) {

    return (
        <View style={styles.wholeScreen}>
            <Image 
                    style={styles.image}
                    source={require("../../../assets/opening1.jpg")}
            ></Image>
            <View style={styles.textInfo}>
                <Text style={styles.textWelcome}>Chào mừng bạn đến với WeCare!</Text>
                <Text style={styles.textDetails}>
                    WeCare là một ứng dụng trực tuyến giúp bạn liên lạc với bác sĩ và 
                    chuyên gia sức khoẻ một cách dễ dàng hơn. 
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <RoundButton text='Đăng Ký' onPress={() => navigation.navigate('Age')} />
                <RoundButton text='Đăng Nhập' onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={styles.fastLogIn}>
                <Text style={styles.fastLogInText}>Hoặc Đăng Nhập Với</Text>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../../assets/facebook.png")}/>
                    <Image style={styles.logo} source={require("../../../assets/google-plus.png")}/>
                </View>
            </View>
            <View style={styles.weCareLogo}>
                <WeCareLogo/>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1
    },
    image: {
        flex: 0.5,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        height: 300,
        width: null,
        left: 0,
        right: 0
    },
    textInfo: {
        flex: 0.1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textWelcome: {
        fontSize: 23,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 5
    },
    textDetails: {
        textAlign: "center",
        fontSize: 15,
        padding: 5
    },
    buttonContainer: {
        flex: 0.2,
        padding: 10,
        paddingTop: 15,
        position: "relative",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20
    },
    fastLogIn: {
        flex: 0.1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    fastLogInText: {
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 10
    },
    logoContainer: {
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    logo: {
        width: 50,
        height: 50,
        marginHorizontal: 5
    },
    weCareLogo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})

export default Opening;
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>