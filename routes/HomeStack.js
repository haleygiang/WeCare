import { createAppContainer } from "react-navigation";
import Age from "../components/Authentication/Registration/Age";
import DataPrivacy from "../components/Authentication/Registration/DataPrivacy";

const { createStackNavigator } = require("react-navigation-stack");
const { default: Login } = require("../components/Authentication/Login/Login");
const { default: Opening } = require("../components/Authentication/Opening/Opening");
const { default: Register } = require("../components/Authentication/Registration/Register");


const screens = {
    Welcome: {
        screen: Opening
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Age: {
        screen: Age
    },
    Data: {
        screen: DataPrivacy
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 