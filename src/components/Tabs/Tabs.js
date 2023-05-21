import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import UserDropdown from "../UserDropdown/UserDropdown";

const listLink = [
    {
        id: 1,
        path: '1',
        label: 'Phòng 1',
    },
    {
        id: 2,
        path: '2',
        label: 'Phòng 2',
    },
    {
        id: 3,
        path: '3',
        label: 'Phòng 3',
    },
    {
        id: 4,
        path: '4',
        label: 'Phòng 4',
    },
    {
        id: 5,
        path: '5',
        label: 'Phòng 5',
    },
    {
        id: 6,
        path: '6',
        label: 'Phòng 6',
    },
];

function Tabs() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleTabClick = (path) => {
        setActiveTab(path);
    };

    return (
        <div className="w-10/12 m-auto text-sm font-medium text-center flex text-gray-500 border-b border-gray-200 dark:text-gray-400 justify-between items-center">
            <ul className="flex flex-wrap -mb-px">
                {listLink.map((tab, index) => (
                    <li key={index}>
                        <Link
                            href={tab.path}
                            className={
                                activeTab === tab.path
                                    ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active'
                                    : 'inline-block p-4 rounded-t-lg'
                            }
                            onClick={() => handleTabClick(tab.path)}
                        >
                            {tab.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <UserDropdown />
        </div>
    );
}

export default Tabs;
