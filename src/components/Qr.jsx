import {QRCodeSVG} from "qrcode.react";

export default function Qr() {
  return <QRCodeSVG value="https://google.com" size={128} />;
}
