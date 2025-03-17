import token from "libs/Tokens/token";

const useLogout = () => {
  const letsgoLogout = (): void => {
    token.clearToken();
    window.location.href = "http://dodam.b1nd.com/sign";
  };

  return { letsgoLogout };
};
export default useLogout;
