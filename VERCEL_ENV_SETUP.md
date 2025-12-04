# Configuração de Variáveis de Ambiente no Vercel

Para que a integração com MailerLite funcione corretamente, você precisa configurar as seguintes variáveis de ambiente no Vercel:

## Passos para configuração:

### 1. Acesse o Dashboard do Vercel
1. Vá para [vercel.com](https://vercel.com) e faça login
2. Selecione seu projeto `gohorse-landing`

### 2. Configure as Environment Variables
1. Vá em **Settings** > **Environment Variables**
2. Adicione as seguintes variáveis:

#### Produção:
```
MAILERLITE_API_KEY=sua_api_key_do_mailerlite_aqui
MAILERLITE_GROUP_ID=seu_group_id_aqui
```

**Importante:** Use `MAILCHIMP_` como prefixo (não `VITE_`) porque são variáveis do servidor.

### 3. Obtenha as credenciais do MailerLite
- **API Key**: https://dashboard.mailerlite.com/integrations/api
- **Group ID**: https://dashboard.mailerlite.com/groups (copie o ID da URL ou configurações)

### 4. Deploy
Após configurar as variáveis, faça o redeploy:
```bash
vercel --prod
```

## Como funciona agora:

1. **Frontend** → Faz requisição POST para `/api/subscribe`
2. **API Route** → Recebe a requisição e faz proxy para MailerLite
3. **MailerLite** → Processa a inscrição
4. **API Route** → Retorna resposta para o frontend

Isso resolve o problema de CORS porque todas as requisições externas são feitas pelo servidor, não pelo navegador.
