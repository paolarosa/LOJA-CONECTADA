# Project Car Showcase

![](https://img.shields.io/badge/ReactJS-blue.svg)
![](https://img.shields.io/badge/Taillwindcss-blue.svg)
![](https://img.shields.io/badge/TypeScript-blue.svg)

O projeto eh um sistema para listagem de veiculos anunciados por uma loja. 

O sistema possui 2 paginas:

- index: uma pagina para listar todos veiculos encontrados na loja

- detail: pagina para abrir o detalhe do veiculo

## Orientacoes

Precisamos que seja desenvolvida a pagina index e detail do sistema. Os detalhes de cada pagina estao descritos abaixo, junto com um possivel design, esse design pode ser alterado por voce sem problemas.

Todos endpoints da API estao descrito abaixo na secao API. O token para acessar a API sera enviado para seu email.

Abra uma branch com a estrutura de nome: feature/<seu-nome>, apos o termino abra um Pull Request para esse repositorio.


## Paginas

### Index

Pagina inicial do sistema, ela carrega uma "X" quantidade de veiculos disponiveis na loja. A pagina possui 3 filtros para o usuario encontrar o veiculo desejado. ( ver a imagem page-inventory-index.png ) 

Filtros:

- Marca

- Modelo

- Ano de e ano ate


Os filtros de Marca e Modelo sao combos (select) carregados atraves de um endpoint na API. Quando o usuario escolhe uma marca dispara-se um evento para popular os modelos correspondentes (cascading).

Ano de e Ano Ate sao campos do input com type="numeric", devem aceitar no maximo 4 digitos. 

Acoes do filtro:

Ao alterar qualquer valor de um dos filtros, deve-ser disparar uma consulta a API para realizar a requisicao e retornar os dados conforme os filtros informados.


 

### Detail

Pagina para mostrar os detalhes do anuncio. ( ver a imagem page-detail.png ) 


## Stack recomendada

- ReactJs

- TaillwindCSS

- Typescript

- Axios

## Bonus point

Usando as tecnologias abaixo, isso garante a voce bonus point na avaliacao:

- Redux

- Testes Unitarios

- Docker e docker compose pronto para criar image e rodar container

- Github actions pipeline ( pode fazer o deploy no ambiente em que se sentir mais confortavel )


## API

URL Base: https://api-site.lojaconectada.com.br/v2

URL Swagger: https://api-site.lojaconectada.com.br/v2/docs/

Token: sera enviado por email

Autenticacao: Authorization: Token <Token>

### Endpoints

Pegar dados da loja: /dealer/<dealer_id>

Amostra do estoque: /dealer/<dealer_id>/inventory/featured

Marcas: /dealer/<dealer_id>/inventory/make/1  ( valor 1 eh o codigo para categoria carros )

Modelos: dealer/<dealer_id>/inventory/model/<make_id>

Detail: /inventory/<ad_id>
