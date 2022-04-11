/* eslint-disable indent */
console.log("wagwan people");
const url = " https://www.balldontlie.io/api/v1/players";
const userContainer = document.querySelector(".user-container");

const fetchData = async () =>{
	const response = await fetch(url);
	const res = await response.json();

	const users = res.data;

    users.forEach(user => {
        
        let html = `                
        <div class="user">
            <div class="user-img"></div>
            <span>${user.first_name}</span>
        </div>`;

        userContainer.insertAdjacentHTML('beforeend', html);

    });
};

fetchData();
