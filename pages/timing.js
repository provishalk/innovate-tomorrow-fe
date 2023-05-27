import React from "react";

const TimePage = ({ currentDateTime }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{currentDateTime}</h1>
    </div>
  );
};

export default TimePage;

export const getStaticProps = async (props) => {
  // Use remark to convert markdown into HTML string
  const currentDateTime = new Date().toLocaleString();

  return {
    props: {
      currentDateTime,
    },
  };
};
