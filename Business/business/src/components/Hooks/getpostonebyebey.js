export default async function getPostonebyeone (id){
    const resut = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return   resut.json();
}