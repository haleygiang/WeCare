import React from 'react';
import {Text, StyleSheet, View, Image, Alert} from 'react-native';
import RoundButton from '../Opening/RoundButton';
import WeCareLogo from '../Opening/WeCareLogo';

function Age({ navigation }) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Độ Tuổi</Text>
            </View>

            <View style={styles.ageQuestion}>
                <Image
                style={styles.idCard} 
                source={require("../../../assets/id-card.png")} />

                <Text style={styles.question}>Bạn đã đủ 18 tuổi chưa?</Text>
                <Text style={styles.reason}>Để tạo tài khoản, chúng tôi cần phải biết độ tuổi chính xác của bạn.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <RoundButton text='Tôi đã đủ 18 tuổi' onPress={() => navigation.navigate('Data')} />
                <RoundButton text='Tôi chưa đủ 18 tuổi' onPress={() => navigation.navigate('Data')} />
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
        justifyContent: "flex-start"
    },
    topBar: {
        flex: 0.1,
        alignItems: "center",
        paddingTop: 30
    },
    topBarText: {
        fontSize: 20,
    },
    ageQuestion: {
        flex: 0.6,
        alignItems: "flex-start",
        marginLeft: 30,
    },
    question: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 10
    },
    reason: {
        fontSize: 15,
        paddingTop: 10
    },
    idCard: {
        width: 60,
        height: 60
    },
    buttonContainer: {
        flex: 0.2,
        margin: 30
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})
export default Age;