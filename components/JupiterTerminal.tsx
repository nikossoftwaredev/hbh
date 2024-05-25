"use client";

import Card from "@/components/Card";
import { TOKEN_ADDRESS } from "@/data/config";
import { useLayoutEffect } from "react";

const JupiterTerminal = () => {
  useLayoutEffect(() => {
    (window as any).Jupiter.init({
      displayMode: "integrated",
      strictTokenList: false,
      integratedTargetId: "integrated-terminal",
      // 👇 REPLACE THIS WITH YOUR OWN HTTP PROVIDER ENDPOINT
      initialOutputMint: TOKEN_ADDRESS,
      endpoint:
        "https://mainnet.helius-rpc.com/?api-key=27e10c37-4efe-41d0-b99d-9c48503a65d2",
      formProps: {
        fixedOutputMint: false,
      },
    });
  }, []);

  return (
    <Card>
      <div id="integrated-terminal"></div>
    </Card>
  );
};

export default JupiterTerminal;
