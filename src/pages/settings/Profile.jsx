import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import avatar from '../../assets/avatar.png';
import { Button, Card, CardBody, Input, Typography } from "@material-tailwind/react";
import CornerButton from "../../components/CornerButton";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="w-full">
            <Header currentPage='Hồ sơ' backDestination='/settings' />
            <main className='flex flex-col items-center gap-4 my-16 px-4 py-8 overflow-y-scroll'>
                <div className="flex flex-col items-center gap-2 mb-5">
                        <img src={avatar} className="w-28 h-28 rounded-full"/>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <Typography className="font-inter text-xl font-medium">
                                Nguyễn Anh Long
                            </Typography>
                        </div>
                    <div className="flex items-center justify-between gap-4 mt-5 mb-10 w-full">
                        <Button variant="outlined" className="text-purple w-full">Đổi mật khẩu</Button>
                        <Button variant="outlined" className="text-purple w-full">Đổi ảnh đại diện</Button>
                    </div>
                    <form className="flex flex-col items-start gap-5 w-full">
                        <div className="flex items-center justify-start gap-2">
                            <Input type="text" label="Họ *" value={'Nguyễn'} />
                            <Input type="text" label="Tên *" value={'Anh Long'} />
                        </div>
                        <Input type="email" label="Email *" value={'nguyenanhlong@mnsd.com'} />
                        <Input type="text" label="Số điện thoại" value={'0987654321'} />
                        <Input type="text" label="Nơi làm việc" value={'Rạp xiếc Trung ương'} />
                    </form>
                </div>
                <Link to={'/settings'}>
                    <CornerButton icon='finish' />
                </Link>
            </main>
            <Navbar active={3} />
        </div>
    );
}

export default Profile;