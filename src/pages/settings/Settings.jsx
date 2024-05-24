import { ArrowRightEndOnRectangleIcon, BellIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, ChevronRightIcon, EnvelopeIcon, PaintBrushIcon, QuestionMarkCircleIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SettingsOption from "../../components/SettingsOption";
import { Typography } from "@material-tailwind/react";
import avatar from '../../assets/avatar.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";

const Settings = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-full">
            <Header currentPage='Cài đặt' />
            <main className='flex flex-col gap-4 my-16 px-4 py-12 overflow-y-scroll'>
                <Link to={'/settings/profile'}>
                    <div className="flex flex-col items-center gap-2 mb-5">
                        <img src={avatar} className="w-28 h-28 rounded-full"/>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <Typography className="font-inter text-xl font-medium">
                                Nguyễn Anh Long
                            </Typography>
                            <ChevronRightIcon className="w-6"/>
                        </div>
                    </div>
                </Link>

                <SettingsOption 
                    icon={<ChartBarSquareIcon className="w-8"/>} 
                    optionName="Báo cáo" 
                    to='/statistics'
                />
                <SettingsOption
                    icon={<PaintBrushIcon className="w-8"/>}
                    optionName="Theme"
                    to="/settings/theme"
                />
                <SettingsOption
                    icon={<BellIcon className="w-8"/>}
                    optionName="Thông báo"
                />
                <SettingsOption
                    icon={<ShieldCheckIcon className="w-8"/>}
                    optionName="Quyền riêng tư"
                    to="/settings/privacy"
                />
                <SettingsOption
                    icon={<QuestionMarkCircleIcon className="w-8"/>}
                    optionName="Trợ giúp"
                    to="/settings/help"
                />
                <SettingsOption
                    icon={<ChatBubbleOvalLeftIcon className="w-8"/>}
                    optionName="Feedback"
                    to="/settings/feedback"
                />
                <div onClick={() => setOpenDialog(true)}>
                <SettingsOption
                    icon={<ArrowRightEndOnRectangleIcon className="w-8"/>}
                    optionName="Đăng xuất"
                    control={<></>}
                />
                </div>
            </main>
            <Navbar active={3} />

            <ConfirmDialog 
                message='Bạn có chắc muốn đăng xuất?' 
                open={openDialog} 
                handleOpen={() => setOpenDialog(true)} 
                handleCancel={() => setOpenDialog(false)}
                handleConfirm={() => navigate('/')}
            />
        </div>
    );
}

export default Settings;