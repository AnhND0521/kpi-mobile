import { Typography } from "@material-tailwind/react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
    return (
        <div className="w-full">
            <Header currentPage='Chính sách bảo mật' backDestination='/settings' />
            <main className='flex flex-col items-start gap-4 my-16 px-4 py-8 overflow-y-scroll'>
                <Typography variant="h5" className="font-inter">I. Giới thiệu</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Fusce dolor nulla, auctor eget malesuada eu, fringilla sit amet diam. Cras in turpis in risus ultrices faucibus. Aliquam in lorem ut ligula tempor volutpat. Proin ipsum velit, tempus id nunc non, condimentum facilisis tortor. Duis metus turpis, ultricies id laoreet et, consequat vel lacus. Quisque accumsan ultrices ligula eget posuere. Nunc vel efficitur mi. Integer massa ex, consectetur vel augue in, lacinia sagittis augue. Curabitur venenatis quis odio sit amet gravida.</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Nullam a velit erat. Nunc iaculis quis nisl interdum laoreet. Phasellus posuere laoreet dui a dignissim. Sed efficitur, nisl in bibendum vehicula, libero magna semper mi, blandit scelerisque massa dui ac ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at mattis justo, molestie molestie velit. Nulla ante neque, convallis gravida condimentum vel, blandit venenatis augue. Integer consequat ex nec eleifend consectetur.</Typography>
            
                <Typography variant="h5" className="font-inter">II. Thu thập và sử dụng thông tin</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Curabitur egestas quis velit a pulvinar. Quisque lectus eros, faucibus eu sodales nec, tincidunt tempus nibh. Aliquam ligula arcu, aliquet interdum erat a, porttitor mattis libero. Vivamus euismod dictum venenatis. Quisque quis velit et velit volutpat cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tempus, est eu vestibulum porttitor, orci justo placerat mi, egestas porttitor ipsum mi quis diam. Praesent et urna viverra, molestie turpis sit amet, iaculis elit. Maecenas viverra interdum semper. Proin in imperdiet magna.</Typography>

                <Typography variant="h5" className="font-inter">III. Bảo mật thông tin của bạn</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Nunc tempor dui nec consectetur lacinia. Sed aliquet sem erat, id ornare tortor ornare aliquet. Vestibulum tincidunt, lectus in convallis sollicitudin, metus tellus pharetra tortor, id facilisis est augue sed enim. Curabitur consectetur blandit nulla, sit amet aliquet nibh commodo ac. Etiam ut tristique ex. Praesent scelerisque luctus neque, a sagittis velit dapibus eget. Quisque sagittis condimentum justo nec pulvinar. Nunc aliquam dolor turpis, a euismod mi vehicula eu. Integer luctus magna eget urna tempus tristique. Nullam vitae scelerisque nibh. Fusce eget ultricies augue, vel sollicitudin felis. Donec urna ipsum, mattis sit amet aliquet ac, volutpat quis mi. Ut id ligula at nunc mattis elementum non ac dui.</Typography>
            </main>
            <Navbar active={3} />
        </div>
    );
}

export default PrivacyPolicy;