const ApiUSERS = 'https://jsonplaceholder.typicode.com/users';


class API {

    async usersFetch() {
        const dataUsers = await fetch(ApiUSERS).then(data => data.json());
        return dataUsers;
    }

    async UserPosts(id) {
        const dataPostOfUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(data => data.json());
        return dataPostOfUser;
    }


    async UserDetails(idUser) {
        const dataDetailsUser = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`).then(data => data.json());
        return dataDetailsUser;
    }
}

export default API;