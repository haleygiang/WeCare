import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { List, ListItem, Left, Right, Icon } from 'native-base';
import WeCareLogo from '../Opening/WeCareLogo';

function Users( {navigation}) {
    return (
        <View style={styles.wholeScreen}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Tài Khoản</Text>
            </View>
            <View style={styles.usersContainer}>
                <List>
                    <ListItem selected onPress={() => navigation.navigate('UsersInfo')}>
                        <Left>
                            <Text style={styles.userText}>User 1</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => navigation.navigate('UsersInfo')}>
                        <Left>
                            <Text style={styles.userText}>User 2</Text>
                        </Left>
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
    )
}

const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1,
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
    usersContainer: {
        flex: 0.8,
    },
    userText: {
        fontSize: 17
    },
    logo: {
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})
export default Users;