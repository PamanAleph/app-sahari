// src/app/(main)/friends/page.tsx
import PackageCard from '@/components/friends/PackageCard';
import React from 'react';

// Data dummy untuk kartu paket dengan benefits
const packageData = [
  { 
    title: "SAHABAT", 
    description: "paket wibu akut", 
    price: 49900,
    benefits: [
      "Discuss pagi",
      "Discuss Siang",
      "Enable voice and videocall",
      "Discuss Sore"
    ]
  },
  { 
    title: "TEMAN", 
    description: "paket santai", 
    price: 29900,
    benefits: [
      "Discuss pagi",
      "Enable voice call",
      "Discuss Siang"
    ]
  },
  { 
    title: "SAKTI", 
    description: "paket sakti max", 
    price: 69900,
    benefits: [
      "Discuss pagi",
      "Discuss Siang",
      "Discuss Sore",
      "Unlimited voice call"
    ]
  },
  { 
    title: "EXTRA", 
    description: "paket all-in-one", 
    price: 99900,
    benefits: [
      "Discuss pagi",
      "Discuss Siang",
      "Discuss Sore",
      "Enable voice and videocall",
      "24/7 support"
    ]
  },
  { 
    title: "HEMAT", 
    description: "paket irit", 
    price: 19900,
    benefits: [
      "Discuss pagi",
      "Discuss Siang"
    ]
  },
  { 
    title: "SUPER", 
    description: "paket super", 
    price: 89900,
    benefits: [
      "Discuss pagi",
      "Discuss Siang",
      "Enable voice and videocall",
      "Discuss Sore",
      "Priority support"
    ]
  },
];

export default function Page() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        {packageData.map((pkg, index) => (
          <PackageCard 
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            benefits={pkg.benefits} // Pass the benefits array
          />
        ))}
      </div>
    </div>
  );
}
