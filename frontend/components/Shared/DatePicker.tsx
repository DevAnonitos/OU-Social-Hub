"use client";
import React, { useState } from 'react';
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns";



import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
};
  
const DatePicker = ({ selected, onSelect }: DatePickerProps) => {

  return (
    <div className='flex w-full'>
      <Popover>
        <PopoverTrigger asChild className='h-[54px] flex items-center w-full focus-visible:ring-offset-0 p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent'>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal hover:bg-white",
              !selected && "text-muted-foreground"
            )}
          >
            {selected ? format(selected, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePicker