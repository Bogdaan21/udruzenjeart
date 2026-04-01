"use client";

import { QRCodeCanvas } from "qrcode.react";

const QRCodeComponent = () => {
  return (
    <div>
      <QRCodeCanvas value="https://www.udruzenjeart.me/agenda/" size={105} bgColor="#ffffff" fgColor="#0843aa" />
    </div>
  );
};

export default QRCodeComponent;
