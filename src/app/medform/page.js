"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function MedibandForm() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    bloodGroup: "",
    emergencyContact: "",
    allergies: "",
    medication: "",
    medicationlist: "",
    familyHistory: {
      diabetes: false,
      hypertension: false,
      heartDisease: false,
      cancer: false,
      asthma: false,
      epilepsy: false,
      other: false,
    },
    currentlyExperiencing: {
      chestPain: false,
      shortnessOfBreath: false,
      dizziness: false,
      severeHeadache: false,
      suddenWeakness: false,
      visionProblems: false,
      difficultySpeaking: false,
      numbness: false,
      weightLoss: false,
      weightGain: false,
      nightSweats: false,
      unexplainedFever: false,
      persistentCough: false,
      coughingBlood: false,
      frequentUrination: false,
      excessiveThirst: false,
      hunger: false,
      abdominalPain: false,
      nauseaVomiting: false,
      diarrhea: false,
      jointPain: false,
      skinRash: false,
      swelling: false,
      fatigue: false,
      anxiety: false,
      depression: false,
      sleepProblems: false,
      memoryIssues: false,
      concentrationIssues: false,
      moodSwings: false,
      gastrointestinalIssues: false,
      urinaryIssues: false,
      menstrualIssues: false,
      other: false,
    },
    prescriptions: [],
    surgeries: "",
    immunizations: {
      tetanus: false,
      influenza: false,
      covid19: false,
      hepatitisB: false,
      mmr: false,
      varicella: false,
      pneumococcal: false,
      meningococcal: false,
      hpv: false,
    },
    lifestyle: {
      smoking: false,
      alcohol: false,
      exercise: false,
      diet: false,
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      // Append fields
      for (const key in formData) {
        if (typeof formData[key] === "object" && !(formData[key] instanceof FileList)) {
          form.append(key, JSON.stringify(formData[key]));  // nested objects as JSON
        } else if (key === "prescriptions") {
          formData.prescriptions.forEach(file => form.append("prescriptions", file));
          console.log("Appending prescriptions:", formData.prescriptions);
        } else {
          form.append(key, formData[key]);
        }
      }

      console.log("FormData entries:");
      for (let pair of form.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }
 

      const response = await axios.post(
         `${process.env.NEXT_PUBLIC_API_URL}/medform`,
        form,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log("Form submitted successfully:", response.data);
      router.push('/dashboard/medical-form');

    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full md:max-w-xl max-w-lg shadow-lg rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            MediBand Medical Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your age"
                required
              />
            </div>

            {/* height */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Height (in cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your height"
                required
              />
            </div>
            {/* weight */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Weight (in kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your weight"
                required
              />
            </div>


            {/* gender*/}
            <div>
              <label className="block text-gray-700 font-medium mb-1">gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>

              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Emergency Contact</label>
              <input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter contact number"
                required
              />
            </div>

            {/* Allergies */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Allergies</label>
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="List any allergies"
                rows="3"
              ></textarea>
            </div>
            {/* currently experiencing*/}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Which of the following symptopms are you currently experiencing?</label>
              <div className="grid grid-cols-2 md:grid-cols-3  gap-2 ">
                {Object.keys(formData.currentlyExperiencing).map((condition) => (
                  <div key={condition} className="flex items-center">
                    <Checkbox
                      id={condition}
                      checked={formData.currentlyExperiencing[condition]}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          currentlyExperiencing: {
                            ...formData.currentlyExperiencing,
                            [condition]: checked,
                          },
                        })
                      }
                      className="mr-2"
                    />
                    <label htmlFor={condition} className="text-gray-700 capitalize">
                      {condition.replace(/([A-Z])/g, ' $1')}
                    </label>
                  </div>

                ))}
              </div>
              <br />





            </div>
            {/* medication*/}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Are you currently taking any medication?</label>
              <div className="flex items-center space-x-4 mb-2">
                <select
                  name="medication"
                  value={formData.medication}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="">select answer</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>




                </select>
              </div>

            </div>
            {/* medication list */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Please list them</label>
              <textarea
                name="medicationlist"
                value={formData.medicationlist}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="List medications you are taking"
                rows="3"
              ></textarea>
            </div>
            {/*prescriptions*/}
            <input
            name="prescriptions"
              type="file"
              multiple
              onChange={(e) =>
                setFormData({
                  ...formData,
                  prescriptions: Array.from(e.target.files)  // keep File objects
                })
              }
              formEncType="multipart/form-data"
            />

            <br />

            {/* immunizations*/
            }
            <div>
              <label className="block text-gray-700 font-medium mb-1">Immunizations</label>
              <div className="grid grid-cols-2 md:grid-cols-3  gap-2 ">
                {Object.keys(formData.immunizations).map((vaccine) => (
                  <div key={vaccine} className="flex items-center">
                    <Checkbox
                      id={vaccine}
                      checked={formData.immunizations[vaccine]}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          immunizations: {
                            ...formData.immunizations,
                            [vaccine]: checked,
                          },
                        })
                      }
                      className="mr-2"
                    />
                    <label htmlFor={vaccine} className="text-gray-700 capitalize">
                      {vaccine.replace(/([A-Z])/g, ' $1')}
                    </label>
                  </div>

                ))}
              </div>

              <br />
            </div>
            {/* lifestyle*/
            }
            <div>
              <label className="block text-gray-700 font-medium mb-1">Lifestyle Habits</label>
              <div className="grid grid-cols-2 md:grid-cols-3  gap-2 ">
                {Object.keys(formData.lifestyle).map((habit) => (
                  <div key={habit} className="flex items-center">
                    <Checkbox
                      id={habit}
                      checked={formData.lifestyle[habit]}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          lifestyle: {
                            ...formData.lifestyle,
                            [habit]: checked,
                          },
                        })
                      }
                      className="mr-2"
                    />
                    <label htmlFor={habit} className="text-gray-700 capitalize">
                      {habit.replace(/([A-Z])/g, ' $1')}
                    </label>
                  </div>

                ))}
              </div>
              <br />
            </div>




            {/* surgeries*/}
            List any past surgeries here (if any): <br />
            <textarea
              name="surgeries"
              value={formData.surgeries}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="List any past surgeries"
              rows="3"
            ></textarea>
            <br />





            {/* Family record*/}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Family Medical History</label>
              <div className="grid grid-cols-2 md:grid-cols-3  gap-2 ">
                {Object.keys(formData.familyHistory).map((condition) => (
                  <div key={condition} className="flex items-center">
                    <Checkbox
                      id={condition}
                      checked={formData.familyHistory[condition]}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          familyHistory: {
                            ...formData.familyHistory,
                            [condition]: checked,
                          },
                        })
                      }
                      className="mr-2"
                    />
                    <label htmlFor={condition} className="text-gray-700 capitalize">
                      {condition.replace(/([A-Z])/g, ' $1')}
                    </label>
                  </div>

                ))}
              </div>






            </div>




            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="w-full py-3 text-lg rounded-xl">
                Submit
              </Button>
            </div>
            {success && <p className="text-green-500 text-center">{success}</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
