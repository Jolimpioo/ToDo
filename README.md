# 📝 ToDo App

Um aplicativo de lista de tarefas simples e funcional desenvolvido com React Native e Expo, permitindo que você gerencie suas tarefas diárias de forma prática e intuitiva.

## 🚀 Características

- ✅ Adicionar novas tarefas
- ✏️ Editar tarefas existentes
- 🗑️ Remover tarefas
- ☑️ Marcar tarefas como concluídas
- 💾 Persistência de dados local com AsyncStorage
- 📱 Interface responsiva e amigável
- 🎨 Design limpo e moderno

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **AsyncStorage** - Armazenamento local de dados
- **JavaScript/ES6+** - Linguagem de programação

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
npm install -g expo-cli
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Jolimpioo/ToDo.git
```

2. Entre no diretório do projeto:
```bash
cd ToDo
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 📱 Executando o Projeto

Para iniciar o aplicativo em modo de desenvolvimento:

```bash
npm start
# ou
yarn start
# ou
expo start
```

Isso abrirá o Expo Dev Tools no seu navegador. A partir daí, você pode:

- Escanear o QR code com o aplicativo **Expo Go** (disponível na [App Store](https://apps.apple.com/app/expo-go/id982107779) e [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent))
- Executar no emulador Android pressionando `a`
- Executar no simulador iOS pressionando `i` (apenas macOS)
- Executar no navegador pressionando `w`

## 📂 Estrutura do Projeto

```
ToDo/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React reutilizáveis
├── screens/         # Telas do aplicativo
├── App.js          # Componente principal
├── package.json    # Dependências e scripts
└── README.md       # Documentação do projeto
```

## 🎯 Funcionalidades Principais

### Adicionar Tarefa
Digite o nome da tarefa no campo de entrada e pressione o botão de adicionar para criar uma nova tarefa.

### Editar Tarefa
Toque no ícone de edição ao lado da tarefa para modificar seu texto.

### Concluir Tarefa
Marque a caixa de seleção para indicar que a tarefa foi concluída. Tarefas concluídas aparecem com texto riscado.

### Remover Tarefa
Toque no ícone de lixeira para excluir permanentemente uma tarefa da lista.

## 💡 Como Contribuir

Contribuições são sempre bem-vindas! Se você deseja contribuir com o projeto:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Jolimpioo**

- GitHub: [@Jolimpioo](https://github.com/Jolimpioo)

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
