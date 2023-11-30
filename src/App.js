import React from 'react';
import './App.css'
import PriceCard from './components/pricecard'

function App() {
  const priceCardData = [
    {
      plan: 'FREE',
      price:'0/month',
      features: ['✔	Single User','✔	50GB Storage','✔ Unlimited Public Projects','✔ Community Access','𐄂 Unlimited Private Projects','𐄂 Dedicated Phone Support','𐄂 Free Subdomain','𐄂	Monthly Status Reports'],
    },
    {
      plan: 'PLUS',
      price:'9/month',
      features: ['✔	5 Users','✔	50GB Storage', '✔	Unlimited Public Projects','✔	Community Access','✔	Unlimited Private Projects','✔	Dedicated Phone Support','✔	Free Subdomain','𐄂	Monthly Status Reports'],
    },
    {
      plan: 'PRO',
      price:'49/month' ,
      
      features: ['✔	Unlimited Users','✔	50GB Storage', '✔	Unlimited Public Projects', '✔	Community Access','✔	Unlimited Private Projects','✔	Dedicated Phone Support','✔	Free Subdomain','✔	Monthly Status Reports'],
    },
  ];

  return (
    <div className="App">
      {priceCardData.map((data, index) => (
        <PriceCard key={index} plan={data.plan} price={data.price} features={data.features} />
      ))}
    </div>
  );
}

export default App;