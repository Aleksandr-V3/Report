
const content = [
    {
        day: 1,
        date: '26.05.2021',
        content: "VM"
    },
    {
        day: 2,
        date: '27.05.2021',
        content: "Песочница, VMware, postgresql"
    },
    {
        day: 3,
        date: '28.05.2021',
        content: " a type specimen book."
    },
    {
        day: 4,
        date: '31.05.2021',
        content: ""
    },
];

 /*
<div class="card">
    <div class="data">
        <h2>Day 1</h2>
    </div>
    <div class="content">
        <p>asdsadsnknbf ishdv iaub uh aivsd bvsuv sdg vysvd y SDF sigdv vb abdsv is viaul sdg siu   hvusdivl</p>
    </div>
</div>
*/

function createDiv(attr){
    const body = document.createElement('div');
    body.className = attr;
    return body;
}
function createBody(){
    const card = createDiv('card');    
    return card;
}
function createDate(day){
    const body = createDiv('data');
    const text = document.createElement('h2');
    text.textContent = 'День ' + day;
    body.appendChild(text);

    return body;
}
function createContent(content){
    const body = createDiv('content');
    const text = document.createElement('p');
    text.textContent = content;
    body.appendChild(text);

    return body;
}
 /*
<div class="card">
    <div class="data">
        <h2>Day 1</h2>
    </div>
    <div class="content">
        <p>asdsadsnknbf ishdv iaub uh aivsd bvsuv sdg vysvd y SDF sigdv vb abdsv is viaul sdg siu   hvusdivl</p>
    </div>
</div>
*/
function createCard(obj){
    const card = createBody();
    const part1 = createDate(obj.day);
    const part2 = createContent(obj.content);

    card.appendChild(part1);
    card.appendChild(part2);
    return card;
}

function main(){
    const field = document.querySelector('#table');

    content.forEach(obj =>{
        const card = createCard(obj);
        field.appendChild(card);
    })
}

main();
