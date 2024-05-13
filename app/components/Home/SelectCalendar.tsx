"use client"

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';

export function SelectCalendar() {
  const [ranges, setRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])
  return (
    <>
      <DateRange
        date={new Date()}
        showDateDisplay={false}
        rangeColors={["#ff5a5f"]}
        ranges={ranges}
        onChange={(item: any) => setRanges([item.selection] as any)}
        minDate={new Date()}
        direction="vertical"
      />
    </>
  )
}