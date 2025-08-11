import { useState, useCallback } from 'react';

export interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado?: string;
  erro?: boolean;
}

interface UseCepSearchReturn {
  searchHistory: AddressData[];
  isLoading: boolean;
  error: string;
  searchCep: (cep: string) => Promise<AddressData | null>;
  clearError: () => void;
  clearHistory: () => void;
}

// Estados brasileiros para conversão UF -> Nome completo
const ESTADOS: { [key: string]: string } = {
  'AC': 'Acre',
  'AL': 'Alagoas', 
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

export const useCepSearch = (): UseCepSearchReturn => {
  const [searchHistory, setSearchHistory] = useState<AddressData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Função para limpar CEP (remover hífen e caracteres especiais)
  const cleanCep = (cep: string): string => {
    return cep.replace(/\D/g, '');
  };

  // Função para validar CEP
  const isValidCep = (cep: string): boolean => {
    const cleaned = cleanCep(cep);
    return cleaned.length === 8 && /^\d{8}$/.test(cleaned);
  };

  // Função principal para buscar CEP
  const searchCep = useCallback(async (cep: string): Promise<AddressData | null> => {
    if (!isValidCep(cep)) {
      setError('CEP deve conter 8 dígitos');
      return null;
    }

    setIsLoading(true);
    setError('');

    try {
      const cleanedCep = cleanCep(cep);
      const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
      
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data: AddressData = await response.json();
      
      if (data.erro) {
        setError('CEP não encontrado');
        return null;
      }

      // Adicionar o nome completo do estado
      data.estado = ESTADOS[data.uf] || data.uf;

      // Adicionar ao histórico de buscas (evitando duplicatas)
      setSearchHistory(prev => {
        const exists = prev.some(item => item.cep === data.cep);
        if (!exists) {
          return [data, ...prev.slice(0, 9)]; // Manter apenas os 10 mais recentes
        }
        return prev;
      });

      return data;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Erro ao consultar CEP. Verifique sua conexão e tente novamente.');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback((): void => {
    setError('');
  }, []);

  const clearHistory = useCallback((): void => {
    setSearchHistory([]);
  }, []);

  return {
    searchHistory,
    isLoading,
    error,
    searchCep,
    clearError,
    clearHistory
  };
};