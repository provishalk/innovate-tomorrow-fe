import React from "react";
import axios from "axios"
const TimePage = ({ currentDateTime }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{currentDateTime}</h1>
    </div>
  );
};

export default TimePage;

export const getStaticProps = async () => {
  // Use remark to convert markdown into HTML string
  const { data } = await axios.get(
    `https://eou7b4yf6sugg59.m.pipedream.net/?slug=timing`
  );
  return {
    props: {
      currentDateTime: data.date,
    },
  };
};
