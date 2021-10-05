const getAllPeople = async() => {
    let all = []
    const url = 'https://swapi.dev/api/people/'
    for (let i = 1; i <= 10; i++) {
        const request = await (await fetch(`https://swapi.dev/api/people/${i}`)).json()
            // console.log(request);
        const homeWorld = await (await fetch(request.homeworld)).json()
        let person = {
            name: request.name,
            height: request.height,
            hair_color: request.hair_color,
            planet: {
                homeWorld: homeWorld.name,
                popualtion: homeWorld.popualtion
            }
        }
        console.log(person);
        all.push(person)
    }
    console.log(all);
}
async function run() {
    await getAllPeople()

}
run()



const container = document.createElement('div');
container.style.width = '95vw';
container.style.height = '100vh';

document.body.append(container)

const table = document.createElement('table');
table.style.width = '100%';
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

container.append(table);

const headtr = document.createElement('tr');
const th = document.createElement('th');
th.colSpan = "5";
th.innerHTML = 'Star wars'


headtr.append(th);
table.append(headtr)

addHeadersRow()

function addHeadersRow() {
    const tr = document.createElement('tr');
    tr.classList.add('oddTr');

    const td1 = document.createElement('td');
    td1.innerHTML = 'name'
    tr.append(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = 'hair_color'
    tr.append(td2);

    const td3 = document.createElement('td');
    td3.innerHTML = 'height'
    tr.append(td3);

    const td4 = document.createElement('td');
    td4.innerHTML = 'gender'
    tr.append(td4);

    const td5 = document.createElement('td');
    td5.innerHTML = 'birth year'
    tr.append(td5);

    table.append(tr)

}

function addCharacterToTable(ind) {

    const tr = document.createElement('tr');
    if (ind % 2 == 0) {
        tr.classList.add('evenTr');
    } else {
        tr.classList.add('oddTr');
    }


    const td1 = document.createElement('td');
    td1.innerHTML = all[ind].name
    tr.append(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = all[ind].hair_color
    tr.append(td2);

    const td3 = document.createElement('td');
    td3.innerHTML = all[ind].height
    tr.append(td3);

    const td4 = document.createElement('td');
    td4.innerHTML = all[ind]['planet'].homeWorld
    tr.append(td4);

    const td5 = document.createElement('td');
    td5.innerHTML = all[ind].planet.popualtion
    tr.append(td5);

    table.append(tr);

}