import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { Button, TextField, Label } from '../components';
import logo from '../assets/logo.png';
import http from '../services/http';

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [loginFields, setLoginFields] = useState({
    phone: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [disabled, setDisabled] = useState(false);


  const onChange = (name, value) => {
    setLoginFields({ ...loginFields || {}, [name]: value });
  }

  const validateLogin = () => {
    let errors = {};
    let isValid = true;
    if (loginFields.phone === '' || !loginFields.phone) {
      errors.phone = 'Mobile no. is required';
      isValid = false;
    }
    if (loginFields.password === '' || !loginFields.password) {
      errors.password = 'Password is required';
      isValid = false;
    }
    setLoginErrors(errors);
    return isValid;
  }

  const handleLogin = () => {
    if (validateLogin()) {
      setDisabled(true);
      http.post('login', loginFields)
        .then(response => {
          console.log({ response })
          setDisabled(false);
        })
        .catch(error => {
          console.log({ error })
          setDisabled(false);
        })
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <Image source={logo} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 100 }} />
        <View>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.primary,
            marginTop: 50,
            alignSelf: 'center'
          }}>
            LOGIN
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Label>Mobile No.</Label>
          <TextField
            placeholder='Enter your mobile no.'
            onChangeText={(e) => onChange('phone', e)}
            error={loginErrors.phone}
            value={loginFields.phone}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Label>Password</Label>
          <View style={{
            width: "100%",
          }}>
            <TextField
              placeholder='Enter your password'
              secureTextEntry={isPasswordShown}
              onChangeText={(e) => onChange('password', e)}
              error={loginErrors.password}
              value={loginFields.password}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                marginTop: 12,
                right: 12
              }}
            >
              {
                isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={19} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={19} color={COLORS.black} />
                )
              }

            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={handleLogin}
          disabled={disabled}
        />

        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22
        }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ?</Text>
          <Pressable
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6
            }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login