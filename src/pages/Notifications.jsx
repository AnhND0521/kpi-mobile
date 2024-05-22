import { Card, CardBody, Typography } from "@material-tailwind/react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FunnelIcon } from "@heroicons/react/20/solid";

const Notifications = () => {
    const notifications = [
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: false
        },
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 1,
            read: false
        },
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 1,
            read: false
        },
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        }
    ]

    return (
        <div className="w-full">
            <Header currentPage='Thông báo' />
            <main className='flex flex-col gap-4 my-16 px-4 py-8 overflow-y-scroll'>
                <div className="flex justify-between">
                    <Typography className="font-inter text-purple font-normal">
                        Đánh dấu tất cả là đã đọc
                    </Typography>
                    <div className="flex items-center gap-2">
                        <FunnelIcon className="w-5"></FunnelIcon>
                        <Typography className="font-inter text-md">Lọc</Typography>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                { notifications.map(n => (
                    <Card className={`bg-cyan-50${n.read ? '/50' : ''} flex flex-col items-start`}>
                        <div className={`absolute top-3 left-0 w-0.5 h-[4.8rem] bg-${n.type === 0 ? 'orange' : 'red'}-500`}></div>
                        <CardBody className="p-4">
                            <div className="flex justify-between mb-3">
                                <Typography className={`text-left font-inter text-sm font-${n.read ? 'normal' : 'semibold'}`}>
                                    {n.content}
                                </Typography>
                                <Typography className="w-20 text-right text-textGray font-inter text-sm">
                                    2:01 AM
                                </Typography>
                            </div>
                            <div className="flex justify-start gap-5">
                                <Typography className="text-left text-purple text-xs font-inter">Đánh dấu là đã đọc</Typography>
                                <Typography className="text-left text-purple text-xs font-inter">Đánh dấu là đã hoàn thành</Typography>
                            </div>
                        </CardBody>
                    </Card>
                ))}
                </div>
            </main>
            <Navbar />
        </div>
    );
}

export default Notifications;