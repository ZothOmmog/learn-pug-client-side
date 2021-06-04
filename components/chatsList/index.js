import { chatStyled } from '../chat';
import { chatsList } from './ui';
import { createElementFromHtml } from '../../helpers/createElementFromHtml.js';

export const chatsListRender = async ({ parentElem, insertClass = null }) => {
    setTimeout(() => {
        console.log('in timeout');
        let elemsForInsert;

        if (insertClass == null) {
            elemsForInsert = [parentElem];
        } else {
            elemsForInsert = parentElem.querySelectorAll(insertClass);
        }

        const chatsListElem = createElementFromHtml(chatsList());

        const chatArr = [
            { header: 'firts chat', chatText: 'text first chat' },
            { header: 'next chat', chatText: 'text next chat' },
        ].map((chatData) => chatStyled(chatData));

        const chatsView = chatArr.reduce((acc, chat) => {
            return acc + chat;
        });

        chatsListElem.innerHTML = chatsView;

        for (let elem of elemsForInsert) {
            elem.innerHTML = '';
            elem.append(chatsListElem);
        }
    }, 100);
};
