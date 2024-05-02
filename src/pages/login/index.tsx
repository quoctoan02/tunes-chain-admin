import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
import { AppIcon } from "../../components/app-icon";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={false}
      registerLink={false}
      forgotPasswordLink={false}
      formProps={{
        initialValues: { email: "admin@tunes-chain.com", password: "admin" },
      }}
    />
  );
};
