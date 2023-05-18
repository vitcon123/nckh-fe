import * as io from 'socket.io-client';
import { SOCKET_BASE_URL } from './constants/apiConstants';

let socket;
export const initiateSocketConnection = () => {
    socket = io(SOCKET_BASE_URL, {
        reconnection: false,
    });
    console.log(`Connecting socket...`);
};
export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if (socket) socket.disconnect();
};
export const clientSendLab = (payload) => {
    if (socket) {
        console.log('Client send lab: ' + payload);
        socket.emit('client_send_lab', payload);
    } else {
        return true;
    }
};
export const clientLeaveLab = (payload) => {
    if (socket) {
        console.log('Client leave lab: ' + payload);
        socket.emit('client_leave_lab', payload);
    } else {
        return true;
    }
};

export const timeBooking = (payload) => {
    if (socket) {
        socket.emit('time_booking', {
            ...payload,
        });
    } else {
        return true;
    }
    socket.on('lock_time', (payload) => {
        console.log('socket event received!');
        console.log('Event sent: ' + JSON.stringify(payload));
        return payload;
    });
};
