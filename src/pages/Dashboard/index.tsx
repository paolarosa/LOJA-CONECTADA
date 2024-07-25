import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DashboardContainer } from "./styles";
import Card from "../../components/Card/Card";
import { Car, Dealer } from "../../types";


export const Dashboard = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [dealer, setDealer] = useState<Dealer | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/dealer/10/inventory/featured");
        console.log("Dados:", response.data[0].model);
        setCars(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
 const fetchDealerInfo = async () => {
      try {
        const response = await api.get("/dealer/10");
        setDealer(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do dealer:", error);
      }
    };

    fetchCars();
    fetchDealerInfo();
  }, []);

  return (
    <DashboardContainer>
      <div className="nav">
        <button className="buttonOut">Sair</button>
        <div>
          <button className="buttonAdd">Adicionar Contato</button>
          <button className="buttonDelete">Deletar Usuário</button>
        </div>
      </div>
      <div className="divMain">
          {dealer && (
          <div className="contactTitle">
            <img src={dealer.logo} alt="Logo" />
            <h2>
              Olá, <span style={{ fontWeight: "normal" }}>{dealer.name}</span>
            </h2>
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
          {cars.map((car) => (           
          <Card
            key={car.ad_id}
            id={car.ad_id}
            model={car.model[1]}
            year={car.model_year}
            price={car.price}
            images={car.photos.map(photo => photo.photo)}
          />
        ))}
        </ul>
        
        {/* <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => handleUpdateButtonClick(contact.id)}
            >
              <div>
                <img src={Profile} className="icon" />
                <h3>{contact.name}</h3>
              </div>
              <div>
                <img src={Email} className="icon" />
                <h3>{contact.email}</h3>
              </div>
              <div>
                <img src={Phone} className="icon" />
                <h3>{contact.phone}</h3>
              </div>
              <div>
                <button
                  className="delete"
                  data-contact-id={contact.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteButtonClick(e);
                  }}
                >
                  <img alt="" className="trash" src={Lixo} />
                  <h3>Remover Contato</h3>
                </button>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </DashboardContainer>
  );
};
export default Dashboard;
