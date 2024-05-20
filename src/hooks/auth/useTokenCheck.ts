import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../../lib/token/token";

const useTokenCheck = () => {
  useEffect(() => {
    
    if (
      token.getToken(ACCESS_TOKEN_KEY) === undefined ||
      token.getToken(REFRESH_TOKEN_KEY) === undefined
    ) {
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);
};

export default useTokenCheck;
