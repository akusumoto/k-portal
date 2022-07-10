import { Event } from './event';
import { User } from './user';

export const user1: User = {id:1, account:"user1", name:"ユーザ１", email:"user1@gmail.com", part:"Cb", note:""};
export const user2: User = {id:2, account:"user2", name:"ユーザ２", email:"user2@gmail.com", part:"Vn", note:""};
export const user3: User = {id:3, account:"user3", name:"ユーザ３", email:"user3@gmail.com", part:"Tp", note:""};

export const EVENTS: Event[] = [
    {id:1, name:"イベント#1", date:new Date(), detail:"イベント#1の詳細", 
        answers:[
            {id:1, answer:"出席", user:user1},
            {id:2, answer:"出席", user:user2},
        ]
    },
    {id:2, name:"イベント#2", date:new Date(), detail:"イベント#2の詳細", 
        answers:[
            {id:3, answer:"出席", user:user1},
            {id:4, answer:"出席", user:user2},
        ]
    },
    {id:3, name:"イベント#3", date:new Date(), detail:"イベント#3の詳細", 
        answers:[
            {id:5, answer:"出席", user:user1},
            {id:6, answer:"出席", user:user2},
            {id:7, answer:"欠席", user:user3},
        ]
    },
    {id:4, name:"イベント#4", date:new Date(), detail:"イベント#4の詳細", 
        answers:[
            {id:8, answer:"出席", user:user1},
            {id:9, answer:"出席", user:user2},
            {id:10, answer:"欠席", user:user3},
        ]
    },
    {id:5, name:"イベント#5", date:new Date(), detail:"イベント#5の詳細", 
        answers:[
            {id:11, answer:"出席", user:user1},
            {id:12, answer:"出席", user:user2},
            {id:13, answer:"欠席", user:user3},
        ]
    }
];