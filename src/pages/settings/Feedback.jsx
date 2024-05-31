import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import MessageDialog from "../../components/MessageDialog";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="w-full">
            <Header currentPage='Feedback' backDestination='/settings' />
            <main className='flex flex-col items-start gap-6 my-16 px-4 py-8 overflow-y-scroll'>
                <Typography variant="h5">Để lại phản hồi của bạn</Typography>
                
                <div className="flex flex-col gap-2">
                    <div className="flex justify-start gap-2">
                        <Button variant='outlined' className="border-indigo-500 text-indigo-500 p-2">Không hoạt động</Button>
                        <Button variant='outlined' className="border-indigo-500 text-indigo-500 p-2">Không lặp lại</Button>
                        <Button variant='outlined' className="border-indigo-500 text-indigo-500 p-2">Không nhắc nhở</Button>
                    </div>
                    <div className="flex justify-start gap-2">
                        <Button variant='outlined' className="border-indigo-500 text-indigo-500 p-2">Sự cố và lỗi</Button>
                        <Button variant='outlined' className="border-indigo-500 text-indigo-500 p-2">Khác</Button>
                    </div>
                </div>

                <Textarea variant="outlined" className="h-40" placeholder="Viết phản hồi của bạn ở đây. Vui lòng để lại thêm chi tiết để chúng tôi có thể giải quyết vấn đề của bạn càng sớm càng tốt"/>
                
                <div className="w-full">
                    <Typography className="text-left text-sm font-inter">Thêm hình ảnh (Tùy chọn)</Typography>
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-[1px] border-blue-gray-200 focus:border-gray-900 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                </div>

                <Button variant="filled" className="bg-purple w-full" onClick={() => setOpenDialog(true)}>Gửi phản hồi</Button>
            </main>
            <MessageDialog message={'Phản hồi của bạn đã được gửi thành công!'} open={openDialog} handleOpen={setOpenDialog} handleConfirm={() => { setOpenDialog(false); navigate('/settings'); }} />
            <Navbar active={3} />
        </div>
    );
}

export default Feedback;