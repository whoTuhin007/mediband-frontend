"use client";
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import { useForm } from "@/app/components/FormContext";
import jsPDF from "jspdf";

const Page = () => {
  const { formData, setFormData } = useForm();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/medform`, {
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

  const qrUrl = `${process.env.NEXT_PUBLIC_URL}/${userId}`; // Redirects to frontend route (not backend)

  // Download QR as image
  const handleDownloadQR = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mediband-qr.png';
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col  py-8 px-2 sm:px-4 bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-900 drop-shadow text-center">Your QR Card</h1>
        <p className="mb-4 text-gray-600 text-center">Scan this QR code to access your medical profile instantly in emergencies.</p>
        {userId ? (
          <div className="flex flex-col items-center gap-4">
            <QRCodeCanvas value={qrUrl} size={220} className="border-2 border-blue-200 rounded-xl shadow" />
            <button
              onClick={handleDownloadQR}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Download QR
            </button>
            <p className="text-xs text-gray-400 mt-2">Share or print this QR for quick access.</p>
          </div>
        ) : (
          <p className="text-red-500">No user ID found</p>
        )}
      </div>
    </div>
  );
};

export default Page;
