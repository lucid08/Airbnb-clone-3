'use client';


import React from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme.default.css';

interface DatePickerProps {
    value: Range,
    onChange: (range: RangeKeyDict) => void;
    bookedDates?: Date[];

}

const Calender: React.FC<DatePickerProps> = ({
  value,
  onChange,
  bookedDates
}) => {
  return (
    <DateRange 
    className='w-full border border-gray-400 rounded-xl mb-4'
  )
}

export default Calender