'use client';


import React from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme.default.css';

interface DatePickerProps {
    value: Range,
    onChange: (range: Range) => void
}

const Calender = () => {
  return (
    <div>Calender</div>
  )
}

export default Calender