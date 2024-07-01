import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/../public/logo.png"


const Mission = () => {
    return (
        <div className='mt-10'>
            <p className='text-2xl'>This is Mission Routes</p>
            <div className="w-[200px]">
            <Image src={thumb} alt="logo" /> 
            </div>
            <Button></Button>
        </div>
    );
};

export default Mission;