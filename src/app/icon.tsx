import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        P
        {/* <Image src={'/port.png'} alt="p" width={32} height={32}/> */}
      </div>
    )
  ),{...size}
}
