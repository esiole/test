let element = document.createElement('div');
element.innerHTML = "TEEEEEEEEEEEEEEEEEEEEEEEEEEST DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD!";
document.body.appendChild(element);

/*let list = document.getElementsByClassName("repository-content");
let divL = document.createElement('div');
//let list = document.getElementsByClassName("container-lg");
let table = document.createElement('div');
table.id = "INFO";
table.innerHTML = "COMMMMMMMMMMMMMMMMMMMMMMITS HERE!!!!!!!!!!";
divL.appendChild(list);
divL.appendChild(table);
divL.id = "TEST";
document.body.appendChild(divL);*/

//list[0].appendChild(table);
//class="container-lg clearfix new-discussion-timeline experiment-repo-nav  px-3"

let countUser = 5;
let metka = document.getElementsByClassName("commit-tease");
for(let i = 0; i < countUser; i++) {
    let line = document.createElement("div");
    line.id = "commit";
    let avatar = document.createElement("div");
    avatar.id = "avatar";
    let name = document.createElement("div");
    name.id = "name";
    let date = document.createElement("div");
    date.id = "date";


    avatar.innerHTML = "OO";
    date.innerHTML = "Дата последнего коммита пользователя";
    let user = document.createElement("div");
    user.id = "user";
    let commitMessage = document.createElement("div");
    commitMessage.id = "commitText";
    user.innerHTML = "пользователь";
    commitMessage.innerHTML = "коммит";

    name.innerHTML = "пользователь коммит";
    //name.appendChild(user);
    //name.appendChild(commitMessage);


    line.appendChild(avatar);
    line.appendChild(name);
    line.appendChild(date);

    metka[0].before(line);
}

//metka.parentNode.removeChild(metka);
metka[0].remove();