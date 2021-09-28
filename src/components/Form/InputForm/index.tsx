import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View, Text, TextInputProps } from 'react-native';
import { Input } from '../Input';

import * as S from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

const InputForm = ({ control, name, error, ...rest }: InputFormProps) => {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export { InputForm };
