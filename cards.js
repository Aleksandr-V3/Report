
const content = [
    {
        day: 1,
        date: '26.05.2021',
        content: "Изучил об Active Directory, которая предоставляет методы для хранения данных каталога и делает эти данные доступными для пользователей и администраторов сети. AD хранит информацию об учетных записях пользователей, такую как имена, пароли, номера телефонов и другие, и позволяет другим авторизованным пользователям в той же сети получать доступ к этой информации.Active Directory хранит информацию об объектах в сети и упрощает поиск и использование этой информации администраторами и пользователями."
    },
    {
        day: 2,
        date: '27.05.2021',
        content: "Изучал Windows Sandbox, которая представляет собой наполовину приложение, наполовину виртуальную машину. Он позволяет быстро запустить виртуальную чистую ОС, созданную на основе текущего состояния вашей системы, для тестирования программ или файлов в безопасной среде, изолированной от вашей основной системы. К концу сеанса песочница разрушает это состояние. Из песочницы в вашу основную установку Windows ничего не может попасть, и после ее закрытия ничего не остается.\nЯ изучал PostgreSQL, систему объектно-реляционной базы данных, которая использует и расширяет язык SQL в сочетании со многими функциями, которые безопасно хранят и масштабируют самые сложные рабочие нагрузки данных. "
    },
    {
        day: 3,
        date: '28.05.2021',
        content: "Изучил как переустановливать Windows, как чистить диск для переустановки системы, подключать PC к локальной сети организации и создавать учетную запись в AD."
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
