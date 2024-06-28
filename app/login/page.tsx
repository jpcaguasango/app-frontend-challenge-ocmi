"use client";
import { useAuthLogin } from "@/services/AuthService";
import SettingsIcon from "@mui/icons-material/Settings";
import { LoadingButton } from "@mui/lab";
import { Card, CardContent, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import * as React from "react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Login",
// };

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { mutateAsync: signIn, isPending } = useAuthLogin();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    hook: React.SetStateAction<any>
  ) => {
    hook(e.target.value);
  };

  const handleSubmitLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signIn({ username, password });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-96 h-96 flex justify-center rounded-lg shadow-lg">
        <CardContent className="w-80 h-full flex flex-col justify-center items-end">
          <FormControl component="fieldset" className="w-full">
            <FormGroup>
              <div className="flex items-center justify-center mb-6">
                <SettingsIcon
                  className="mr-2"
                  color="primary"
                  sx={{ fontSize: 40 }}
                />
                <Typography variant="h5" color="initial">
                  OCMI
                </Typography>
              </div>

              <div className="mb-8">
                <TextField
                  id="usernameId"
                  className="w-full"
                  label="Correo"
                  variant="filled"
                  value={username}
                  onChange={(e) => handleChange(e, setUsername)}
                />
              </div>

              <div className="mb-8">
                <TextField
                  id="passwordId"
                  className="w-full"
                  label="Contraseña"
                  variant="filled"
                  type="password"
                  value={password}
                  onChange={(e) => handleChange(e, setPassword)}
                />
              </div>

              <LoadingButton
                variant="contained"
                size="large"
                loading={isPending}
                onClick={handleSubmitLogin}
              >
                Iniciar Sesion
              </LoadingButton>
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
