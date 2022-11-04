import token from "../../lib/token/token";

const useLogout = () => {
  const letsgoLogout = (): void => {
    token.clearToken();
  };

  return { letsgoLogout };
};
export default useLogout;
