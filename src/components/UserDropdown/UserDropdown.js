import { useState } from 'react';
import { Link } from 'react-router-dom';

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    <span>Nguyen Van A</span>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    id="userDropdown"
                    class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div class="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                            <Link
                                href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Earnings
                            </Link>
                        </li>
                    </ul>
                    <div class="py-1">
                        <Link
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserDropdown;
