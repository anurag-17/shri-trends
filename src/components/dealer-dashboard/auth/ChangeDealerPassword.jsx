import Backarrow from "@/components/svg/Backarrow";
import Openeye from "@/components/svg/Openeye";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RightSection from "./RightSection";
import { useSelector } from "react-redux";

const ChangeDealerPassword = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [cnfmPassword, setCnfmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfmPassword, setShowCnfmPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");
  // const token = JSON.parse(sessionStorage.getItem("sessionToken"));
  const token = useSelector((state)=>state.dealer.token);

  const InputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.oldPassword === formData.newPassword) {
      setError("Old password and new password can't be same ");
    } else if (formData.newPassword !== cnfmPassword) {
      setError("New password and confirm password should match");
    } else {
      try {
        setLoading(true);

        const response = await axios.post(
          "/api/auth/updatePassword",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (response.status === 200) {
          toast.success("Password change successful!");
          setLoading(false);
          setError("");
          // sessionStorage.removeItem("sessionToken");
          router.push("/");
        } else {
          toast.error(response?.data || "Invalid credentials");
          setLoading(false);
          setError("");
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Failed please try again!");
        setError("");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <>
      <ToastContainer/>
        <div className="flex items-center justify-center lg:min-h-screen  ">
          <div className="md:px-[50px] w-full mx-auto">
            <div className="relative flex flex-col 2xl:gap-x-20 xl:gap-x-10 gap-x-7 min-h-screen justify-center lg:shadow-none  items-center lg:flex-row space-y-8 md:space-y-0 w-[100%] px-[10px]bg-white lg:px-[40px] py-[20px] md:py-[40px] ">
              <div
                className="absolute right-10 top-6 bg-[#e5f0fa] hover:bg-[#c5dcf0] px-3 py-1 rounded cursor-pointer flex items-center gap-3"
                onClick={() => router.push("/dealer")}
              >
                <Backarrow />
                Go back
              </div>
              <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
                <form action="" className="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4 justify-center p-8 lg:p-14 md:max-w-[80%] lg:w-full lg:max-w-[100%] mx-auto ">
                    <div className="text-left ">
                      <p className="mb-2 2xl:text-[35px] md:text-[30px] text-[24px] leading-[38px] md:font-bold font-medium whitespace-nowrap">
                        Change password
                      </p>
                    </div>

                    <div className="relative flex justify-center items-center mt-4">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="oldPassword"
                        placeholder="Old password"
                        className="log_input w-full mt-2 custom-input"
                        onChange={InputHandler}
                        minLength={8}
                        required
                      />
                      <div
                        className="absolute right-[10px] cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Openeye /> : <Openeye />}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                      <input
                        type={showCnfmPassword ? "text" : "password"}
                        name="newPassword"
                        placeholder="New password"
                        className="log_input w-full mt-2 custom-input"
                        onChange={InputHandler}
                        minLength={8}
                        required
                      />
                      <div
                        className="absolute right-[10px] cursor-pointer"
                        onClick={() => setShowCnfmPassword(!showCnfmPassword)}
                      >
                        {showCnfmPassword ? <Openeye /> : <Openeye />}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                      <input
                        type={"password"}
                        name="cnfmPassword"
                        placeholder="Confirm new password "
                        className="log_input w-full mt-2 custom-input"
                        onChange={(e) => setCnfmPassword(e.target.value)}
                        minLength={8}
                        required
                      />
                    </div>

                    {isError && (
                      <p className="text-[red] mt-2 px-2 text-[14px] lg:text-[13px] font-normal bg-[#f0e3e3] py-1    rounded-[4px]">
                        {isError}
                      </p>
                    )}

                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#1f2432] font-medium text-white p-2 rounded-lg  hover:bg-white hover:border hover:border-gray-300 h-[50px] log-btn"
                      >
                        {isLoading ? "Loading.." : "Change password"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <RightSection />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ChangeDealerPassword;
