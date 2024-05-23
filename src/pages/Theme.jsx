import { Typography } from "@material-tailwind/react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ThemeColor from "../components/ThemeColor";
import { useState } from "react";

const Theme = () => {
    const colors = ['#7E56DA', '#800080', '#0000FF', '#008000', '#FF0000', '#98E8C1', '#FFC0CB'];
    const [selectedColor, setSelectedColor] = useState('#7E56DA');

    return (
        <div className="w-full">
            <Header currentPage='Theme' backDestination='/settings' />
            <main className='flex flex-col items-start gap-5 my-16 px-4 py-12 overflow-y-scroll'>
                <Typography variant="h5">
                    Màu
                </Typography>
                <div className="grid grid-cols-4 gap-9">
                    {
                        colors.map(color => (
                            <ThemeColor value={color} selected={color === selectedColor} />
                        ))
                    }
                </div>
            </main>
            <Navbar active={3} />
        </div>
    );
}

export default Theme;