const ApiUSERS = 'https://jsonplaceholder.typicode.com/users';

export class ApiRequest {

    async usersFetch() {
        const dataUsers = await fetch(ApiUSERS).then(data => data.json());
        return dataUsers;
    }

    async UserPosts(id) {
        const dataPostOfUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(data => data.json());
        return dataPostOfUser;
    }


    async UserComements(idPost) {
        const dataCommentOfUser = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`).then(data => data.json());
        return dataCommentOfUser;
    }


}