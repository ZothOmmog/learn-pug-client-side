import { chatsListRender } from '../components/chatsList';

const root = document.createElement('div');
root.setAttribute('id', 'root');

chatsListRender({ parentElem: root });

document.body.appendChild(root);