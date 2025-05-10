
import React from 'react';
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import { Wallet, Link, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletConnectProps {
  variant?: "default" | "outline";
  className?: string;
}

const WalletConnect = ({ variant = "default", className }: WalletConnectProps) => {
  const { account, connect, disconnect, isConnecting, isConnected } = useWallet();

  // Format address to show first and last few characters
  const formatAddress = (address: string): string => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <>
      {!isConnected ? (
        <Button
          onClick={connect}
          variant={variant}
          className={cn("gap-2", className)}
          disabled={isConnecting}
        >
          <Wallet size={18} />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border border-medblue-200 text-medblue-600 bg-medblue-50 hover:bg-medblue-100"
          >
            <Link size={16} className="mr-2" />
            {formatAddress(account as string)}
          </Button>
          <Button variant="ghost" size="icon" onClick={disconnect} className="text-gray-500">
            <LogOut size={18} />
          </Button>
        </div>
      )}
    </>
  );
};

export default WalletConnect;
