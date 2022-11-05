import token from "../../lib/token/token";

const useLogout = () => {
  const letsgoLogout = (): void => {
    token.clearToken();
    window.location.href = "http://dodam.b1nd.com/sign";
  };

  return { letsgoLogout };
};
export default useLogout;
