"use client";
import axios from "axios";
import React, { useState } from "react";
import { API_ENDPOINT, DEFAULT_MESSAGE, ERR_MESSAGE } from "./constants";
import Spinner from "./Spinner";

const NewsletterForm = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [message, setmessage] = useState(DEFAULT_MESSAGE);

  const pushData = async (formData: FormData) => {
    setIsSpinnerVisible(true);
    const rawFormData = {
      email: formData.get("email"),
    };

    try {
      const response = await axios.get(
        `${API_ENDPOINT}?email=${rawFormData.email}`
      );
      setIsMessageVisible(true);
      setIsSpinnerVisible(false);
    } catch (error) {
      setmessage(ERR_MESSAGE);
      setIsMessageVisible(true);
      setIsSpinnerVisible(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await pushData(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col relative z-20 w-full max-w-2xl font-body"
    >
      <div className="flex md:flex-row flex-col justify-center md:items-center mb-4 p-2 md:p-0">
        <div className="flex flex-1">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@email.com"
            className="block border-gray-300 focus:border-indigo-500 bg-white shadow-sm mb-6 md:mb-0 px-3 py-4 border rounded-md w-full text-gray-600 placeholder:text-gray-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="flex justify-center items-center ml-4 text-indigo-200">
          <div className="flex items-center">
            <input
              type="radio"
              name="role"
              value={"individual"}
              className="w-4 h-4 cursor-pointer "
              required
              id="user"
            />

            <label
              htmlFor="user"
              className="block ml-1 cursor-pointer  font-light"
            >
              Individual
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="role"
              value={"veterinarian"}
              className="ml-4 w-4 h-4 cursor-pointer "
              required
              id="veterinarian"
            />
            <label
              htmlFor="veterinarian"
              className="block  cursor-pointer ml-1 font-light"
            >
              Vet. Clinic
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex justify-center items-center gap-4   bg-indigo-500 hover:bg-indigo-600 focus:ring-opacity-50 hover:shadow-md px-4 py-3 rounded-md w-1/2 md:w-full font-thin text-white self-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span>Count me in</span>
        {isSpinnerVisible && <Spinner />}
      </button>

      {isMessageVisible && (
        <p className="mx-auto my-0 mt-4 w-1/2 font-thin text-center text-xs">
          {message}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;
