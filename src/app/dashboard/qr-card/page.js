"use client";
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import { useForm } from "@/app/components/FormContext";

const Page = () => {
  const { formData, setFormData } = useForm();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${NEXT_PUBLIC_API_URL}/dashboard/medform`, {
          withCredentials: true,
        });
        console.log("Fetched medical form data:", response.data);
        console.log("User ID:", response.data.medRecord.user._id);

        setFormData(response.data.medRecord);
        setUserId(response.data.medRecord.user._id);
      } catch (err) {
        console.error("Error fetching medical form data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setFormData]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const qrUrl = `${NEXT_PUBLIC_API_URL}/${userId}`; // Redirects to frontend route (not backend)

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl font-bold text-center mt-5">QR Card</h1>
      {userId ? (
        <QRCodeCanvas value={qrUrl} size={256} />
      ) : (
        <p className="text-red-500">No user ID found</p>
      )}
    </div>
  );
};

export default Page;
