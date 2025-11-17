import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
export default function Saludar(props) {
  const { firstName, lastName } = props;

  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}

Saludar.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
