import React from 'react';
import type { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { View } from 'react-native';

type CardProps = PropsWithChildren<{
  style: object;
}> & ViewProps;

const Card = ({ style, children } : CardProps): React.JSX.Element => {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 15,
        ...style
      }}
    >
      {children}
    </View>
  );
};
export default Card;
