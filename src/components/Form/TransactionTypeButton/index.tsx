import React from 'react';
import {
  View,
  Text,
  TextInputProps,
  TouchableOpacityProps,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles';

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const iconByType = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

const TransactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: TransactionTypeButtonProps) => {
  return (
    <S.Container {...rest} isActive={isActive} type={type}>
      <S.Icon type={type} name={iconByType[type]} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export { TransactionTypeButton };
