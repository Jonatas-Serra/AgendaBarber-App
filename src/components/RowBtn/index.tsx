import React, { useState } from 'react';

import { ContainerBtn, Day, Dfweek, Container } from './styles';

import { Dates } from '../../models/Dates';

interface Dates {
  id: number;
  day: string;
  dfweek: string;
}

const RowBtn: React.FC = () => {
  const [isFocused, setIsFocused] = useState(0);
  const handleInputFocus = (id: number) => {
    setIsFocused(id);
  };
  return (
    <Container>
      {Dates.map((date: Dates) => (
        <ContainerBtn
          key={date.id}
          isFocused={isFocused === date.id}
          onPress={() => handleInputFocus(date.id)}
        >
          <Day>{date.day}</Day>
          <Dfweek>{date.dfweek}</Dfweek>
        </ContainerBtn>
      ))}
    </Container>
  );
};

export default RowBtn;
