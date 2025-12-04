# Brainstorming de Design: Micro Invest Landing Page

**Público-alvo**: Gen Z (18-25 anos), alta renda/escolaridade, interessados em finanças mas intimidados.
**Objetivo**: Capturar e-mails para beta.
**Vibe**: Autêntica, "no bullshit", premium mas acessível, gamificada.

<response>
<text>
**Design Movement**: Neo-Brutalism meets Cyber-Minimalism
**Core Principles**:
1.  **Honestidade Radical**: Tipografia grande, alto contraste, sem esconder nada.
2.  **Gamificação Visual**: Elementos de UI que lembram interfaces de jogos (barras de progresso, badges 3D).
3.  **Profundidade Tátil**: Sombras duras (hard shadows) e bordas grossas, mas com cores vibrantes.
4.  **Foco no Conteúdo**: O texto é o herói.

**Color Philosophy**:
-   **Fundo**: Off-white ou cinza muito claro (#F5F5F5) para legibilidade máxima.
-   **Acento Principal**: "Electric Lime" (#CCFF00) ou "Acid Green" para evocar dinheiro digital e energia.
-   **Acento Secundário**: "Deep Violet" (#4B0082) para contraste e sofisticação.
-   **Texto**: Preto quase absoluto (#1A1A1A) para contraste máximo.
-   *Por que?*: Foge do azul "banco tradicional" e do verde "dinheiro velho". É digital-first.

**Layout Paradigm**:
-   **Bento Grid**: Seções organizadas em blocos modulares, responsivos e fáceis de escanear.
-   **Assimetria Controlada**: Títulos desalinhados propositalmente para quebrar a monotonia.

**Signature Elements**:
-   **Botões "Chunky"**: Botões com bordas grossas, sombras sólidas que "afundam" ao clicar.
-   **Stickers/Badges**: Elementos flutuantes como "Beta Access", "No BS", "100% Free" colados na tela.
-   **Micro-interações**: Hover states exagerados (crescer, mudar de cor drasticamente).

**Interaction Philosophy**:
-   Tudo deve parecer "clicável" e responsivo. Feedback tátil visual.

**Animation**:
-   **Entrance**: Elementos deslizam de baixo para cima com "spring" physics (efeito elástico).
-   **Scroll**: Parallax suave em elementos flutuantes.

**Typography System**:
-   **Display**: *Space Grotesk* ou *Syne* (personalidade forte, técnica).
-   **Body**: *Inter* ou *DM Sans* (legibilidade técnica, mas moderna).
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Design Movement**: Glassmorphism Ethereal (Dark Mode)
**Core Principles**:
1.  **Imersão Total**: Fundo escuro, elementos brilhantes, sensação de "futuro".
2.  **Transparência e Camadas**: Uso extensivo de blur e vidro fosco para hierarquia.
3.  **Luz como Guia**: Gradientes sutis que guiam o olho do usuário.

**Color Philosophy**:
-   **Fundo**: Preto profundo (#050505) ou Azul Meia-Noite (#0A0E17).
-   **Acento**: Gradientes de Ciano (#00FFFF) para Roxo Neon (#BC13FE).
-   **Texto**: Branco e cinza claro.
-   *Por que?*: Evoca tecnologia de ponta, cripto (sem ser scammy), e exclusividade.

**Layout Paradigm**:
-   **Centralizado e Fluido**: Conteúdo flutuando no centro, com muito respiro lateral.
-   **Single Column**: Foco total na narrativa, scroll vertical infinito.

**Signature Elements**:
-   **Cartões de Vidro**: Containers com background-blur e bordas finas semitransparentes.
-   **Glow Effects**: Brilhos atrás de elementos importantes (botões, títulos).

**Interaction Philosophy**:
-   Suave, etérea. Hover states são brilhos que se intensificam.

**Animation**:
-   **Slow Drift**: Elementos de fundo se movem lentamente.
-   **Fade In**: Conteúdo aparece suavemente conforme o scroll.

**Typography System**:
-   **Display**: *Clash Display* (elegante, mas moderna).
-   **Body**: *Satoshi* (geométrica, limpa).
</text>
<probability>0.05</probability>
</response>

<response>
<text>
**Design Movement**: Retro-Futurism / Y2K Clean
**Core Principles**:
1.  **Nostalgia Digital**: Estética do início dos anos 2000, mas polida para 2026.
2.  **Otimismo Tecnológico**: Cores claras, formas arredondadas, amigável.
3.  **Simplicidade Radical**: Poucos elementos, muito espaço em branco.

**Color Philosophy**:
-   **Fundo**: Branco puro (#FFFFFF).
-   **Acento**: Laranja Internacional (#FF4F00) e Azul Cobalto (#0047AB).
-   **Texto**: Azul Marinho Escuro.
-   *Por que?*: O laranja é energético e chama ação, o azul traz confiança. Combinação clássica mas vibrante.

**Layout Paradigm**:
-   **Split Screen**: Texto de um lado, visual do outro. Clássico e funcional.
-   **Grid Rígido**: Tudo alinhado, transmitindo estabilidade.

**Signature Elements**:
-   **Pixel Art (Sutil)**: Ícones ou detalhes em pixel art de alta resolução.
-   **Fontes Monospaced**: Uso de fontes de código para detalhes técnicos.

**Interaction Philosophy**:
-   Rápida, "snappy". Sem animações longas.

**Animation**:
-   **Glitch (Sutil)**: Pequenos efeitos de glitch em hover.
-   **Typewriter**: Texto sendo digitado.

**Typography System**:
-   **Display**: *Archivo Black* (pesada, impactante).
-   **Body**: *JetBrains Mono* ou *Roboto Mono* (técnica).
</text>
<probability>0.03</probability>
</response>

---

## Escolha Final: Neo-Brutalism meets Cyber-Minimalism (Opção 1)

**Justificativa**:
Para a Gen Z, especialmente o público de alta renda e escolaridade, a estética "banco tradicional" é chata e a estética "crypto dark mode" pode parecer suspeita/scam. O **Neo-Brutalismo** (suavizado) transmite autenticidade, transparência e modernidade. É uma estética que diz "não estamos escondendo nada nas letras miúdas". O uso de cores ácidas sobre fundo claro é tendência forte para 2026 e diferencia a marca no feed.

**Diretrizes de Implementação**:
-   **Fonte**: Space Grotesk (Títulos) + DM Sans (Corpo).
-   **Cores**: Fundo #FAFAFA, Texto #111111, Acento #CCFF00 (Lime), Secundário #6E44FF (Roxo Digital).
-   **UI**: Bordas de 2px pretas, sombras sólidas (4px 4px 0px #000), cantos levemente arredondados (6px).
-   **Imagens**: Mockups do app com sombras duras, elementos flutuantes 3D (moedas, gráficos) com estilo "clay" ou "matte".
