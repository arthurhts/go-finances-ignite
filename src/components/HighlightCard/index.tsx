import React from 'react';

import * as S from './styles';

interface HighlightCardProps {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const iconByType = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

const HighlightCard = ({
  type,
  title,
  amount,
  lastTransaction,
}: HighlightCardProps) => {
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={iconByType[type]} type={type} />
      </S.Header>
      <S.Body>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Body>
    </S.Container>
  );
};

export { HighlightCard };
