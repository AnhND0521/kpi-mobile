import { ArrowRightEndOnRectangleIcon, BellIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, ChevronRightIcon, EnvelopeIcon, PaintBrushIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SettingsOption from "../components/SettingsOption";
import { Switch, Typography } from "@material-tailwind/react";

const Settings = () => {

    return (
        <div className="w-full">
            <Header currentPage='Cài đặt' />
            <main className='flex flex-col gap-4 my-16 px-4 py-12 overflow-y-scroll'>
                <div className="flex flex-col items-center gap-2 mb-5">
                    <UserCircleIcon className="w-28"/>
                    <div className="flex items-center justify-center gap-2">
                        <Typography className="font-inter text-xl font-medium">
                            Nguyễn Văn A
                        </Typography>
                        <ChevronRightIcon className="w-6"/>
                    </div>
                </div>
                
                <SettingsOption 
                    icon={<ChartBarSquareIcon className="w-8"/>} 
                    optionName="Báo cáo" 
                />
                <SettingsOption
                    icon={<PaintBrushIcon className="w-8"/>}
                    optionName="Theme"
                />
                <SettingsOption
                    icon={<ShieldCheckIcon className="w-8"/>}
                    optionName="Quyền riêng tư"
                />
                <SettingsOption
                    icon={<ChatBubbleOvalLeftIcon className="w-8"/>}
                    optionName="Feedback"
                />
                <SettingsOption
                    icon={<BellIcon className="w-8"/>}
                    optionName="Thông báo"
                />
                <SettingsOption
                    icon={<EnvelopeIcon className="w-8"/>}
                    optionName="Liên hệ"
                />
                <SettingsOption
                    icon={<ArrowRightEndOnRectangleIcon className="w-8"/>}
                    optionName="Đăng xuất"
                    control={<></>}
                /> 
            </main>
            <Navbar active={3} />
        </div>
    );
}

export default Settings;