"use client"

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 43,
    absent: 54,
  },
  {
    name: 'Tue',
    present: 32,
    absent: 65,
  },
  {
    name: 'Wed',
    present: 45,
    absent: 21,
  },
  {
    name: 'Thu',
    present: 76,
    absent: 32,
  },
  {
    name: 'Fri',
    present: 78,
    absent: 21,
  },
];


const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
                <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}}/>
                <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]} />
                <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart