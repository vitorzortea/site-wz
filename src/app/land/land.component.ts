import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './land.component.html',
  styleUrl: './land.component.scss'
})
export class LandComponent {

  solucoes = [
    {
      id:1,
      title: 'Escritório Privativo',
      text: [
        'Nossos escritórios privativos oferecem o equilíbrio perfeito entre privacidade e a atmosfera colaborativa de um coworking. Com ambientes projetados para maximizar o conforto e a produtividade, esses espaços exclusivos são ideais para equipes que buscam concentração e eficiência, sem abrir mão das facilidades compartilhadas.',
        'Cada escritório é totalmente mobiliado, garantindo um espaço pronto para uso imediato. Além disso, você e sua equipe terão acesso a todas as comodidades do nosso espaço, como salas de reunião, áreas comuns, internet de alta velocidade e serviço de limpeza, tudo em um único pacote.',
        'Escolher um escritório privativo em nosso coworking é optar por flexibilidade e praticidade, com a possibilidade de expandir ou reduzir seu espaço conforme a necessidade do seu negócio.'
      ],
      list:[
        'Ambiente isolado e tranquilo',
        'Mobiliário confortável e ergonômico',
        'Internet de alta velocidade',
        'Acesso exclusivo',
        'Direito ao uso da sala de reunião',
      ],
      small:'Necessário conferir a disponibilidade.',
      buton:'#',
    },
    {
      id:2,
      title: 'Estações de trabalho',
      text: [
        'Nossas estações de trabalho são ideais para profissionais que buscam um ambiente dinâmico e funcional. Com um espaço individualizado em uma área compartilhada, você poderá se concentrar nas suas tarefas sem abrir mão do networking e da troca de ideias que fazem do coworking uma experiência única.',
        'Cada estação é equipada com uma mesa confortável e acesso a internet de alta velocidade, proporcionando o suporte necessário para o seu dia a dia. Além disso, você terá acesso a todas as áreas comuns, como salas de reunião, copa e lounge, garantindo que você tenha tudo o que precisa ao seu alcance.',
        'Escolher uma estação de trabalho em nosso coworking é a opção perfeita para quem valoriza flexibilidade e praticidade, com a liberdade de escolher o plano que melhor se adapta às suas necessidades profissionais.'
      ],
      list:[
        'Espaço compartilhado e funcional',
        'Mobiliário confortável e ergonômico',
        'Internet de alta velocidade',
        'Acesso a áreas comuns',
        'Suporte administrativo disponível',
      ],
      small:'Necessário conferir a disponibilidade.',
      buton:'#',
    },
    {
      id:3,
      title: 'Salas de Reuniões',
      text: [
        'Nossas salas de reuniões oferecem o ambiente ideal para encontros profissionais, apresentações ou sessões de brainstorming. Com espaços modernos e bem equipados, você terá à disposição tudo o que precisa para realizar reuniões produtivas e de impacto.',
        'As salas contam com tecnologia audiovisual, internet de alta velocidade e mobiliário confortável, garantindo que seus encontros ocorram de forma eficiente. Além disso, você pode reservar a sala de acordo com sua necessidade, seja para uma reunião rápida ou um dia inteiro de planejamento estratégico.',
        'Optar pelas nossas salas de reuniões é escolher praticidade e profissionalismo em um espaço que se adapta ao seu ritmo de trabalho, proporcionando a melhor experiência para você e sua equipe.'
      ],
      list:[
        'Locação por hora, turno ou diária',
        'Televisão para apresentações',
        'Mesa ampla para uma boa integração',
        'Sala climatizada',
        'Decoração elegante e acolhedora',
      ],
      small:'Necessário conferir a disponibilidade.',
      buton:'#',
    },
    {
      id:4,
      title: 'Escritório Virtual',
      text: [
        'Nosso Escritório Virtual é a solução perfeita para quem precisa de uma presença profissional sem a necessidade de um espaço físico permanente. Com este serviço, você terá acesso a um endereço comercial prestigiado, gestão de correspondências e serviços de suporte, tudo isso sem sair de casa.',
        'Ideal para profissionais autônomos, startups ou empresas que operam remotamente, o Escritório Virtual oferece flexibilidade total, permitindo que você foque no crescimento do seu negócio enquanto cuidamos da parte administrativa. Além disso, você poderá utilizar nossas salas de reunião e áreas comuns sempre que precisar de um espaço físico para reuniões importantes.',
        'Escolher o Escritório Virtual é optar por uma solução prática e econômica, com todos os benefícios de um coworking, mas com a liberdade de trabalhar de onde quiser.'
      ],
      list:[
        'zndereço empresarial e fiscal',
        'Gestão de correspondência',
        'Recepicionista',
        'Sala de Reunião',
        'Estações de trabalho',
      ],
      small:'Os itens vão variar de acordo com planos.',
      buton:'#',
    },
    {
      id:5,
      title: 'Aplicação Web interno',
      text: [
        'Nossa Aplicação Web Interna foi projetada para facilitar a gestão de agendamentos e a interação entre os membros do coworking. Com essa ferramenta, você poderá agendar salas de reuniões, estações de trabalho e escritórios individuais de forma rápida e prática, garantindo que sempre tenha o espaço ideal para suas atividades.',
        'Além de simplificar o agendamento, a aplicação promove a colaboração e o networking, permitindo que você interaja facilmente com sua equipe e outros membros do coworking. Assim, você pode aproveitar ao máximo o ambiente colaborativo, construindo conexões valiosas e fortalecendo sua rede de contatos.',
        'Optar pela nossa Aplicação Web Interna é garantir uma experiência fluida no coworking, com total controle sobre suas reservas e interações, tudo em um único lugar.'
      ],
      list:[
        'Agendamento de salas e estações',
        'Notificações de disponibilidade',
        'Chat integrado para networking',
        'Histórico de uso e relatórios',
        'Suporte direto pela aplicação web',
      ],
      small:'Sistema em construção',
      buton:'#',
    },
    {
      id:6,
      title: 'Aplicação Web interno.',
      text: [
        'O Certificado Digital é uma solução indispensável para empresas e profissionais que precisam de segurança e praticidade em suas operações online. Com ele, você pode assinar documentos eletronicamente, garantindo validade jurídica e autenticidade, além de realizar transações de maneira segura e eficiente.',
        'Ideal para quem busca otimizar processos e reduzir o uso de papel, o Certificado Digital oferece a confiança necessária para assinar contratos, emitir notas fiscais, e acessar sistemas de forma segura. Além disso, é uma ferramenta fundamental para proteger a identidade digital da sua empresa e cumprir com as exigências legais.',
        'Escolher o Certificado Digital é investir em tecnologia que traz agilidade e segurança para o seu negócio, permitindo que você foque no que realmente importa: o crescimento da sua empresa.'
      ],
      list:[
        'Emissão de certificados para pessoa física e jurídica',
        'Assinatura digital com validade jurídica',
        'Autenticação segura em plataformas online',
        'Renovação e gestão de certificados',
        'Suporte técnico especializado',
      ],
      small:'Integração com empresa tercerizada.',
      buton:'#',
    },
  ]
  index=0;
}
