import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
        title="A first meetup"
        address="1232, 123k Some City"
        description="First meetup description"
      />
    </>
  );
};

export default MeetupDetails;
