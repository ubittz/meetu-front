import { useState } from 'react';

import { format, lastDayOfMonth, setDay, setMonth, subYears } from 'date-fns';
import styled from 'styled-components';

import Wheel from '@@components/DatePicker/Wheel';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledDatePicker = styled(Flex.Horizontal)`
  height: 180px;
  background: ${COLORS.TEXT_500};
  overflow: hidden;

  user-select: none;

  & > div {
    flex: 1;
  }

  .keen-slider {
    display: block;
    height: 26px;
    width: 100%;
  }

  .wheel_top,
  .wheel_bottom {
    flex: 1;
  }
`;

function DatePicker() {
  const [date, setDate] = useState<Date>(new Date());

  const formatYear = (index: number) => {
    return format(subYears(new Date(), 100 - (index + 1)), 'yyyy년');
  };

  const formatMonth = (index: number) => {
    return `${index + 1}월`;
  };

  const formatDate = (index: number) => {
    return `${index + 1}일`;
  };

  const handleChangeYear = (index: number) => {
    setDate(subYears(new Date(), 100 - (index + 1)));
  };

  const handleChangeMonth = (index: number) => {
    setDate((date) => setMonth(date, index + 1));
  };

  const handleChangeDate = (index: number) => {
    setDate((date) => setDay(date, index + 1));
  };

  return (
    <StyledDatePicker>
      <Wheel length={100} setValue={formatYear} initIdx={99} onChangeIndex={handleChangeYear} />
      <Wheel length={12} onChangeIndex={handleChangeMonth} setValue={formatMonth} initIdx={date.getMonth()} />
      <Wheel length={lastDayOfMonth(date).getDate()} onChangeIndex={handleChangeDate} setValue={formatDate} initIdx={date.getDate() - 1} />
    </StyledDatePicker>
  );
}

export default DatePicker;
