import React from 'react';
import { View, Text } from 'react-native';

import * as S from './styles';

interface CategorySelectButtonProps {
  title: string;
  onPress: () => void;
}

const CategorySelectButton = ({
  title,
  onPress,
}: CategorySelectButtonProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Category>{title}</S.Category>
      <S.Icon name="chevron-down" />
    </S.Container>
  );
};

export { CategorySelectButton };
