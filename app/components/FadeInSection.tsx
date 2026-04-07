import React from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string; // 👈 add this
};

const FadeInSection = ({ children, className = "" }: FadeInSectionProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default FadeInSection;