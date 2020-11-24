import { createAppContainer } from "react-navigation";
import Users from "../components/Authentication/Profile/Users";
import UsersInfo from "../components/Authentication/Profile/UsersInfo";
import Age from "../components/Authentication/Registration/Age";
import DataPrivacy from "../components/Authentication/Registration/DataPrivacy";
import BasicInfo from "../components/Authentication/Profile/BasicInfo";
import Health from "../components/Authentication/Profile/Health";
import Drugs from "../components/Authentication/Profile/Drugs";
import Allergy from "../components/Authentication/Profile/Allergy";
import Disease from "../components/Authentication/Profile/Disease";

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
    },
    Users: {
        screen: Users
    },
    UsersInfo: {
        screen: UsersInfo
    },
    BasicInfo: {
        screen: BasicInfo
    },
    Health: {
        screen: Health
    },
    Drugs: {
        screen: Drugs
    },
    Allergy: {
        screen: Allergy
    },
    Disease: {
        screen: Disease
    },
    
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 