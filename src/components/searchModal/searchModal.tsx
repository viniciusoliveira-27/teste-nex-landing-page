import React, { useState } from 'react';
import { X, MapPin, Loader2, Clock, Trash2 } from 'lucide-react';
import { useCepSearch, type AddressData } from '../../hooks';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [cep, setCep] = useState<string>('');
  const [currentAddress, setCurrentAddress] = useState<AddressData | null>(null);
  const { searchHistory, isLoading, error, searchCep, clearError, clearHistory } = useCepSearch();

  // Função para formatar CEP (adicionar hífen se necessário)
  const formatCep = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 5) return cleaned;
    return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`;
  };

  // Função para limpar CEP (remover hífen e caracteres especiais)
  const cleanCep = (value: string): string => {
    return value.replace(/\D/g, '');
  };

  // Função para validar CEP
  const isValidCep = (cep: string): boolean => {
    const cleaned = cleanCep(cep);
    return cleaned.length === 8 && /^\d{8}$/.test(cleaned);
  };

  // Função para buscar dados do CEP
  const handleSearchCep = async (): Promise<void> => {
    const result = await searchCep(cep);
    if (result) {
      setCurrentAddress(result);
    }
  };

  // Função para lidar com mudança no input de CEP
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const formatted = formatCep(value);
    if (formatted.length <= 9) { // 8 dígitos + 1 hífen
      setCep(formatted);
    }
    // Limpar erro quando usuário começar a digitar
    if (error) {
      clearError();
    }
  };

  // Função para lidar com submit do formulário
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    handleSearchCep();
  };

  // Função para resetar o modal
  const resetModal = (): void => {
    setCep('');
    setCurrentAddress(null);
    clearError();
  };

  // Função para fechar modal
  const handleClose = (): void => {
    resetModal();
    onClose();
  };

  // Função para nova pesquisa
  const handleNewSearch = (): void => {
    setCep('');
    setCurrentAddress(null);
    clearError();
  };

  // Função para selecionar endereço do histórico
  const handleSelectFromHistory = (address: AddressData): void => {
    setCurrentAddress(address);
    setCep(formatCep(address.cep));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header do Modal */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Buscar CEP</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Coluna Principal - Busca e Resultado */}
            <div className="lg:col-span-2 space-y-6">
              {/* Formulário de Busca */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-2">
                      Digite o CEP
                    </label>
                    <input
                      type="text"
                      id="cep"
                      value={cep}
                      onChange={handleCepChange}
                      placeholder="Ex: 03323-000 ou 03323000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={isLoading || !isValidCep(cep)}
                      className="cursor-pointer px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Buscando...
                        </>
                      ) : (
                        'Buscar'
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Dica de formatação */}
                <p className="text-xs text-gray-500">
                  💡 Digite apenas números ou com hífen (ex: 12345678 ou 12345-678)
                </p>
              </form>

              {/* Exibição de Erro */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}

              {/* Resultados da Busca */}
              {currentAddress && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-lime-500" />
                      Endereço Encontrado
                    </h3>
                    <button
                      onClick={handleNewSearch}
                      className="text-lime-600 hover:text-lime-700 text-sm font-medium px-3 py-1 rounded-md hover:bg-lime-50 transition-colors"
                    >
                      Nova Pesquisa
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* CEP */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CEP
                      </label>
                      <input
                        type="text"
                        value={currentAddress.cep}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>

                    {/* Logradouro */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Logradouro
                      </label>
                      <input
                        type="text"
                        value={currentAddress.logradouro}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>

                    {/* Complemento */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Complemento
                      </label>
                      <input
                        type="text"
                        value={currentAddress.complemento || 'Não informado'}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>

                    {/* Bairro */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bairro
                      </label>
                      <input
                        type="text"
                        value={currentAddress.bairro}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>

                    {/* Cidade */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cidade
                      </label>
                      <input
                        type="text"
                        value={currentAddress.localidade}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>

                    {/* UF */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        UF
                      </label>
                      <input
                        type="text"
                        value={currentAddress.uf}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>

                    {/* Estado - ocupa duas colunas */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Estado
                      </label>
                      <input
                        type="text"
                        value={currentAddress.estado || currentAddress.uf}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Informação sobre campos bloqueados */}
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-700 text-sm flex items-center gap-2">
                      🔒 Os campos acima são preenchidos automaticamente e estão bloqueados para edição.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Histórico de Buscas */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Histórico
                  </h4>
                  {searchHistory.length > 0 && (
                    <button
                      onClick={clearHistory}
                      className="text-red-500 hover:text-red-600 text-xs p-1 rounded hover:bg-red-50 transition-colors"
                      title="Limpar histórico"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {searchHistory.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-8">
                    Nenhuma busca realizada ainda
                  </p>
                ) : (
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {searchHistory.map((address, index) => (
                      <button
                        key={`${address.cep}-${index}`}
                        onClick={() => handleSelectFromHistory(address)}
                        className="w-full text-left p-3 bg-white rounded-lg hover:bg-lime-50 transition-colors border border-gray-200 hover:border-lime-200"
                      >
                        <p className="font-medium text-sm text-gray-900">{address.cep}</p>
                        <p className="text-xs text-gray-500 truncate">{address.logradouro}</p>
                        <p className="text-xs text-gray-500">{address.bairro}, {address.localidade} - {address.uf}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;