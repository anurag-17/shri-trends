"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Loader from "./Loader";
import { removeDealerToken } from "@/redux/dealerSlice/authSlice";

// import Loader from '../loader';

const DealerProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const dealerAuthToken = useSelector((state) => state.dealer?.token);
   
    // const loading = true
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
   

    useEffect(() => {
      const checkAuth = () => {
        if (!dealerAuthToken) {
          router.push("/");
        }
        if (dealerAuthToken) {
          verify();
        }
      };

      checkAuth();
    }, [dealerAuthToken, router]);

    const verify = async () => {
      setIsLoading(true);
      setIsAuth(false);
      try {
        const res = await axios.get(
          `/api/auth/verifyUserToken/${dealerAuthToken}`
        );
        if (res?.data?.data === null) {
          router.push("/");
          dispatch(removeDealerToken());
        }
        if (res.status === 200) {
          setIsAuth(true);
          setIsLoading(false);
          return;
        } else {
          dispatch(removeTremoveDealerTokenoken());
          router.push("/");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        router.push("/");
        setIsLoading(false);
      }
    };

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : dealerAuthToken && isAuth ? (
          <WrappedComponent {...props} />
        ) : null}
      </>
    );
  };

  return Wrapper;
};

export default DealerProtectedRoute;
