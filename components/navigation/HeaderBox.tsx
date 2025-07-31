import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <header className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
        {title}
        {type === "greeting" && user && (
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent font-semibold">
            &nbsp;{user}
          </span>
        )}
      </h1>
      {subtext && (
        <p className="text-base lg:text-lg text-gray-500 font-medium">
          {subtext}
        </p>
      )}
    </header>
  );
};

export default HeaderBox;
