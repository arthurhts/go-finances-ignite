import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  background: ${({ theme }) => theme.colors.shape};

  width: 100%;
  padding: 18px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};

  border-radius: 5px;
  margin-bottom: ${RFValue(8)}px;
`;
