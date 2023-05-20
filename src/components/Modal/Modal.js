import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        name: 'Lập trình Java 1',
        course_id: 2023123456,
    },
    {
        id: 2,
        name: 'Lập trình Java 2',
        course_id: 2023123456,
    },
    {
        id: 3,
        name: 'Lập trình Java 3',
        course_id: 2023123456,
    },
    {
        id: 4,
        name: 'Lập trình Java Web',
        course_id: 2023456789,
    },
    {
        id: 5,
        name: 'Lập trình C++',
        course_id: 2023654321,
    },
    {
        id: 4,
        name: 'Lập trình Java Web',
        course_id: 2023456789,
    },
    {
        id: 5,
        name: 'Lập trình C++',
        course_id: 2023654321,
    },
    {
        id: 4,
        name: 'Lập trình Java Web',
        course_id: 2023456789,
    },
    {
        id: 5,
        name: 'Lập trình C++',
        course_id: 2023654321,
    },
    {
        id: 5,
        name: 'Lập trình C++',
        course_id: 2023654321,
    },
    {
        id: 4,
        name: 'Lập trình Java Web',
        course_id: 2023456789,
    },
    {
        id: 5,
        name: 'Lập trình C++',
        course_id: 2023654321,
    },
];

export default function Modal(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="wrapper">
            <button
                className="absolute chose-modal"
                type="button"
                onClick={() => {
                    props.handleTimeBooking();
                    setShowModal(true);
                }}
            >
                Chọn
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => {
                            props.handleCancelTimeBooking();
                            setShowModal(false);
                        }}
                    >
                        <div className="relative w-full my-6 mx-auto max-w-6xl" onClick={(e) => e.stopPropagation()}>
                            {/*content*/}

                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-modal">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Product id
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Product Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Course Id
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
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
                                                    <Link
                                                        href="#"
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    >
                                                        Đăng ký
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}

                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <td className="px-4 py-2 text-right" colSpan={4}>
                                                <button
                                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                                    onClick={() => {
                                                        props.handleCancelTimeBooking();
                                                        setShowModal(false);
                                                    }}
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
