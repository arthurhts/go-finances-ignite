import React from 'react';
import { View, Text, TextInputProps } from 'react-native';

import * as S from './styles';

type Props = TextInputProps;

const Input = ({ ...rest }: Props) => {
  return <S.Container {...rest}></S.Container>;
};

export { Input };
