import CryptoCurrencyLogo from '@components/CryptoCurrencyLogo';

export interface CryptoCurrencyCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  logo: string;
  className?: string;
}

export const CryptoCurrencyCard = ({
  symbol,
  name,
  price,
  change,
  logo,
  className = ''
}: CryptoCurrencyCardProps) => (
  <div
    className={`bg-secondary-dark bg-blue-900 p-4 rounded-lg 
                hover:shadow-xl transition-shadow hover:bg-secondary-darker ${className}`}
  >
    <div className="flex items-center space-x-3 mb-3">
      <CryptoCurrencyLogo
        src={logo}
        alt={name}
        size="md"
      />
      <div>
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-xs text-gray-400">{symbol}</p>
      </div>
    </div>

    <div className="flex justify-between items-end">
      <span className="text-lg font-bold text-white">
        {price}
      </span>
      <span className={`text-sm px-2 py-1 rounded ${
        change.startsWith('+') 
          ? 'bg-green-900/50 text-green-300' 
          : 'bg-red-900/50 text-red-300'
      }`}>
        {change}
      </span>
    </div>
  </div>
);

export default CryptoCurrencyCard;