import * as io from 'socket.io-client';
import { SOCKET_BASE_URL } from './constants/apiConstants';

let socket;
const initiateSocketConnection = () => {
    socket = io(SOCKET_BASE_URL, {
        reconnection: false,
    });
    console.log(`Connecting socket...`);
};

const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if (socket) socket.disconnect();
};

const clientSendLab = (payload) => {
    if (socket) {
        console.log('Client send lab: ' + payload);
        socket.emit('client_send_lab', payload);
    } else {
        return true;
    }
};
const clientLeaveLab = (payload) => {
    if (socket) {
        console.log('Client leave lab: ' + payload);
        socket.emit('client_leave_lab', payload);
    } else {
        return true;
    }
};

const timeBooking = (payload) => {
    if (socket) {
        console.log('Client send time booking: ' + JSON.stringify(payload));
        socket.emit('time_booking', { ...payload });
    } else {
        return true;
    }
};

const onTimeBooking = () => {
    return new Promise((resolve, reject) => {
        if (socket && socket.connected) {
            socket.on('lock_time', (data) => {
                console.log('lock_time!');
                resolve(data);
            });
        }
    });
};

const cancelTimeBooking = (payload) => {
    if (socket) {
        console.log('Client send cancel time booking: ' + JSON.stringify(payload));
        socket.emit('cancel_time_booking', { ...payload });
    } else {
        return true;
    }
};

const onCancelTimeBooking = () => {
    return new Promise((resolve, reject) => {
        if (socket && socket.connected) {
            socket.on('unlock_time', (data) => {
                console.log('unlock_time!');
                resolve(data);
            });
        }
    });
};
export {
    initiateSocketConnection,
    disconnectSocket,
    clientSendLab,
    clientLeaveLab,
    timeBooking,
    onTimeBooking,
    cancelTimeBooking,
    onCancelTimeBooking,
};
