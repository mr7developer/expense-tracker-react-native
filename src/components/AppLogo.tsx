import React from "react";
import { View, Text } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

export default function AppLogo() {
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Svg height="120" width="300">
        <Rect
          x="0"
          y="0"
          width="300"
          height="120"
          rx="20"
          fill="#1e3a8a"
        />

        <SvgText
          x="150"
          y="45"
          fill="#fff"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          Welcome to
        </SvgText>

        <SvgText
          x="150"
          y="75"
          fill="#22c55e"
          fontSize="22"
          fontWeight="bold"
          textAnchor="middle"
        >
          Expense Tracker
        </SvgText>

        <SvgText
          x="150"
          y="100"
          fill="#f59e0b"
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          App
        </SvgText>
      </Svg>
    </View>
  );
}