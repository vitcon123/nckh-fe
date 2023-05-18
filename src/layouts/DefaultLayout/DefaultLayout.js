import Tabs from '../../components/Tabs/Tabs';
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar';

function DefaultLayout() {
    
    return (
        <div className="wrapper">
            <Tabs />
            <WeekCalendar />
        </div>
    );
}

export default DefaultLayout;
