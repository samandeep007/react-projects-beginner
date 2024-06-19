import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();



  return (
    <>
      <div className="text-center bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
      </div>

      <img className="mx-auto my-5" src={data.avatar_url} alt={data.login} />
    </>
  );
}

export const gitHubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}
