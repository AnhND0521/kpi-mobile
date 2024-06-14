import {
  Breadcrumbs,
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Roulette from "../components/roulette/Roulette";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import shopeeVoucher from "../assets/shopee-voucher.png";
import garenaCard from "../assets/garena-card.jpg";
import beVoucher from "../assets/be-voucher.jpg";
import euroTicket from "../assets/euro-ticket.jpeg";
import ngotTicket from "../assets/ngot-ticket.jpg";
import cgvTicket from "../assets/cgv-ticket.jpg";
import { useState } from "react";
import MessageDialog from "../components/MessageDialog";
import Header from "../components/Header";

const RouletteGame = () => {
  const data = [
    {
      text: "10🪙",
    },
    {
      text: "500🪙",
    },
    {
      text: "25🪙",
    },
    {
      text: "50🪙",
    },
    {
      text: "100🪙",
    },
    {
      text: "1🪙",
    },
    {
      text: "5🪙",
    },
    {
      text: "15🪙",
    },
    {
      text: "20🪙",
    },
    {
      text: "1000🪙",
    },
    {
      text: "2🪙",
    },
    {
      text: "0🪙",
    },
  ];

  const gifts = [
    {
      name: "Voucher Shopee",
      coins: 800,
      image: shopeeVoucher,
    },
    {
      name: "Thẻ nạp Garena",
      coins: 1200,
      image: garenaCard,
    },
    {
      name: "Mã giảm giá be",
      coins: 1000,
      image: beVoucher,
    },
    {
      name: "Vé xem Euro 2024",
      coins: 5000,
      image: euroTicket,
    },
    {
      name: "Vé liveshow Ngọt",
      coins: 0,
      image: ngotTicket,
    },
    {
      name: "Vé xem phim CGV",
      coins: 2000,
      image: cgvTicket,
    },
  ];
  const [selectedGift, setSelectedGift] = useState();
  const [openGift, setOpenGift] = useState(false);
  const [openNotEnoughCoins, setOpenNotEnoughCoins] = useState(false);

  const [totalCoins, setTotalCoins] = useState(500);

  return (
    <div className='w-full'>
    <Header currentPage='Vòng quay may mắn' backDestination='/dashboard' />
    <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
      <Typography className="text-base font-normal  ">Số lượt quay bạn nhận được mỗi ngày sẽ ứng với số ngày liên tiếp hoàn thành nhiệm vụ tính tới ngày đó!</Typography>
      <div className="w-full flex flex-col gap-10 items-center mt-3">
        <Roulette data={data} setTotalCoins={setTotalCoins} />
        <div className="flex flex-col gap-10 w-full items-center">
          <Typography className="font-medium text-xl">
            Bạn đang có: {totalCoins}🪙
          </Typography>
          <div className="flex flex-col gap-4 w-full items-center bg-[#f7f7f7] pt-5 pb-8 rounded-3xl">
            <Typography className="font-medium text-xl mb-4">
              Đổi quà ngay
            </Typography>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {gifts.map((g) => (
                <Card className="flex flex-col gap-2 items-center bg-[#d6f0f7] p-3">
                  {g.image && <img src={g.image} className="h-14" />}
                  <Typography className="font-normal text-lg">
                    {g.name}
                  </Typography>
                  <Button
                    className="bg-purple py-1"
                    onClick={() => {
                      setSelectedGift(g);
                      if (totalCoins >= g.coins) {
                        setOpenGift(true);
                        setTotalCoins(totalCoins - g.coins);
                      } else {
                        setOpenNotEnoughCoins(true);
                      }
                    }}
                  >
                    <Typography>{g.coins}🪙</Typography>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openGift && selectedGift && (
        <Dialog open={openGift} handler={setOpenGift}>
          <DialogHeader>
            <Typography className="text-lg font-inter font-medium">
              Chúc mừng bạn đã nhận được:
            </Typography>
          </DialogHeader>
          <DialogBody className="flex flex-col items-center gap-4">
            <img src={selectedGift.image} className="w-48" />
            <Typography className="text-lg font-medium">
              {selectedGift.name}
            </Typography>
            <Typography className="text-base font-regular font-gray">
              <b>Chi tiết: </b>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam lobortis turpis sed ipsum gravida
              fermentum. Mauris dapibus nunc quis leo luctus, sed aliquam sem
              volutpat. Quisque non aliquam purus. Vivamus volutpat accumsan
              dolor eget luctus. Nam in fringilla dui. Vestibulum ut aliquam
              lectus, quis blandit turpis.
            </Typography>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              className="bg-purple text-base py-2 w-full"
              onClick={() => setOpenGift(false)}
            >
              <span>OK</span>
            </Button>
          </DialogFooter>
        </Dialog>
      )}

      {openNotEnoughCoins && (
        <MessageDialog
          message={"Bạn chưa có đủ xu! Vui lòng quay để nhận thêm!"}
          open={openNotEnoughCoins}
          handleOpen={setOpenNotEnoughCoins}
          handleConfirm={() => setOpenNotEnoughCoins(false)}
        />
      )}
      </main>
      <Navbar />
    </div>
  );
};

export default RouletteGame;
