import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "../../../queries/auth/hooks/useGoogleLogin";

export const GoogleLogin = () => {
  const { mutate, isLoading, isSuccess, isError, error } = useGoogleLogin();

  const handleCallbackResponse = async (response) => {
    var userObject = jwt_decode(response.credential);

    if (Object.keys(userObject).length !== 0) {
      const googleUser = {
        firstname: userObject.given_name,
        lastname: userObject.family_name,
        email: userObject.email,
        password: null,
      };
      mutate(googleUser);
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isSuccess) {
    return <div>Logged In</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="my-4" id="signInDiv"></div>
    </div>
  );
};
