# Weather Checker

Este projeto é uma aplicação web que consome uma API para verificar as condições climáticas atuais de qualquer localidade. O objetivo é criar uma ferramenta funcional para consultar o clima em tempo real, exibindo informações detalhadas sobre temperatura, vento, e condições meteorológicas.

## Descrição

O projeto permite ao usuário buscar informações climáticas de qualquer cidade, exibindo a temperatura atual, a velocidade e direção do vento, e um ícone representando o estado do tempo. A interface é responsiva e utiliza HTML, CSS e JavaScript.

Você pode visualizar o projeto <a href="https://arthurdevleal.github.io/weather-checker/" target="_blank">neste link</a>.

## Funcionalidades

- **Consulta de Clima Atual**: Mostra a temperatura, velocidade do vento e direção do vento em tempo real.
- **Ícone de Condição Climática**: Exibe um ícone representando o estado do tempo.
- **Mensagens de Carregamento e Erro**: Notifica o usuário enquanto os dados estão sendo carregados ou se a cidade não for encontrada.

## Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/ArthurDevLeal/weather-checker.git
   ```

2. **Navegue para o diretório do projeto**
   ```bash
   cd weather-checker
   ```

3. **Abra o arquivo `index.html` em seu navegador para visualizar o projeto.**

   Não há necessidade de instalação adicional, já que todos os arquivos necessários estão incluídos.

## Estrutura dos Arquivos

- `index.html`: Estrutura HTML da aplicação.
- `style.css`: Estilos CSS para a interface.
- `script.js`: Lógica JavaScript para realizar a busca e atualizar a interface com os dados climáticos.

## API Utilizada

Este projeto utiliza a API do OpenWeatherMap para obter dados climáticos em tempo real. A API do OpenWeatherMap fornece uma ampla gama de informações meteorológicas, incluindo:

- **Temperatura Atual**: Dados em Kelvin, que são convertidos para Celsius no projeto.
- **Condições Meteorológicas**: Descrição e ícone representando o estado do tempo.
- **Vento**: Velocidade e direção do vento.
- **Localização**: Nome da cidade e país.

### Como Utilizar a API

Para utilizar a API do OpenWeatherMap, você precisará de uma chave de API. Siga os passos abaixo:

1. **Registre-se no OpenWeatherMap**: Crie uma conta em [OpenWeatherMap](https://openweathermap.org/) e obtenha sua chave de API.
2. **Substitua a Chave de API no Código**: No arquivo `script.js`, substitua `let API_key = "your_api_key_here";` pela sua chave de API.

Exemplo de URL de requisição à API:
```javascript
let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_key}`);
```

## Créditos

- **HTML, CSS e JavaScript**: Desenvolvidos por Arthur Leal Fernandes.

## Como Contribuir

Se desejar contribuir para este projeto, por favor, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie a branch para o repositório remoto (`git push origin minha-nova-feature`).
5. Crie uma Pull Request.

## Licença

Este projeto é licenciado sob a licença [MIT](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para me contatar.

- **Email**: arthurDevLeal@gmail.com
