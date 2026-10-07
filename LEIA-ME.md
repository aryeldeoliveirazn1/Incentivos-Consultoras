# Incentivos da Loja - como gerar o APK (celular) e o EXE (Windows)

## Jeito mais fácil (sem instalar nada): GitHub
1. Crie uma conta gratuita em github.com e um repositório novo (pode ser privado).
2. Envie TODOS os arquivos desta pasta para o repositório (botão "Add file > Upload files"; inclua a pasta .github).
3. Abra a aba "Actions" > "Gerar APK e EXE" > "Run workflow".
4. Em ~10 minutos, entre na execução concluída e baixe, em "Artifacts":
   - Incentivos-Android-APK  -> app-debug.apk (instale no celular; permita "fontes desconhecidas")
   - Incentivos-Windows-EXE  -> instalador e versão portátil (.exe)

## Editar os incentivos
- Em www/index.html, na lista INCENTIVOS_PADRAO no topo do script, e gere de novo o APK/EXE.

## No seu computador (opcional)
- Testar desktop: npm install && npm start
- EXE: npm run dist:win
- APK: npm install && npx cap add android && npx cap sync android (abra a pasta android no Android Studio > Build APK)

## iPhone / iPad
**Opção A (grátis e mais simples): instalar pelo Safari**
1. No repositório (precisa ser público): Settings > Pages > Source: "GitHub Actions". Depois rode a aba Actions > "Publicar site".
2. No iPhone, abra o endereço do site no **Safari** > Compartilhar > **Adicionar à Tela de Início**.
3. Funciona offline depois da primeira abertura.

**Opção B: arquivo .ipa (Incentivos-iOS-IPA em Artifacts)**
O .ipa sai sem assinatura. Para instalar é preciso Sideloadly ou AltStore (Apple ID grátis, o app expira em 7 dias e precisa reinstalar) ou uma conta Apple Developer paga (US$ 99/ano) para assinar e distribuir via TestFlight.

## Ícone do app
O ícone fica na pasta assets/ (icon-only.png, icon-foreground.png e icon-background.png, todos 1024x1024) e é aplicado automaticamente no APK/IPA. Para usar o ícone da sua loja, substitua esses arquivos (ou só icon-only.png + icon-background.png com uma cor/gradiente de fundo). No Windows, o ícone é build/icon.png (512x512).

## Lembretes (notificações no Android)
Segunda, quarta e sexta: aviso às 08:00 e outro às 15:30 (só se ainda não houver envio no dia). Para mudar dias e horários, edite a variável LEMB no topo do script em www/index.html. No primeiro uso o Android pede permissão de notificações. O botão "Testar aviso" (aba Histórico) dispara um aviso em 5 segundos.

## Config e cores
A aba "Config" liga/desliga os lembretes, faz backup/restauração e apaga os dados. As cores ficam nas variáveis --pr, --pr2 e --gold no topo do CSS em www/index.html (verde profundo, verde claro e dourado).

## Lojas e metas
As lojas e metas ficam em LOJAS (topo do script em www/index.html). Para mudar uma meta, edite os números em LOJAS = {"20129":mk(meta financeira, boleto médio, itens por boleto, tem boleto turbinado?)...}.

## Atualizar as metas todo mês (sem reinstalar o app)
1. No GitHub, abra o arquivo metas.json > ícone de lápis (Edit).
2. Troque o texto de "mes" e os números das metas (ponto como decimal, sem separador de milhares: 49623.66).
3. Clique em "Commit changes". Não mexa nos nomes dos incentivos (precisam ficar idênticos) nem apague vírgulas/aspas.
4. Os aparelhos pegam as novas metas na próxima vez que abrirem o app com internet (ou em Config > "Atualizar metas agora"). Sem internet, usam as últimas metas baixadas.
Os envios já salvos mantêm a meta da época em que foram feitos.
Requer repositório público (o app lê o arquivo em raw.githubusercontent.com).
