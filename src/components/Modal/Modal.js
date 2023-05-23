import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { convertTimeStampToLocalDate } from '../../constants/handler';
import { cancelTimeBooking, timeBooking } from '../../socket.service';

const data = [
    {
        id: 1,
        name: 'Lập trình Java',
        course_id: 2023123456,
    },
    {
        id: 2,
        name: 'Lập trình Java',
        course_id: 2023398463,
    },
    {
        id: 3,
        name: 'Lập trình Java',
        course_id: 2023129372,
    },
    {
        id: 4,
        name: 'Lập trình Java Web',
        course_id: 2023937543,
    },
    {
        id: 5,
        name: 'Lập trình ASP.NET',
        course_id: 2023603847,
    },
    {
        id: 6,
        name: 'Lập trình Web bằng PHP',
        course_id: 2023128356,
    },
    {
        id: 7,
        name: 'Lập trình Web bằng PHP',
        course_id: 2023876231,
    },
    {
        id: 8,
        name: 'Lập trình Java 3',
        course_id: 2023098723,
    },
    {
        id: 9,
        name: 'Lập trình Java Web',
        course_id: 2023763495,
    },
    {
        id: 10,
        name: 'Lập trình C++',
        course_id: 202309238,
    },
    {
        id: 11,
        name: 'Lập trình Web bằng PHP',
        course_id: 2023876231,
    },
    {
        id: 12,
        name: 'Lập trình Java 3',
        course_id: 2023098723,
    },
    {
        id: 13,
        name: 'Lập trình Java Web',
        course_id: 2023763495,
    },
];

export default function Modal(props) {
    const [showModal, setShowModal] = useState(false);
    const [lockTimeBooking, setLockTimeBookinghowModal] = useState([]);
    const currentLabId = localStorage.getItem('currentLabId');
    const timeBookingDetail = convertTimeStampToLocalDate(props.day);
    const currentUser = 1;

    // const handleTimeBooking = async () => {
    //     lockTimeBooking = await timeBooking({
    //         labId: currentLabId,
    //         day: props.day.format('DD-MM-YYYY'),
    //         period: props.period,
    //     });
    // };

    const handleTimeBooking = () => {
        let data = {
            subject: '13456',
            day: props.day.format('DD-MM-YYYY'),
            period: props.period,
        };
        props.onAddBooking(data);
    };

    const handleCancelTimeBooking = () => {
        cancelTimeBooking({ labId: currentLabId, timeBooking: timeBookingDetail, period: props.period });
        setShowModal(false);
    };

    return (
        <div className="wrapper">
            {props.userBooked ? (
                <div className="modal-disable-box">
                    {props.userBooked.user === currentUser ? (
                        <div className="px-4 py-8 rounded-lg border-solid border-2 border-sky-500 font-medium text-black">
                            {props.userBooked.subject}
                        </div>
                    ) : (
                        <div className="modal-disable-box  disible-box">
                            <p className="text-black font-bold">Ths.Nguyễn Văn A</p>
                            <p className="text-black p-1">0981231xxx</p>
                            <button
                                type="submit"
                                className="px-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Trao đổi
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    className="absolute chose-modal"
                    type="button"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Chọn
                </button>
            )}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => handleCancelTimeBooking()}
                    >
                        <div className="relative w-full my-6 mx-auto max-w-6xl" onClick={(e) => e.stopPropagation()}>
                            {/*content*/}

                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-modal">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                STT
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tên học phần
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Mã lớp
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Hành động
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {item.id}
                                                </th>
                                                <td className="px-6 py-4">{item.name}</td>
                                                <td className="px-6 py-4">{item.course_id}</td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={handleTimeBooking}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    >
                                                        Đăng ký
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <td className="px-4 py-2 text-right" colSpan={4}>
                                                <button
                                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                                    onClick={() => handleCancelTimeBooking()}
                                                >
                                                    Đóng
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}
