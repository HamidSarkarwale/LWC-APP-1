import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName: 'A-01', roomCapacity:'12'};

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;

    tileClickHandler()
    {
        const titleClicked = new CustomEvent('titleclick', {detail: this.meetingRoomInfo, bubbles:true});

        this.dispatchEvent(titleClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}
