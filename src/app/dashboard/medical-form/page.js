"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { jsPDF } from "jspdf";
import { useForm } from '@/app/components/FormContext';


const MedicalFormPage = () => {

  const { formData, setFormData } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${NEXT_PUBLIC_API_URL}/dashboard/medform`, {
          withCredentials: true,
        });
        setFormData(res.data.medRecord);
           console.log(res.data.medRecord)


        setLoading(false);
      } catch (err) {
        setError('Failed to load medical form data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="md:text-3xl text-xl font-bold text-center w-full  h-full flex flex-col justify-center items-center ">
      <div>Medical Form Data
        <span>
          <Button variant="outline" size="sm" className="ml-4" >
            <Link href="/dashboard/medical-form/edit">
              Edit Form
            </Link>

          </Button>
             
        </span>
        <span>
          <Button variant="outline" size="sm" className="ml-4" onClick={handleDownloadPDF}> 
             

              Download Form
            
          </Button>
          </span>
      </div>
      {loading && <p className="text-lg">Loading...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      {formData && (
  <div className="mt-4 text-left mx-auto w-full bg-white md:w-3/4 md:text-base text-sm font-normal overflow-scroll max-h-[60vh] overflow-x-hidden p-4 border rounded-lg">
          

          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Height:</strong> {formData.height} cm</p>
          <p><strong>Weight:</strong> {formData.weight} kg</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
          <p><strong>Emergency Contact:</strong> {formData.emergencyContact}</p>
          <p><strong>Allergies:</strong> {formData.allergies}</p>
          <p><strong>Medication:</strong> {formData.medication}</p>
          <p><strong>Medication List:</strong> {formData.medicationlist}</p>
          <p><strong>Prescriptions:</strong> {formData.prescriptions && formData.prescriptions.join(', ')}</p>
          <p><strong>Surgeries:</strong> {formData.surgeries}</p>
          <div className="mt-2">
            <strong>Family History:</strong>
            <ul className="ml-4">
              {formData.familyHistory && Object.entries(formData.familyHistory).map(([key, value]) => (
                <li key={key}>{key}: {value ? 'Yes' : 'No'}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <strong>Currently Experiencing:</strong>
            <ul className="ml-4">
              {formData.currentlyExperiencing && Object.entries(formData.currentlyExperiencing).map(([key, value]) => (
                <li key={key}>{key}: {value ? 'Yes' : 'No'}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <strong>Immunizations:</strong>
            <ul className="ml-4">
              {formData.immunizations && Object.entries(formData.immunizations).map(([key, value]) => (
                <li key={key}>{key}: {value ? 'Yes' : 'No'}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <strong>Lifestyle:</strong>
            <ul className="ml-4">
              {formData.lifestyle && Object.entries(formData.lifestyle).map(([key, value]) => (
                <li key={key}>{key}: {value ? 'Yes' : 'No'}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalFormPage;