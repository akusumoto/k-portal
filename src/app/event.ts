import { EventAnswer } from "./event-answer";

export interface Event {
    id: number;
    name: string;
    date: Date;
    detail: string;
    answers: EventAnswer[];
}
