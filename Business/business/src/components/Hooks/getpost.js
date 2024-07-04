export default async function getPost (){
    const resut = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    return   resut.json();
}