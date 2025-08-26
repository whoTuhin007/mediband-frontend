"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { jsPDF } from "jspdf";

export default function MedFormDetails() {
  const { userId } = useParams();   // ✅ must match folder name [userId]
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setError("No user ID provided in URL");
      setLoading(false);
      return;
    }
    

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/dashboard/medform/${userId}` // ✅ backend API
        );
        setFormData(response.data.medRecord);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch medical form data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

   const handleDownloadPDF = () => {
    if (!formData) return;
    const doc = new jsPDF();
    let y = 20;
  
    // Helper to move to next page when needed
    const checkPage = () => {
      if (y > 270) {   // around bottom of A4
        doc.addPage();
        y = 20;
      }
    };
  
    doc.setFontSize(18);
    doc.text("Medical Form Data", 20, y);
    y += 15;
  
    doc.setFontSize(12);
  
    // Simple fields
    const simpleFields = [
      ["Age", formData.age],
      ["Height", `${formData.height} cm`],
      ["Weight", `${formData.weight} kg`],
      ["Gender", formData.gender],
      ["Blood Group", formData.bloodGroup],
      ["Emergency Contact", formData.emergencyContact],
      ["Allergies", formData.allergies],
      ["Medication", formData.medication],
      ["Medication List", formData.medicationlist],
      ["Prescriptions", formData.prescriptions?.join(", ")],
      ["Surgeries", formData.surgeries],
    ];
  
    simpleFields.forEach(([label, value]) => {
      doc.text(`${label}: ${value || "N/A"}`, 20, y);
      y += 8;
      checkPage();
    });
  
    // Section renderer with page check
    const renderSection = (title, obj) => {
      if (!obj) return;
      doc.setFont(undefined, "bold");
      doc.text(title + ":", 20, y);
      y += 10;
      doc.setFont(undefined, "normal");
      checkPage();
  
      Object.entries(obj).forEach(([key, value]) => {
        doc.text(`- ${key}: ${value ? "Yes" : "No"}`, 30, y);
        y += 8;
        checkPage();
      });
      y += 5;
    };
  
    renderSection("Family History", formData.familyHistory);
    renderSection("Currently Experiencing", formData.currentlyExperiencing);
    renderSection("Immunizations", formData.immunizations);
    renderSection("Lifestyle", formData.lifestyle);
  
    doc.save("medical-form.pdf");
  };
  
  

  if (loading) return <p className="p-6 text-lg">Loading...</p>;
  if (error) return <p className="p-6 text-red-500 text-lg">{error}</p>;
  if (!formData) return <p className="p-6">No medical data found</p>;

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-900 drop-shadow">Medical Form Details</h1>
      <button
        onClick={handleDownloadPDF}
        className="mb-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow hover:scale-105 transition-transform"
      >
        Download as PDF
      </button>
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-base space-y-4 border border-blue-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          <p><span className="font-semibold text-blue-700">Age:</span> {formData.age}</p>
          <p><span className="font-semibold text-blue-700">Height:</span> {formData.height} cm</p>
          <p><span className="font-semibold text-blue-700">Weight:</span> {formData.weight} kg</p>
          <p><span className="font-semibold text-blue-700">Gender:</span> {formData.gender}</p>
          <p><span className="font-semibold text-blue-700">Blood Group:</span> {formData.bloodGroup}</p>
          <p><span className="font-semibold text-blue-700">Emergency Contact:</span> {formData.emergencyContact}</p>
          <p><span className="font-semibold text-blue-700">Allergies:</span> {formData.allergies}</p>
          <p><span className="font-semibold text-blue-700">Medication:</span> {formData.medication}</p>
          <p><span className="font-semibold text-blue-700">Medication List:</span> {formData.medicationlist}</p>
          <p><span className="font-semibold text-blue-700">Prescriptions:</span> {formData.prescriptions?.join(", ")}</p>
          <p><span className="font-semibold text-blue-700">Surgeries:</span> {formData.surgeries}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Family History</h2>
          <ul className="ml-4 list-disc grid grid-cols-2 gap-x-6 gap-y-1">
            {formData.familyHistory &&
              Object.entries(formData.familyHistory).map(([key, value]) => (
                <li key={key} className="capitalize">{key.replace(/([A-Z])/g, ' $1')}: <span className={value ? 'text-green-600' : 'text-red-500'}>{value ? "Yes" : "No"}</span></li>
              ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Currently Experiencing</h2>
          <ul className="ml-4 list-disc grid grid-cols-2 gap-x-6 gap-y-1">
            {formData.currentlyExperiencing &&
              Object.entries(formData.currentlyExperiencing).map(([key, value]) => (
                <li key={key} className="capitalize">{key.replace(/([A-Z])/g, ' $1')}: <span className={value ? 'text-green-600' : 'text-red-500'}>{value ? "Yes" : "No"}</span></li>
              ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Immunizations</h2>
          <ul className="ml-4 list-disc grid grid-cols-2 gap-x-6 gap-y-1">
            {formData.immunizations &&
              Object.entries(formData.immunizations).map(([key, value]) => (
                <li key={key} className="capitalize">{key.replace(/([A-Z])/g, ' $1')}: <span className={value ? 'text-green-600' : 'text-red-500'}>{value ? "Yes" : "No"}</span></li>
              ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Lifestyle</h2>
          <ul className="ml-4 list-disc grid grid-cols-2 gap-x-6 gap-y-1">
            {formData.lifestyle &&
              Object.entries(formData.lifestyle).map(([key, value]) => (
                <li key={key} className="capitalize">{key.replace(/([A-Z])/g, ' $1')}: <span className={value ? 'text-green-600' : 'text-red-500'}>{value ? "Yes" : "No"}</span></li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
