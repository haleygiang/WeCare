import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WeCareLogo from '../Opening/WeCareLogo';
import { List, ListItem, Left, Right, Icon, Body } from 'native-base';

function UsersInfo({ navigation }) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Thông Tin Cá Nhân</Text>
            </View>
            <View style={styles.infoContainer}>
                <List>
                    <ListItem icon onPress={() => navigation.navigate('BasicInfo')}>
                        <Left>
                            <Icon active name="body" />
                        </Left>
                        <Body>
                            <Text style={styles.infoText}>Thông Tin Cơ Bản</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon active name="heart" />
                        </Left>
                        <Body>
                            <Text style={styles.infoText}>Thông Tin Sức Khoẻ</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon active name="clipboard" />
                        </Left>
                        <Body>
                            <Text style={styles.infoText}>Thuốc Đang Sử Dụng</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon active name="medkit" />
                        </Left>
                        <Body>
                            <Text style={styles.infoText}>Tiền Sử Dị Ứng</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon active name="pulse" />
                        </Left>
                        <Body>
                            <Text style={styles.infoText}>Tiền Sử Bệnh</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    
                </List>
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
    infoContainer: {
        flex: 0.8,
        justifyContent: "flex-end"
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    infoText: {
        fontSize: 17,
    },
})
export default UsersInfo;