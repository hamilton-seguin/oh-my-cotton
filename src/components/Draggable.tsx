import React, { useState, ReactNode, useRef, MouseEvent } from "react";

type DraggableProps = {
  rootClass?: string;
  children: ReactNode;
};

export const Draggable = ({ rootClass = "cursor-grab", children }: DraggableProps) => {
  const ourRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({ startX: 0, scrollLeft: 0 });

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0] as HTMLDivElement;
    slider.classList.add("cursor-grabbing");
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
    setIsMouseDown(true);
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0] as HTMLDivElement;
    slider.classList.remove("cursor-grabbing");
  };
  const handleDragOut = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);
  };
  const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0] as HTMLDivElement;
    slider.classList.add("cursor-grabbing");
    const x = e.pageX - slider.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      onMouseLeave={handleDragOut}
      className={rootClass}
    >
      {children}
    </div>
  );
};
