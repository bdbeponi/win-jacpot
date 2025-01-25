"use client";

import { Button, Input, Select } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [age, setAge]: any = useState(null);

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

  const onRedirect = (country: any) => {
    if (country === "australia") {
      window.open(
        "https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382",
        "_blank"
      );
    }
    if (country === "usa") {
      window.open(
        "https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382",
        "_blank"
      );
    }
    if (country === "canada") {
      window.open(
        "https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382",
        "_blank"
      );
    }
    // window.location.reload();
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
      <div className=" w-full win">
        {step === 1 && (
          <>
            <div
              // className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              //   step === 1 ? `right-0` : `left-[-100%]`
              // } !transition-all !duration-300 `}
              className={` mt-8 `}
            >
              <p className="text-[20px] text-black">Select your gender:</p>
              {/* <Select
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
              /> */}
              <div className=" flex items-center gap-2 mt-2">
                <Button onClick={onGenderChange}>Male</Button>
                <Button onClick={onGenderChange}>Female</Button>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div
              // className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              //   step === 2 ? `right-0` : `left-[-100%]`
              // } !transition-all !duration-300 `}
              className={` mt-8 `}
            >
              <p className="text-[20px] text-black">Enter your age:</p>
              {/* <Input
                type="number"
                placeholder="Enter your age"
                className="mt-4 w-full h-[50px]"
                value={age}
                onChange={(e: any) => {
                  setAge(e.target.value);
                }}
              /> */}
              <div className=" grid grid-cols-3 items-center gap-2 mt-2">
                  <Button onClick={()=>{setStep(3)}}>18 - 25</Button>
                  <Button onClick={()=>{setStep(3)}}>26 - 30</Button>
                  <Button onClick={()=>{setStep(3)}}>31 - 35</Button>
                  <Button onClick={()=>{setStep(3)}}>36 - 34</Button>
                  <Button onClick={()=>{setStep(3)}}>41 - 50</Button>
                  <Button onClick={()=>{setStep(3)}}>51+</Button>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div
              // className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              //   step === 3 ? `right-0` : `left-[-100%]`
              // } !transition-all !duration-300 `}
              className={` mt-8 `}
            >
              <p className="text-[20px] text-black">Select your ocupation:</p>
              {/* <Select
                onChange={onOcupationChange}
                className="mt-4 w-full h-[50px]"
                placeholder="Select your ocupation"
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
              /> */}
              <div className=" grid grid-cols-2 items-center gap-2 mt-2">
                  <Button onClick={()=>{setStep(4)}}>Professional</Button>
                  <Button onClick={()=>{setStep(4)}}>Business Man</Button>
                  <Button onClick={()=>{setStep(4)}}>Student</Button>
                  <Button onClick={()=>{setStep(4)}}>Others</Button>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div
              // className={`mt-8 absolute top-[30%] right-[-100%] w-[90%] translate-x-[-5%] ${
              //   step === 4 ? `right-0` : `left-[-100%]`
              // } !transition-all !duration-300 `}
              className={` mt-8  `}
            >
              <p className="text-[20px] text-black">Select Country:</p>
              {/* <Select
                options={countryOptions}
                onChange={onCountryChange}
                className="mt-4 w-full h-[50px]"
                placeholder="Select your country"
              /> */}
              <div className=" grid grid-cols-3  items-center gap-2 mt-2">
                <Button
                  onClick={() => {
                    onRedirect("australia");
                  }}
                >
                  <Link
                    href="https://afflat3e3.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28454&c=918277&a=662107&k=0887A027AEB2368A0EC7A9FDBDE06FDB&l=31382"
                    target="_blank"
                    className="flex items-center"
                  >
                    <img
                      src="https://cdn.britannica.com/78/6078-050-18D5DEFE/Flag-Australia.jpg"
                      alt="Australia"
                      className="w-6 h-4 mr-2"
                    />
                    Australia
                  </Link>
                </Button>
                <Button
                  onClick={() => {
                    onRedirect("usa");
                  }}
                >
                  <Link
                    href="https://afflat3e1.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28460&c=918277&a=662107&k=EBD7B9D6B4F3D02EE836429D8B9E997C&l=31388"
                    target="_blank"
                    className="flex items-center"
                  >
                    <img
                      src="https://flagcdn.com/us.svg"
                      alt="USA"
                      className="w-6 h-4 mr-2"
                    />
                    United State
                  </Link>
                </Button>
                <Button
                  className="flex items-center"
                  onClick={() => {
                    onRedirect("canada");
                  }}
                >
                  <Link
                    href="https://afflat3e1.com/trk/lnk/DEF38C5D-3D3F-4998-985F-47A5DB83CAA3/?o=28516&c=918277&a=662107&k=E40E68DC1198918D919AA64D81F97DB8&l=31477"
                    target="_blank"
                    className="flex items-center"
                  >
                    <img
                      src="https://flagcdn.com/ca.svg"
                      alt="Canada"
                      className="w-6 h-4 mr-2"
                    />
                    Canada
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
