import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTokenContext } from "../providers/TokenProvider";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
  const tokenContext = useTokenContext();

  useEffect(() => {
    axios
      .get(baseApiUrl + "/auth/callback", {
        params: { code, state },
      })
      .then((response) => {
        if (response.status === 200) {
          tokenContext.token = response.data.token;
          tokenContext.refreshToken = response.data.refresh_token;
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div>Callback</div>;
}
