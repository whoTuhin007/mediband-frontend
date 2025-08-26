"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

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

  if (loading) return <p className="p-6 text-lg">Loading...</p>;
  if (error) return <p className="p-6 text-red-500 text-lg">{error}</p>;
  if (!formData) return <p className="p-6">No medical data found</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Medical Form Details</h1>
      <div className="bg-white rounded-xl shadow p-6 text-base space-y-2">
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Height:</strong> {formData.height} cm</p>
        <p><strong>Weight:</strong> {formData.weight} kg</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
        <p><strong>Emergency Contact:</strong> {formData.emergencyContact}</p>
        <p><strong>Allergies:</strong> {formData.allergies}</p>
        <p><strong>Medication:</strong> {formData.medication}</p>
        <p><strong>Medication List:</strong> {formData.medicationlist}</p>
        <p><strong>Prescriptions:</strong> {formData.prescriptions?.join(", ")}</p>
        <p><strong>Surgeries:</strong> {formData.surgeries}</p>

        <div className="mt-2">
          <strong>Family History:</strong>
          <ul className="ml-4 list-disc">
            {formData.familyHistory &&
              Object.entries(formData.familyHistory).map(([key, value]) => (
                <li key={key}>{key}: {value ? "Yes" : "No"}</li>
              ))}
          </ul>
        </div>

        <div className="mt-2">
          <strong>Currently Experiencing:</strong>
          <ul className="ml-4 list-disc">
            {formData.currentlyExperiencing &&
              Object.entries(formData.currentlyExperiencing).map(([key, value]) => (
                <li key={key}>{key}: {value ? "Yes" : "No"}</li>
              ))}
          </ul>
        </div>

        <div className="mt-2">
          <strong>Immunizations:</strong>
          <ul className="ml-4 list-disc">
            {formData.immunizations &&
              Object.entries(formData.immunizations).map(([key, value]) => (
                <li key={key}>{key}: {value ? "Yes" : "No"}</li>
              ))}
          </ul>
        </div>

        <div className="mt-2">
          <strong>Lifestyle:</strong>
          <ul className="ml-4 list-disc">
            {formData.lifestyle &&
              Object.entries(formData.lifestyle).map(([key, value]) => (
                <li key={key}>{key}: {value ? "Yes" : "No"}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
