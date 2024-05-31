import { ArrowRightEndOnRectangleIcon, BellIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, ChevronRightIcon, EnvelopeIcon, PaintBrushIcon, QuestionMarkCircleIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SettingsOption from "../../components/SettingsOption";
import { Card, Typography, Switch } from "@material-tailwind/react";
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
                    <Card className="flex flex-col items-center gap-2 mb-5 p-4">
                        <img src={avatar} className="w-28 h-28 rounded-full"/>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <Typography className="font-inter text-xl font-medium">
                                Nguyễn Anh Long
                            </Typography>
                            <ChevronRightIcon className="w-6"/>
                        </div>
                    </Card>
                </Link>

                {/* <SettingsOption 
                    icon={<ChartBarSquareIcon className="w-8"/>} 
                    optionName="Báo cáo" 
                    to='/statistics'
                /> */}
                <SettingsOption
                    icon={<PaintBrushIcon className="w-8"/>}
                    optionName="Chủ đề"
                    to="/settings/theme"
                />
                <SettingsOption
                    icon={<BellIcon className="w-8"/>}
                    optionName="Thông báo"
                    control={<div class="inline-flex items-center">
                        <div class="relative -left-5 inline-block w-8 h-4 rounded-full cursor-pointer">
                        <input defaultChecked id="switch-6" type="checkbox"
                            class="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-indigo-500 peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500" />
                        <label htmlFor="switch-6"
                            class="before:content[''] absolute top-2/4 left-3 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500">
                            <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                            data-ripple-dark="true"></div>
                        </label>
                        </div>
                    </div>}
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