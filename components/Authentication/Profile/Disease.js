import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeCareLogo from '../Opening/WeCareLogo';
import RoundButton from '../Opening/RoundButton';
import { MultipleChoice } from 'react-native-multiple-choice-picker';

function Disease({ navigation }) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Tiền Sử Bệnh Tật</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Trả lời thành thực những câu hỏi dưới đây giúp chúng tôi phục vụ bạn tốt hơn!</Text>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Bạn đã từng có tiểu sử bệnh tiểu đường?</Text>
                <MultipleChoice 
                direction={'row'}
                choices={['Rồi', 'Không Rõ', 'Chưa']}
                />
            </View>
            <View style={styles.button}>
                <RoundButton text="Tiếp Tục" onPress={() => navigation.navigate('UsersInfo')} />
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
    textContainer: {
        flex: 0.1
    },
    text: {
        fontSize: 17,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    questionContainer: {
        flex: 0.6
    },
    questionText: {
        paddingHorizontal: 20,
        fontSize: 15
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

export default Disease;