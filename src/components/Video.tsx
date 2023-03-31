import React from "react";

type VideoProps = {
  sourceMp4?: string;
  sourceWebm?: string;
  height?: string;
  width?: string;
  minHeight?: boolean;
  className?: string;
};

export const Video = ({
  sourceMp4,
  sourceWebm,
  height,
  width,
  minHeight,
  className,
}: VideoProps) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className={`w-full aspect-video h-full object-cover ${
          minHeight ? "min-h-[75vh]" : ""} max-h-[90vh] ${className}`}
        height={height}
        width={width}
      >
        <source src={sourceMp4} type="video/mp4" />
        <source src={sourceWebm} type="video/webm" />
      </video>
    </>
  );
};
