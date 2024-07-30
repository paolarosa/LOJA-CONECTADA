import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DashboardContainer } from "./styles";
import Card from "../../components/Card/Card";
import { Car, Dealer } from "../../types";

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
      console.log("Parâmetros de chamada de API:", params); // Log dos parâmetros da chamada
      const response = await api.get(`/dealer/${dealerId}/inventory/featured`, {
        params,
      });
      console.log("Carros recebidos:", response.data); // Log dos carros recebidos
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
          console.log("Marca selecionada no select:", selectedBrand);
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

    console.log("Parâmetros de filtro antes da chamada:", params); // Log dos parâmetros de filtro
    fetchCars(params);
  }, [selectedBrand, selectedModel, yearFrom, yearTo]);

  // Filtra os carros com base nos filtros selecionados
  const filteredCars = cars.filter((car) => {
    //  console.log(`Verificando carro ${car.ad_id}: Ano ${car.model_year}`);
    return (
      (!selectedBrand || car.manufacturer.id === parseInt(selectedBrand)) &&
      (!selectedModel || car.model.id === parseInt(selectedModel)) &&
      (!yearFrom || car.model_year >= parseInt(yearFrom)) &&
      (!yearTo || car.model_year <= parseInt(yearTo))
    );
  });

  console.log("Lista filtrada de carros:", filteredCars); // Log lista filtrada de carros

  return (
    <DashboardContainer>
      <div className="filters">
        <select
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            setSelectedModel("");
            // console.log("Marca selecionada no select:", e.target.value); // Log da marca selecionada no select
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
            //console.log("Modelo selecionado no select:", e.target.value);
          }}
          disabled={!selectedBrand} // Desabilitar se nenhuma marca for selecionada
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
              console.log("Ano de (yearFrom) selecionado:", value); // Log do ano de
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
              console.log("Ano até (yearTo) selecionado:", value); // Log do ano até
            }
          }}
          maxLength={4}
          placeholder="Ano até"
          max="9999"
        />
      </div>
      <div className="divMain">
        {dealer && (
          <div className="contactTitle">
            <img src={dealer.logo} alt="Logo" />

            <div>
              {dealer.phones.map((phone, index) => (
                <p key={index}>
                  Telefone: ({phone.ddd}) {phone.phone}{" "}
                  {phone.is_whatsapp && <span>(WhatsApp)</span>}
                </p>
              ))}
            </div>
          </div>
        )}
        <h2 className="title">Seus Contatos:</h2>
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
    </DashboardContainer>
  );
};

export default Dashboard;

// import { useEffect, useState } from "react";
// import { api } from "../../services/api";
// import { DashboardContainer } from "./styles";
// import Card from "../../components/Card/Card";
// import { Car, Dealer } from "../../types";

// export const Dashboard = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [dealer, setDealer] = useState<Dealer | null>(null);
//   const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);
//   const [models, setModels] = useState<{ id: number; name: string }[]>([]);
//   const [selectedBrand, setSelectedBrand] = useState<string>("");
//   const [selectedModel, setSelectedModel] = useState<string>("");
//   const [yearFrom, setYearFrom] = useState<string>("");
//   const [yearTo, setYearTo] = useState<string>("");
//   const dealerId = 10;

//   const fetchCars = async (params: { [key: string]: any } = {}) => {
//     try {
//       console.log("CARROS parâmetros:", params); // Log dos parâmetros da chamada
//       const response = await api.get(`/dealer/${dealerId}/inventory/featured`, {
//         params,
//       });
//       console.log("Carros recebidos:", response.data); // Log dos carros recebidos
//       setCars(response.data);
//     } catch (error) {
//       console.error("Erro ao buscar dados filtrados:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         const dealerResponse = await api.get(`/dealer/${dealerId}`);
//         setDealer(dealerResponse.data);
//         const brandsResponse = await api.get(
//           `/dealer/${dealerId}/inventory/make/1`
//         );
//         setBrands(brandsResponse.data);
//         fetchCars();
//       } catch (error) {
//         console.error("Erro ao buscar dados iniciais:", error);
//       }
//     };

