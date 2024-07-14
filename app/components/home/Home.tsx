"use client"
import { useState } from 'react';
import Modal from "@/app/components/modal/Modal"
import useHome from './hooks/useHome';
import LinkModal from "@/app/components/modal/LinkModal"

const HomePage = () => {
  const {
    openModal, closeModal, 
    isModalOpen,
    closeLinkModal,
    isLinkModal,
    openLinkModal,
  } = useHome()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 text-center">Welcome to Our Website</h1>
      <p className="text-lg md:text-xl mb-8 text-gray-700 text-center px-4 md:px-0">
        Discover amazing content and stay updated with our latest news. We offer a variety of articles, resources, and exclusive content just for you.
      </p>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-6"
        onClick={openModal}
      >
        Show Using Build
      </button>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-6"
        onClick={openLinkModal}
      >
        Show Using Link
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <LinkModal isOpen={isLinkModal} onClose={closeLinkModal} />
      {/* for link modal github url for demo as  */}
      {/* https://github.com/sahilrahmani89/angular-basic */}
      
      <div className="mt-12 text-center w-full px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Featured Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Article Title 1</h3>
            <p className="text-gray-600">A brief description of what this article is about.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Article Title 2</h3>
            <p className="text-gray-600">A brief description of what this article is about.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Article Title 3</h3>
            <p className="text-gray-600">A brief description of what this article is about.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
