import { View, Text } from "react-native";
import { Input, Button } from "@rneui/themed";

import { LoginStyles } from "../assets/styles";

function Login() {
  return (
    <View style={LoginStyles.container}>
      <Input placeholder="Email" keyboardType="email-address" />
      {/* autoCapitalize={false}
      autoCorrect={false} /> */}

      <Input placeholder="Password" secureTextEntry={true} />
      <Button title="submit"/>
    </View>
  );
}

export default Login
