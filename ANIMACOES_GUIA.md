
# GUIA DE ANIMAÇÕES - GPTCode Site

## Resumo das Implementações

### 1. CSS Animations (animacoes.css)
Este arquivo contém todas as animações visuais suaves:

#### Fade-In Animations
- `.fade-in` - Desaparece e reaparece suavemente (0.8s)
- `.fade-in-slow` - Fade in mais lento (1.5s)
- `.fade-in-up` - Fade com movimento para cima
- `.fade-in-down` - Fade com movimento para baixo
- `.fade-in-left` - Fade com movimento para esquerda
- `.fade-in-right` - Fade com movimento para direita

#### Slide Animations
- `.slide-in-up` - Desliza de baixo para cima
- `.slide-in-left` - Desliza de esquerda para direita
- `.slide-in-right` - Desliza de direita para esquerda

#### Floating Animations (Principal para Cards)
- `.float` - Flutuação suave infinita (3.5s)
- `.float-slow` - Flutuação mais lenta (4s)
- `.card-float` - Flutuação específica para cards (4s)

#### Pulse & Glow
- `.pulse` - Pulso de escala (2.5s)
- `.pulse-soft` - Pulso suave (2s)
- `.glow` - Efeito de brilho ao redor (3s)

#### Outras Animações
- `.scale-in` - Entrada com escala
- `.rotate-360` / `.rotate-slow` - Rotação
- `.bounce` - Quique suave
- `.shimmer` - Efeito brilhante
- `.blink` - Piscar
- `.typing` - Efeito de digitação

#### Page Transitions
- `.page-enter` - Entrada de página (0.6s)
- `.page-exit` - Saída de página (0.4s)

#### Stagger Delays
Use com `.stagger-1`, `.stagger-2`, `.stagger-3`, `.stagger-4`, `.stagger-5` para atrasar animações

### 2. Enhancements CSS (enhancements.css)
Efeitos visuais complementares:

- **Ripple Effect**: Clique em botões gera onda
- **Button Enhancements**: Botões levantam ao hover
- **Link Animations**: Links com underline animado
- **Card Hover Effects**: Brilho ao passar mouse
- **Smooth Scrollbar**: Scrollbar estilizado
- **Focus States**: Estados de foco para acessibilidade
- **Navbar Animations**: Navbar com linha ao hover
- **Form Animations**: Inputs com efeito no foco
- **Footer Content Animations**: Footer com fade animado
- **Hover Lift Effect**: Levanta elementos ao hover
- **Shine Effect**: Brilho passando pelo elemento

### 3. JavaScript Animations (transitions.js)
Controla animações dinâmicas:

#### Transições de Página
- Fade-out ao clicar em links internos
- Fade-in automático ao carregar página
- Animação suave entre páginas

#### Scroll Animations
- Elementos aparecem com fade ao scrollar
- Observation de elementos `.card`, `.info-item`, `.contact-info-card`
- Suporta atributo `data-scroll-animation`

#### Setup Automático
- Animação de cards flutuantes
- Animação de social links
- Animação de títulos
- Animação de buttons com ripple

#### Funcionalidades Adicionais
- `window.revealElement(selector, animationType)` - Anima elemento manualmente
- Navbar com shadow ao scroll
- Stagger animations para listas

## Como Usar

### Adicionar Animação a um Elemento

#### Via Classe CSS
```html
<!-- Fade-in suave -->
<div class="fade-in">Conteúdo aqui</div>

<!-- Cards flutuando -->
<div class="card card-float">Card flutuando</div>

<!-- Botão com efeito ripple -->
<button class="btn btn-primary">Clique em mim</button>
```

#### Via Atributo de Scroll
```html
<!-- Anima quando aparece na tela -->
<div data-scroll-animation="fade-in-up">Animará ao scrollar</div>
```

#### Via JavaScript Manual
```javascript
// Anima elemento manualmente
revealElement('.my-element', 'fade-in-up');

// Ou especificar tipo diferente
revealElement('#my-id', 'slide-in-left');
```

### Animações Automáticas

Estes elementos animam AUTOMATICAMENTE:
- **Todos os `.card`** - Card float + hover lift
- **Todos os `.info-item`** - Fade in + hover lift
- **Todos os `.contact-info-card`** - Fade in + hover lift
- **Social links** - Pulse soft
- **Todos os títulos (h1-h3)** - Fade in down com stagger
- **Navbar links** - Underline animation
- **Botões** - Ripple + hover lift

## Timing das Animações

- **Rápidas (0.3s)**: Hover effects, transitions
- **Médias (0.6-0.8s)**: Fade-in, page-enter
- **Lentas (1.5-4s)**: Float, scroll animations
- **Infinitas**: Float, pulse, glow (loop contínuo)

## Cores e Estilo

### Cores Principais
- Dark Blue: #0b193e
- Medium Blue: #427aa1
- Light Blue: #a5c9e0
- Accent Gold: #6c757d

### Efeito de Glow
Usa rgba(108, 204, 255, ...) para brilho azul

## Personalizações Fáceis

### Mudar velocidade de animação
```css
.card-float {
  animation: cardFloat 6s cubic-bezier(...) infinite; /* De 4s para 6s */
}
```

### Adicionar novo efeito
```css
@keyframes myCustom {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.my-custom-animation {
  animation: myCustom 0.8s ease-out;
}
```

### Desabilitar animações para usuários
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
/* Já incluído em enhancements.css */
```

## Suporte a Navegadores

- **Chrome/Edge**: 100% suporte
- **Firefox**: 100% suporte
- **Safari**: 95% suporte (algumas transforms)
- **Internet Explorer**: Não suportado

## Performance

- Animações usam `transform` e `opacity` (otimizadas)
- Evitam `top`, `left`, `width`, `height` (causam reflow)
- Usam `will-change` implicitamente
- GPU acceleration automática

## Debugging

Para ver quais animações estão ativas:
1. Abrir DevTools (F12)
2. Ir em Elements
3. Inspeccionar elemento
4. Ver classes aplicadas e CSS
5. Desabilitar classes para teste

## Exemplo Completo

```html
<!-- Navbar com animations -->
<nav class="navbar">
  <a href="projetos.html" class="nav-link">Projetos</a>
  <!-- Link automaticamente anima transição de página -->
</nav>

<!-- Section com cards flutuando -->
<section>
  <h2 class="section-title fade-in-down">Nossos Projetos</h2>
  
  <div class="row">
    <div class="col-md-6">
      <div class="card card-float">
        <!-- Flutuará infinitamente e levantará ao hover -->
        <img src="..." class="card-img-top">
        <div class="card-body">
          <h5>Projeto 1</h5>
          <p>Descrição do projeto</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer com animations -->
<footer>
  <h5>Conecte-se</h5>
  <a href="#" class="social-link">GitHub</a>
  <!-- Social links pulsam suavemente -->
</footer>
```

## Próximas Melhorias

Possíveis expansões futuras:
- Parallax scroll
- 3D transforms
- SVG animations
- Lottie animations
- Gesture animations (mobile)
- WebGL effects

---

**Última atualização**: Novembro 2025
**Versão**: 1.0
