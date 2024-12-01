'use client';

import useLoginModel from "@/app/hooks/useLoginModel";
import { useEffect, useState } from "react";

import {Range} from 'react-date-range';
import { differenceInDays, eachDayOfInterval } from "date-fns";
import Calender from "../forms/Calender";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}
export type Property = {
    id: string;
    guests:number;
    price_per_night: number;
}

interface ReservationSidebarProps {
    userId: string | null;
    property:Property
}
const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
    property,
    userId
}) => {

    const loginModal = useLoginModel();
    const [fee, setFee] = useState<number>(0);
    const [nights, setNights] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date())
    const [guests, setGuests] = useState<string>('1');
    const guestRange = Array.from( {length: property.guests }, (_, index) => index + 1);

    const _setDateRange = (selection : any) => {
        const newStartDate = new Date(selection.newStartDate)
        const newEndDate = new Date(selection.newEndDate)
        if(newEndDate <= newStartDate){
            newEndDate.setDate(newStartDate.getDate() + 1)
        }
        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate,
        })
    }

    useEffect(() => {
        if(dateRange.startDate && dateRange.endDate){
            const totalDays = differenceInDays(dateRange.endDate, dateRange.startDate);
            if(totalDays && property.price_per_night){
                const _fee = ((totalDays * property.price_per_night) / 100) * 5;
                setFee(_fee);
                setTotalPrice((totalDays * property.price_per_night) + _fee);
                setNights(totalDays);
            }else{
                const _fee = (property.price_per_night / 100) * 5;
                setFee(_fee);
                setTotalPrice(property.price_per_night  + _fee); 
                setNights(1);
            }
        }
    }, [dateRange])

  return (
    <div className='mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl'>
        <h2 className='mb-5 text-2xl'>{property.price_per_night} rupees per night</h2>
        <Calender
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
        />
        <div className='mb-6 p-3 border border-gray-400 rounded-xl'> 
             <label className='mb-2 block font-bold text-xs'>Guests</label>
             <select 
             value={guests}
             onChange={(e) => setGuests(e.target.value)} 
             className='w-full -ml-1 text-xm'>
                {guestRange.map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
             </select>
        </div>
        <div className='mb-4 flex justify-between align-center'>
            <p>{property.price_per_night} * {nights}</p>
            <p>{property.price_per_night * nights}</p>
        </div>
        <div className='mb-4 flex justify-between align-center'>
            <p>Dbnb Fee</p>
            <p>{fee}</p>
        </div>
        <hr/>
        <div className='mt-4 flex justify-between align-center font-bold'>
            <p>Total</p>
            <p>{totalPrice}</p>
        </div>
        <div className='mt-6 w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl'>
            Book
        </div>
    </div>
  )
}

export default ReservationSidebar