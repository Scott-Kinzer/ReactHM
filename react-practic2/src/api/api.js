const ApiUSERS = 'https://jsonplaceholder.typicode.com/users';


class API {

      usersFetch() {
        // const dataUsers = await 
        return fetch(ApiUSERS).then(data => data.json());
        // return dataUsers;
    }

    async UserPosts(id) {
        // const dataPostOfUser = await 
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(data => data.json());
        // return dataPostOfUser;
    }


    async UserDetails(idUser) {
        const dataDetailsUser = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`).then(data => data.json());
        return dataDetailsUser;
    }
}

export default API;