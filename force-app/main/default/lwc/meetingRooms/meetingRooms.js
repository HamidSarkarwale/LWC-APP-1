import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo = [
        {roomName: 'A-101', roomCapacity: 10},
        {roomName: 'A-102', roomCapacity: 20},
        {roomName: 'A-103', roomCapacity: 4},
        {roomName: 'B-201', roomCapacity: 8},
        {roomName: 'B-202', roomCapacity: 6},
        {roomName: 'B-203', roomCapacity: 12},
        {roomName: 'C-301', roomCapacity: 14}
    ];

    @track selectMeetingRoom;

    ontileSelectHandler(event)
    {
        const meetingRoomInfo = event.detail ;
        this.selectMeetingRoom = meetingRoomInfo.roomName;
    }
}