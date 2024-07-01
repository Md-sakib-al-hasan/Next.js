'use client'

const Button = () => {
    return (
        <div className='mt-5'>
        <button className="bg-green-500 rounded-sm px-4 " onClick={() => console.log("i have read here")}>click here</button>
    </div>
    );
};

export default Button;