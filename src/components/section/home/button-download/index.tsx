"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const ButtonDownload: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDownload = () => {
    setLoading(true);

    const link = document.createElement("a");
    link.href = "./files/cv_azzam.pdf";
    link.download = "cv_azzam.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
      disabled={loading}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default ButtonDownload;