//     fetchInitialData();
//   }, []);

//   useEffect(() => {
//     const fetchModels = async () => {
//       if (selectedBrand) {
//         try {
//           console.log("Marca selecionada no select:", selectedBrand);
//           const response = await api.get(
//             `/dealer/${dealerId}/inventory/model/${selectedBrand}`
//           );
//           setModels(response.data);
//         } catch (error) {
//           console.error("Erro ao buscar modelos:", error);
//         }
//       } else {
//         setModels([]);
//       }
//     };

//     fetchModels();
//   }, [selectedBrand]);

//   useEffect(() => {
//     // Utilize uma função interna para lidar com o filtro
//     const handleFilterChange = () => {
//       const params: { [key: string]: any } = {};

//       if (selectedBrand) params.make_id = selectedBrand;
//       if (selectedModel) params.model_id = selectedModel;
//       if (yearFrom) params.year_from = yearFrom;
//       if (yearTo) params.year_to = yearTo;

//       console.log("Parâmetros de filtro no useEffect:", params); // Log dos parâmetros de filtro
//       fetchCars(params);
//     };

//     handleFilterChange(); // Chama o filtro sempre que qualquer dependência muda
//   }, [selectedBrand, selectedModel, yearFrom, yearTo]);
//   return (
//     <DashboardContainer>
//       <div className="nav">
//         <button className="buttonOut">Sair</button>
//         <div>
//           <button className="buttonAdd">Adicionar Contato</button>
//           <button className="buttonDelete">Deletar Usuário</button>
//         </div>
//       </div>
//       <div className="filters">
//         <select
//           value={selectedBrand}
//           onChange={(e) => {
//             setSelectedBrand(e.target.value);
//             setSelectedModel(""); // Resetar o modelo selecionado quando a marca muda
//           }}
//         >
//           <option value="">Selecione a Marca</option>
//           {brands.map((brand) => (
//             <option key={brand.id} value={brand.id}>
//               {brand.name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={selectedModel}
//           onChange={(e) => setSelectedModel(e.target.value)}
//           disabled={!selectedBrand} // Desabilitar se nenhuma marca for selecionada
//         >
//           <option value="">Selecione o Modelo</option>
//           {models.map((model) => (
//             <option key={model.id} value={model.id}>
//               {model.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number"
//           value={yearFrom}
//           onChange={(e) => setYearFrom(e.target.value)}
//           placeholder="Ano de"
//           max="9999"
//         />
//         <input
//           type="number"
//           value={yearTo}
//           onChange={(e) => setYearTo(e.target.value)}
//           placeholder="Ano até"
//           max="9999"
//         />
//       </div>
//       <div className="divMain">
//         {dealer && (
//           <div className="contactTitle">
//             <img src={dealer.logo} alt="Logo" />
//             <h2>
//               Olá, <span style={{ fontWeight: "normal" }}>{dealer.name}</span>
//             </h2>
//             <div>
//               {dealer.phones.map((phone, index) => (
//                 <p key={index}>
//                   Telefone: ({phone.ddd}) {phone.phone}{" "}
//                   {phone.is_whatsapp && <span>(WhatsApp)</span>}
//                 </p>
//               ))}
//             </div>
//           </div>
//         )}
//         <h2 className="title">Seus Contatos:</h2>
//         <ul>
//           {cars.map((car) => (
//             <Card
//               key={car.ad_id}
//               id={car.ad_id}
//               model={car.model.name}
//               make={car.manufacturer.name}
//               year={car.model_year}
//               price={car.price}
//               images={car.photos.map((photo) => photo.photo)}
//             />
//           ))}
//         </ul>
//       </div>
//     </DashboardContainer>
//   );
// };

// export default Dashboard;
