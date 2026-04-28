import React from 'react';
import Image from 'next/image';

const VerifiedBadge = ({ size = 20, className = "" }) => {
  return (
    <div
      className={`relative inline-block align-middle ml-[5px] ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/verfied badge1.png"
        alt="Verified Badge"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default VerifiedBadge;
