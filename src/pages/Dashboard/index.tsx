import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "./styles";
import { AuthContext } from "../../providers/AuthProvider";
import ContactModal from "../../components/modal";
import Card from "../../components/Card/Card";
//import { ProductsList } from "../../components/ProductsList/ProductsList";

/*interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}*/
interface Car {
  ad_id: number;
  title: string;
  description: string;
  photos: { url: string }[];
}

export const Dashboard = () => {
  //const navigate = useNavigate();
  //const [contacts, setContacts] = useState<Contact[]>([]);
  //const { client } = useContext(AuthContext);
  const [cars, setCars] = useState<Car[]>([]);

  /*useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get<Contact[]>("contacts");
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContacts();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const openModal = (contact: Contact | null = null) => {
    setSelectedContact(contact || null);
    setIsModalOpen(true);
  };
   const closeModal = () => {
    setIsModalOpen(false);
  };
   const handleAddContact = (newContact: Contact) => {
    api
      .post("contacts", newContact)
      .then((response) => {
        console.log("Novo contato adicionado:", response.data);
        const updatedContacts = [...contacts, response.data];
        setContacts(updatedContacts);
        closeModal();
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao adicionar o contato", error);
      });
  };

  const handleDeleteContact = (contactId: string) => {
    api
      .delete(`contacts/${contactId}`)
      .then((response) => {
        console.log("Contato removido com sucesso!", response.data);
        const updatedContacts = contacts.filter(
          (contact) => contact.id !== contactId
        );
        setContacts(updatedContacts);
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao remover o contato", error);
      });
  };

  const handleDeleteButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const contactId = event.currentTarget.getAttribute("data-contact-id");
    if (contactId) {
      handleDeleteContact(contactId);
    }
  };

  const handleDeleteUser = () => {
    console.log(client?.id);
    api
      .delete(`clients/${client?.id}`)
      .then((response) => {
        console.log("Usuário excluído com sucesso!", response.data);
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao excluir o usuário", error);
      });
  };

  const handleUpdateContact = (updatedContact: Contact) => {
    if (!selectedContact) {
      return;
    }

    api
      .patch(`contacts/${selectedContact.id}`, updatedContact)
      .then((response) => {
        console.log("Contato atualizado:", response.data);
        const updatedContacts = contacts.map((contact) =>
          contact.id === selectedContact.id ? response.data : contact
        );
        setContacts(updatedContacts);
        setSelectedContact(null);
        closeModal();
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao atualizar o contato", error);
      });
  };

  const handleUpdateButtonClick = (contactId: string) => {
    const contactToUpdate = contacts.find(
      (contact) => contact.id === contactId
    );
    if (contactToUpdate) {
      openModal(contactToUpdate);
    }
  };

 
  */

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/dealer/10/inventory/featured");
        console.log("Dados da API:", response.data);
        console.log("Resposta da API:", response.data[0].title);
        setCars(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchCars();
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
        <div className="contactTitle">
          <h2>
            Olá, <span style={{ fontWeight: "normal" }}></span>
            <span style={{ fontWeight: "bold" }}>Paola</span>
          </h2>
          <p>Email: </p>
          <p>Telefone:</p>
        </div>
        <h2 className="title">Seus Contatos:</h2>
        {cars.map((car) => (
          <Card
            key={car.ad_id}
            title={car.title}
            description={car.description}
            imageUrl={car.photos[0]?.url || "placeholder.jpg"}
          />
        ))}
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
