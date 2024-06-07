import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Card, Typography } from "@material-tailwind/react";
import React from "react";

const Warning = () => {
  return (
    <Card className="flex items-center justify-center px-2 py-1 mb-2 bg-[#faf7ed]">
      <div className="flex gap-2 items-center justify-start text-[#FF4545]">
        
        <Typography
          variant="h6"
          className="text-left font-inter text-[#FF4545]"
        >
          <span className="font-bold"><ExclamationTriangleIcon className="w-5 text-[#FF4545] inline" /> Nhắc nhở: </span>
          <span className="font-medium">
            Bạn có 1 công việc quá hạn và 5 công việc đến hạn tuần này
          </span>
        </Typography>
      </div>
    </Card>
  );
};

export default Warning;
