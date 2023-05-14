import { useState } from "react";


const listLink = [
    {
        path: 'p1',
        label: 'Phòng 1',
        isActive: true
    },
    {
        path: 'p2',
        label: 'Phòng 2',
    },
    {
        path: 'p3',
        label: 'Phòng 3',
    },
    {
        path: 'p4',
        label: 'Phòng 4',
    },
    {
        path: 'p5',
        label: 'Phòng 5',
    },
    {
        path: 'p6',
        label: 'Phòng 6',
    },
    {
        path: 'p7',
        label: 'Phòng 7',
    },
    {
        path: 'p8',
        label: 'Phòng 8',
    },
    {
        path: 'p9',
        label: 'Phòng 9',
    },
    {
        path: 'p10',
        label: 'Phòng 10',
    },
    {
        path: 'p11',
        label: 'Phòng 11',
    },
    {
        path: 'p12',
        label: 'Phòng 12',
    },
];

function Tabs() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-10/12 m-auto text-sm font-medium text-center flex text-gray-500 border-b border-gray-200 dark:text-gray-400 justify-between">
            <ul className="flex flex-wrap -mb-px">
                {listLink.map((item, index) => (
                    <li key={index} className="mr-2" onClick={() => setIsActive(!isActive)}>
                        <a href={item.path} className={(isActive || item.isActive) ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active" : "inline-block p-4 rounded-t-lg"}>{item.label}</a>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Tabs;
