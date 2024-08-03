import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "../../components/Card/Card";
import { Car, Dealer } from "../../types";
import whatsIcon from "../../assets/whatsapp.png";
import phoneIcon from "../../assets/phone.png";
import "./dashboard.tailwind.css";

export const Dashboard = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [dealer, setDealer] = useState<Dealer | null>(null);
  const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);
  const [models, setModels] = useState<{ id: number; name: string }[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [yearFrom, setYearFrom] = useState<string>("");
  const [yearTo, setYearTo] = useState<string>("");
  const dealerId = 10;

  const fetchCars = async (params: { [key: string]: any } = {}) => {
    try {
      const response = await api.get(`/dealer/${dealerId}/inventory/featured`, {
        params,
      });
      setCars(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados filtrados:", error);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const dealerResponse = await api.get(`/dealer/${dealerId}`);
        setDealer(dealerResponse.data);

        const brandsResponse = await api.get(
          `/dealer/${dealerId}/inventory/make/1`
        );
        setBrands(brandsResponse.data);

        fetchCars();
      } catch (error) {
        console.error("Erro ao buscar dados iniciais:", error);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrand) {
        try {
          const response = await api.get(
            `/dealer/${dealerId}/inventory/model/${selectedBrand}`
          );
          setModels(response.data);
        } catch (error) {
          console.error("Erro ao buscar modelos:", error);
        }
      } else {
        setModels([]);
      }
    };

    fetchModels();
  }, [selectedBrand]);

  useEffect(() => {
    const params: { [key: string]: any } = {
      make_id: selectedBrand,
    };
    if (selectedModel) params.model_id = selectedModel;
    if (yearFrom) params.year_from = yearFrom;
    if (yearTo) params.year_to = yearTo;

    fetchCars(params);
  }, [selectedBrand, selectedModel, yearFrom, yearTo]);

  const filteredCars = cars.filter((car) => {
    return (
      (!selectedBrand || car.manufacturer.id === parseInt(selectedBrand)) &&
      (!selectedModel || car.model.id === parseInt(selectedModel)) &&
      (!yearFrom || car.model_year >= parseInt(yearFrom)) &&
      (!yearTo || car.model_year <= parseInt(yearTo))
    );
  });

  return (
    <div className="dashboard-container">
      <div className="divMain">
        <div className="header">
          {dealer && (
            <div className="contactTitle">
              <img className="logo" src={dealer.logo} alt="Logo" />
              <div className="filters">
                <select
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    setSelectedModel("");
                  }}
                >
                  <option value="">Selecione a Marca</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedModel}
                  onChange={(e) => {
                    setSelectedModel(e.target.value);
                  }}
                  disabled={!selectedBrand}
                >
                  <option value="">Selecione o Modelo</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={yearFrom}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,4}$/.test(value)) {
                      setYearFrom(value);
                    }
                  }}
                  maxLength={4}
                  placeholder="Ano de"
                  max="9999"
                />
                <input
                  type="number"
                  value={yearTo}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,4}$/.test(value)) {
                      setYearTo(value);
                    }
                  }}
                  maxLength={4}
                  placeholder="Ano até"
                  max="9999"
                />
              </div>
              <div>
                {dealer.phones.map((phone, index) => (
                  <div className="number" key={index}>
                    {phone.is_whatsapp ? (
                      <img
                        src={whatsIcon}
                        alt="WhatsApp"
                        className="whatsapp-icon"
                      />
                    ) : (
                      <img src={phoneIcon} alt="Phone" className="phone-icon" />
                    )}
                    ({phone.ddd}) {phone.phone}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <ul>
          {filteredCars.map((car) => (
            <Card
              key={car.ad_id}
              id={car.ad_id}
              model={car.model.name}
              make={car.manufacturer.name}
              year={car.model_year}
              price={car.price}
              images={car.photos.map((photo) => photo.photo)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
