import React, { useState } from "react";
import {Text, StyleSheet, View, Image} from 'react-native';
import { CheckBox} from 'native-base';
import WeCareLogo from "../Opening/WeCareLogo";
import RoundButton from "../Opening/RoundButton";

function DataPrivacy({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    
    function handleOnPress(checked) {
        setToggleCheckBox(!checked)
    }
    
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Xác Nhận Quyền Sử Dụng Dữ Liệu</Text>
            </View>
            <View style={styles.imageContainer}> 
                <Image
                style={styles.image} 
                source={require("../../../assets/list.png")} 
                // Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                />
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.question}>Để tiếp tục bạn cần xác nhận:</Text>
                <View style={styles.checkBoxContainer}>
                    <View style={styles.clauses}>
                        <CheckBox 
                        style={styles.checkBox}
                        checked={toggleCheckBox}
                        onPress={() => handleOnPress(toggleCheckBox)}/>
                        <Text style={styles.clauseText}>Tôi đã đọc và đồng ý với Điều khoản sử dụng</Text>
                    </View>
                    <View style={styles.clauses}>
                        <CheckBox 
                        style={styles.checkBox}
                        checked={toggleCheckBox}
                        onPress={() => handleOnPress(toggleCheckBox)}/>
                        <Text style={styles.clauseText}>Tôi đã đọc và đồng ý với Chính sách bảo mật</Text>
                    </View>
                    <View style={styles.clauses}>
                        <CheckBox 
                        style={styles.checkBox}
                        checked={toggleCheckBox}
                        onPress={() => handleOnPress(toggleCheckBox)}/>
                        <Text style={styles.clauseText}>Tôi đồng ý cho WeCare sử dụng thông tin về sức khoẻ
                        cá nhân để được hỗ trợ trong việc phân tích và kết nối với các chuyên gia hỗ trợ một 
                        cách tốt nhất</Text>
                    </View>
                </View>
            </View>
            <View style={styles.button}>
                <RoundButton text='Tiếp Tục' onPress={() => navigation.navigate('Register')}/>
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
        paddingTop: 30,
    },
    topBarText: {
        fontSize: 20,
    },
    imageContainer: {
        flex: 0.1
    },
    listContainer: {
        flex: 0.6,
        alignItems: "flex-start",
        marginLeft: 30
    },
    question: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 40,
    },
    checkBoxContainer: {
        paddingTop: 10,
    },
    checkBox: {
        borderColor: "black"
    },
    clauses: {
        flexDirection: "row",
        paddingBottom: 10
    },
    clauseText: {
        paddingLeft: 30,
        marginRight: 50,
        fontSize: 15
    },
    button: {
        flex: 0.1,
        margin: 30
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})

export default DataPrivacy;