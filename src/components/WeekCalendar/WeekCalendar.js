import React, { useState } from 'react';
import moment from 'moment';
import Modal from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { convertTimeStampToLocalDate } from '../../constants/handler';
import { timeBooking } from '../../socket.service';

function WeekCalendar() {
    const [currentDate, setCurrentDate] = useState(moment());

    // const [labInput, setLabInput] = useState('');

    const handleTodayClick = () => {
        setCurrentDate(moment());
    };

    const handlePrevClick = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'week'));
    };

    const handleNextClick = () => {
        setCurrentDate(currentDate.clone().add(1, 'week'));
    };

    const handleChooseClick = (day, period) => {
        const currentLabId = localStorage.getItem('currentLabId');
        const time = convertTimeStampToLocalDate(day);
        
        timeBooking({ labId: currentLabId, timeBooking: time, period: period });
    };

    const weekDays = [];
    let startDate = currentDate.clone().startOf('week');

    for (let i = 0; i < 7; i++) {
        weekDays.push(startDate);
        startDate = startDate.clone().add(1, 'day');
    }

    return (
        <div>
            {/* <table>
                <thead>
                    <tr>
                        {weekDays.map((day) => (
                            <th key={day.format('YYYY-MM-DD')}>{day.format('ddd')}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {weekDays.map((day) => (
                            <td key={day.format('YYYY-MM-DD')}>{day.format('D')}</td>
                        ))}
                    </tr>
                </tbody>
            </table> */}

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                <div className="w-10/12 m-auto pb-5">
                    <button
                        onClick={handleTodayClick}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        Today
                    </button>
                    <button onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faChevronLeft} className="mx-8" />
                    </button>
                    <button onClick={handleNextClick}>
                        <FontAwesomeIcon icon={faChevronRight} className="mx-5" />
                    </button>
                    <span className="text-xl font-semibold ml-3">
                        {'Tháng ' + parseInt(currentDate.clone().startOf('week').format('MM')) + ', '}
                    </span>
                    <span className="text-xl font-semibold">{currentDate.clone().startOf('week').format('YYYY')}</span>
                </div>
                <table
                    className="w-10/12 m-auto text-sm text-left border-solid border-2 border-box-item text-gray-500 dark:text-gray-400"
                    cellPadding={10}
                >
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-black font-black ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Thời khoá biểu
                            </th>
                            {weekDays.map((day, index) => (
                                <th key={day.format('YYYY-MM-DD')} align="center" className="`day${}`">
                                    <p>{day.format('ddd')}</p>
                                    {day.format('YYYY-MM-DD') ===
                                    moment().clone().startOf('day').format('YYYY-MM-DD') ? (
                                        <p className="text-2xl mt-1">
                                            <span className="bg-blue-500 rounded-full text-white px-2">
                                                {day.format('D')}
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="text-2xl mt-1">{day.format('D')}</p>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-box-item"
                            >
                                Sáng
                            </th>
                            {weekDays.map((day, index) => (
                                <td
                                    key={'S' + index}
                                    className="p-4 border-solid box-item-timetable border-2 border-box-item"
                                >
                                    <Modal onClick={() => handleChooseClick(day, 'MORNING')} />
                                </td>
                            ))}
                        </tr>

                        <tr className="bg-white border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-box-item"
                            >
                                Chiều
                            </th>

                            {weekDays.map((day, index) => (
                                <td
                                    key={'C' + index}
                                    className="p-4 border-solid box-item-timetable border-2 border-box-item"
                                >
                                    <Modal onClick={() => handleChooseClick(day, 'AFTERNOON')} />
                                </td>
                            ))}
                        </tr>

                        <tr className="bg-white dark:text-gray-500">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-box-item"
                            >
                                Tối
                            </th>

                            {weekDays.map((day, index) => (
                                <td
                                    key={'T' + index}
                                    className="p-4 border-solid box-item-timetable border-2 border-box-item"
                                >
                                    <Modal onClick={() => handleChooseClick(day, 'EVENING')} />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WeekCalendar;
