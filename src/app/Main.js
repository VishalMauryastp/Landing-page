"use client";
import Model from "@/components/Home/Model";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SideBar from "@/components/sidebar/SideBar";

const Main = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <main className="min-h-screen relative">
        {children}
        <SideBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />
      <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Main;
