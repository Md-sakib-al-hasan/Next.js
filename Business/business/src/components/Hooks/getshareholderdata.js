export default async function getdata (){
    const resut = await fetch("https://jsonplaceholder.typicode.com/users")
    return   resut.json();
}