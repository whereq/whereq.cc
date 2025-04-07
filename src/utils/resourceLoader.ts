import axios from "axios";
import yaml from "js-yaml";
import { CryptoCurrencyModel } from "@models/models"

import  CRYPTO_CURRENCY_YAML from "../resources/crypto_currency.yaml?raw";

export const loadCryptoCurrencies = async (url: string): Promise<CryptoCurrencyModel[]> => {
    try {
        const response = await axios.get(url);
        const data = yaml.load(response.data);
        return data as CryptoCurrencyModel[];
    } catch (error) {
        console.error("Error loading crypto currency:", error);
        return [];
    }
};

export const loadCryptoCurrenciesLocally = async (): Promise<CryptoCurrencyModel[]> => {
    try {
        const data = yaml.load(CRYPTO_CURRENCY_YAML);
        return data as [];
    } catch (error) {
        console.error("Error loading crypto currency:", error);
        return [];
    }
};