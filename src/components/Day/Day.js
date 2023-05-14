import { useEffect, useRef } from 'react';

function Day({ day, moment, handleGetDay }) {
    const dayRef = useRef();

    useEffect(()=> {
        handleGetDay(dayRef.current.textContent)
    }, [])
    return (
        <div className="wrapper">
            <p>{day.format('ddd')}</p>
            {day.format('YYYY-MM-DD') === moment().clone().startOf('day').format('YYYY-MM-DD') ? (
                <p className="text-2xl mt-1">
                    <span ref={dayRef} className="bg-blue-500 rounded-full text-white px-2">{day.format('D')}</span>
                </p>

            ) : (
                <p ref={dayRef} className="text-2xl mt-1">{day.format('D')}</p>
            )}
            {/* {console.log(dayRef.current.textContent)} */}

        </div>
    );

}

export default Day;
