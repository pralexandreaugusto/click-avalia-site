# Click Avalia — Bio Site / Landing page

Landing page responsiva para apresentar e vender placas NFC + QR Code para facilitar o acesso ao link de avaliação de negócios no Google.

## Arquivos

- `index.html` — conteúdo e estrutura da página
- `styles.css` — identidade visual escura, cores vibrantes e responsividade
- `script.js` — botões de WhatsApp, menu mobile e perguntas frequentes
- `config.js` — número comercial e configuração da marca
- `assets/favicon.svg` — ícone do site

## Antes de publicar

1. Abra `config.js`.
2. Confirme `whatsappNumber`. Use somente dígitos no formato internacional: código do país + DDD + número. O valor atual (`554333286272`) foi montado a partir do número informado e precisa ser confirmado como um número ativo no WhatsApp.
3. Revise o conteúdo e confirme que a placa física e os recursos anunciados correspondem ao produto que será vendido.
4. Se tiver um link de avaliação do Google de demonstração, use-o somente em imagens/demonstrações identificadas; o destino real de cada placa deve ser configurado para o negócio do cliente.

## Publicar com GitHub + Vercel

### 1. Enviar ao GitHub

- Crie um repositório novo no GitHub, por exemplo `click-avalia-site`.
- Envie todos os arquivos desta pasta para a raiz do repositório (não envie apenas a pasta `assets`).

Se já tiver Git instalado, no terminal dentro desta pasta:

```bash
git init
git add .
git commit -m "Cria landing page Click Avalia"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/click-avalia-site.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu usuário real do GitHub.

### 2. Importar na Vercel

- Entre em https://vercel.com/new
- Conecte sua conta GitHub, se solicitado.
- Importe o repositório `click-avalia-site`.
- Como é um site estático, não precisa de framework nem de comando de build. Se pedir configurações, deixe Framework Preset como `Other`, Build Command vazio e Output Directory como `.`.
- Clique em Deploy.

### 3. Atualizações

Quando fizer alterações e enviá-las à branch `main`, a Vercel gera uma nova implantação automaticamente.

## Testar localmente

Abra `index.html` no navegador. Para testar de forma mais próxima de um servidor, rode na pasta:

```bash
python3 -m http.server 8080
```

Depois acesse http://localhost:8080.

## Notas de conteúdo e conformidade

O site não promete número de avaliações, aumento garantido da nota ou posicionamento no Google. A placa facilita o acesso; cada cliente decide livremente se quer publicar uma avaliação honesta. Não ofereça incentivos em troca de avaliações nem filtre clientes para solicitar somente avaliações positivas.
