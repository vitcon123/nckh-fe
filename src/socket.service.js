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

const timeBooking = (payload, callback) => {
    return new Promise((resolve, reject) => {
        if (socket) {
            socket.emit('time_booking', { ...payload });
            socket.on('lock_time', (data) => {
                console.log('lock_time!');
                console.log('Event sent: ' + JSON.stringify(data));
                resolve(data);
            });
        } else {
            reject(new Error('Socket is not connected.'));
        }
    });
};

const cancelTimeBooking = (payload) => {
    return new Promise((resolve, reject) => {
        if (socket) {
            socket.emit('cancel_time_booking', { ...payload });
            socket.on('unlock_time', (data) => {
                console.log('unlock_time!');
                console.log('Event sent: ' + JSON.stringify(data));
                resolve(data);
            });
        } else {
            reject(new Error('Socket is not connected.'));
        }
    });
};

export { initiateSocketConnection, disconnectSocket, clientSendLab, clientLeaveLab, timeBooking, cancelTimeBooking };
