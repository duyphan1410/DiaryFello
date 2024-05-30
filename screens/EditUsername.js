import React, { useContext, useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import SecureStoreModel from "../constants/SecureStoreModel";
import { DContexts } from "../contexts/DContexts";
import useStyles from "../constants/styles";
import { Button, Icon, TextInput } from "react-native-paper";
import { CreateUser, LoginUser } from "../constants/AccountStore";
const EditUsername = () => {
  const { setUnameSet } = useContext(DContexts);
  const { isUnameSet } = useContext(DContexts);
  const [uname, setUname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const css = useStyles();
  const { txtcolor } = useContext(DContexts);
  const { primarycolor } = useContext(DContexts);
  const { setMyUname } = useContext(DContexts);
  const [hiden, setHiden] = useState(true);
  const handlePress = () => {
    LoginUser(uname, password).then((user) => {
      SecureStoreModel.saveItem("username", user.name);
      SecureStoreModel.saveItem("userid", user.email);
      setMyUname(user.name);
      setUnameSet(true);
    }).catch((e) => console.log(e))
  };

  const HandleHidenPassword = () => {
    setHiden(!hiden);
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={primarycolor}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 800 }}>Login</Text>
        <Text style={{ fontSize: 20, fontWeight: 400, color: "grey" }}>
          welcome back!!!
        </Text>

        <TextInput
          label={"Username"}
          style={{ ...css.txt, ...styles.input }}
          onChangeText={setUname}
          value={uname}
          placeholder="Enter username"
          placeholderTextColor={txtcolor}
          autoFocus={true}

        />

        <TextInput
          label={"Password"}
          style={{ ...css.txt, ...styles.input }}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter password"
          placeholderTextColor={txtcolor}
          autoFocus={true}
          mode="outlined"
          secureTextEntry={hiden}
          right={
            <TextInput.Icon icon={hiden ? "eye" : "eye-off"} onPress={() => HandleHidenPassword()} />
          }
        />

        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    borderWidth: 0.2
  },

  btn: {
    padding: 20,
    backgroundColor: "#7856FF",
    margin: 10,
    alignItems: "center",
    borderRadius: 20,
  },
});

export default EditUsername;
