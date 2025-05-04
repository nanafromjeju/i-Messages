import React from "react";

interface RoomsProps {
  avatar?: React.ReactNode;
}

const Rooms = ({ avatar }: RoomsProps) => {
  return <div> {avatar ? avatar : ""}</div>;
};

export default Rooms;
