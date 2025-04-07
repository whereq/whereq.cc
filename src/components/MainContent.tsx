import { CryptoCurrencyModel } from "@models/models";
import { loadCryptoCurrenciesLocally } from "@utils/resourceLoader";
import { useEffect, useState } from "react";
import CryptoCurrencyCard from '@components/CryptoCurrencyCard';

export default function MainContent() {
    const [cryptoCurrencies, setCryptoCurrencies] = useState<CryptoCurrencyModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCryptoCurrencies = async () => {
            const cryptoCurrencies = await loadCryptoCurrenciesLocally();
            setCryptoCurrencies(cryptoCurrencies);
            setIsLoading(false);
        };
        fetchCryptoCurrencies();
    }, []);

    if (isLoading) {
        return (
            <div className="font-fira-code bg-gray-900 text-orange-400 flex items-center justify-center h-screen">
                <span className="text-lg">Loading crypto currencies...</span>
            </div>
        );
    }

    return (
        <main className="flex-1 overflow-auto p-4 bg-gray-800 text-orange-300 bg-primary-DEFAULT">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-accent-DEFAULT">Welcome to WhereQ --- Crypto Currency</h2>
                <p className="mb-4">This is your realm all about Crypto Currency</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cryptoCurrencies.map((crypto) => (
                        <CryptoCurrencyCard
                            key={crypto.symbol}
                            symbol={crypto.symbol}
                            name={crypto.name}
                            price={crypto.price}
                            change={crypto.change}
                            logo={crypto.logo}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}