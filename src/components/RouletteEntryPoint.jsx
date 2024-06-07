import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Card, Typography } from "@material-tailwind/react";
import wheel from "../assets/wheel.png";
import { Link } from "react-router-dom";

const RouletteEntryPoint = () => {
  return (
    <Card className="flex items-center justify-center px-3 py-3 mb-2 bg-[#edfaef] w-full">
      <Link to={"/gacha"}>
        <div className="flex gap-2 items-center justify-start text-[#FF4545]">
          <img src={wheel} className="w-8" />
          <Typography variant="h6" className="w-full text-left font-inter">
            <span className="font-bold">Bạn được tặng 5 lượt quay </span>
            <span className="font-medium">
              nhờ chuỗi 5 ngày hoàn thành nhiệm vụ!{" "}
              <Link to={"/gacha"}>
                <b>Quay ngay</b>
              </Link>{" "}
              <Link to={"/gacha"}>→</Link>
            </span>
          </Typography>
        </div>
      </Link>
    </Card>
  );
};

export default RouletteEntryPoint;