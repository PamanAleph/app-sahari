import React from "react";

export default function AccountSkeleton() {
  return (
    <div className="animate-pulse flex items-center px-8 py-4 border-b border-[#262626] bg-[#0D0D0D]">
      <div className="rounded-full bg-gray-700 h-14 w-14"></div>
      <div className="ml-6">
        <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
        <div className="h-3 bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  );
}
