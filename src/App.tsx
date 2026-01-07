import { useState } from 'react'
import './App.css'

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

function App() {
  const [stocks] = useState<Stock[]>([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.5 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800.00, change: -1.2 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 300.50, change: 0.8 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 250.75, change: 5.0 },
  ]);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Stock Dashboard</h1>
      </header>
      <main className="main">
        <div className="stock-list">
          {stocks.map(stock => (
            <div key={stock.symbol} className="stock-card">
              <h2>{stock.symbol}</h2>
              <p>{stock.name}</p>
              <p className="price">${stock.price.toFixed(2)}</p>
              <p className={`change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                {stock.change >= 0 ? '+' : ''}{stock.change}%
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
