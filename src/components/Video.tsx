import React from "react";

type VideoProps = {
  sourceMp4?: string;
  sourceWebm?: string;
};

export const Video = ({ sourceMp4, sourceWebm }: VideoProps) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full aspect-video h-full"
      >
        <source src={sourceMp4} type="video/mp4" />
        <source src={sourceWebm} type="video/webm" />
      </video>
    </>
  );
};
