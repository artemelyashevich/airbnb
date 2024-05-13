"use client"

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { eachDayOfInterval } from 'date-fns';

export function SelectCalendar({
  reservation
}: {
  reservation: {
    startDate: Date,
    endDate: Date
  }[] | undefined
}) {
  const [ranges, setRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])

  let disabledDate: Date[] = []
  reservation?.forEach((item) => {
    const dateRange = eachDayOfInterval({
      start: new Date(item.startDate),
      end: new Date(item.endDate)
    })
    disabledDate = [...disabledDate, ...dateRange]
  })
  return (
    <>
      <input type="hidden" name='startDate' value={ranges[0].startDate.toISOString()} />
      <input type="hidden" name='endDate' value={ranges[0].endDate.toISOString()} />
      <DateRange
        date={new Date()}
        showDateDisplay={false}
        rangeColors={["#ff5a5f"]}
        ranges={ranges}
        onChange={(item: any) => setRanges([item.selection] as any)}
        minDate={new Date()}
        direction="vertical"
        disabledDates={disabledDate}
      />
    </>
  )
}