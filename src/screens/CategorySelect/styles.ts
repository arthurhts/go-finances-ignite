import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: ${RFValue(100)}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  background: ${({ theme }) => theme.colors.title};
  height: 1px;
  width: 100%;
  opacity: 0.1;
`;

export const Footer = styled.View`
  width: 100%;
  margin-bottom: ${getBottomSpace()}px;
  padding: 24px;
`;
