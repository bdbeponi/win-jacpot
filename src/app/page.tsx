"use client";

import { Input, Select } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [age, setAge]:any = useState(null);

  const onGenderChange = () => {
    setStep(2);
  };
  const onOcupationChange = () => {
    setStep(4);
  };
  const onCountryChange = (value: any, options: any) => {
    if (options?.value === "usa") {
      window.open(
        "https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382",
        "_blank"
      );
    }
    if (options?.value === "uk") {
      window.open(
        "https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382",
        "_blank"
      );
    }
    if (options?.value === "canada") {
      window.open(
        "https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382",
        "_blank"
      );
    }
    window.location.reload();
  };

  useEffect(() => {
    if (age >= 10) {
      setStep(3);
    }
  }, [age]);

  const countryOptions = [
    {
      value: "usa",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/us.svg"
            alt="USA"
            className="w-6 h-4 mr-2"
          />
          United States
        </div>
      ),
    },
    {
      value: "uk",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="United Kingdom"
            className="w-6 h-4 mr-2"
          />
          United Kingdom
        </div>
      ),
    },
    {
      value: "canada",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/ca.svg"
            alt="Canada"
            className="w-6 h-4 mr-2"
          />
          Canada
        </div>
      ),
    },
  ];

  return (
    <>
      <div className=" mx-auto max-w-[500px] w-full rounded-xl h-[250px] p-5 relative border overflow-hidden bg-white">
        <p className="text-[18px] text-black">
          Enter your contact info to continue. We will contact our winner using
          this information
        </p>

        <>
          <div
            className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              step === 1 ? `right-0` : `left-[-100%]`
            } !transition-all !duration-300 `}
          >
            <p className="text-[20px] text-black">Select your gender:</p>
            <Select
              onChange={onGenderChange}
              className="mt-4 w-full h-[50px]"
              placeholder="Select your gender"
              options={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
              ]}
            />
          </div>
        </>

        <>
          <div
            className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              step === 2 ? `right-0` : `left-[-100%]`
            } !transition-all !duration-300 `}
          >
            <p className="text-[20px] text-black">Enter your age:</p>
            <Input
              type="number"
              placeholder="Enter your age"
              className="mt-4 w-full h-[50px]"
              value={age}
              onChange={(e: any) => {
                setAge(e.target.value);
              }}
            />
          </div>
        </>

        <>
          <div
            className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              step === 3 ? `right-0` : `left-[-100%]`
            } !transition-all !duration-300 `}
          >
            <p className="text-[20px] text-black">Select your ocupation:</p>
            <Select
              onChange={onOcupationChange}
              className="mt-4 w-full h-[50px]"
              placeholder="Select your gender"
              options={[
                {
                  value: "Professional",
                  label: "Professional",
                },
                {
                  value: "Business Man",
                  label: "Business Man",
                },
                {
                  value: "Student",
                  label: "Student",
                },
                {
                  value: "Others",
                  label: "Others",
                },
              ]}
            />
          </div>
        </>

        <>
          <div
            className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              step === 4 ? `right-0` : `left-[-100%]`
            } !transition-all !duration-300 `}
          >
            <p className="text-[20px] text-black">Select Country:</p>
            <Select
              options={countryOptions}
              onChange={onCountryChange}
              className="mt-4 w-full h-[50px]"
              placeholder="Select your country"
            />
          </div>
        </>
      </div>
    </>
  );
}
