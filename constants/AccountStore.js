import { firebase, onSnapshot } from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";
import { stateLogOut, stateLogin } from "./Store";
const DB = firebase.firestore();
const AccountCollection = "Account";

const CreateUser = (name, email, password, phone, address) => {
    auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            DB
                .collection(AccountCollection)
                .doc(email)
                .onSnapshot(
                    u => {
                        if (!u.exists) {
                            DB.collection(AccountCollection)
                                .doc(email).set({
                                    name: name,
                                    email: email,
                                    password: password,
                                    phone: phone,
                                    address: address,
                                })
                            console.log("Create new accout success");
                        }
                    }
                )
        })
        .catch((e) => Alert.alert("Email already exists!!!"));
}

const LoginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                DB.collection(AccountCollection)
                    .doc(email)
                    .onSnapshot(
                        (user) => {
                            resolve(user.data())
                        }
                    );
            }).catch((e) => reject(e))
    })
}


export {
    CreateUser, LoginUser
}