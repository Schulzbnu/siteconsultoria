import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  BarChart3,
  Target,
  Users,
  Zap,
  Shield,
  MessageSquare,
  Instagram,
  Mail,
  MapPin,
  Menu,
  X,
  Lightbulb,
  ChevronDown as ChevronIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/professional_consulting_meeting_scene.png";
import { applySeoTags } from "@/lib/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const whatsappMessage = "Olá, vim do site e gostaria de agendar uma conversa.";
const whatsappLink = `https://wa.me/554797042590?text=${encodeURIComponent(whatsappMessage)}`;
const instagramLink = "https://instagram.com/schulz.digital";

// FAQ Schema data
const faqData = [
  {
    question: "O que é Diagnóstico 360 e quanto tempo leva?",
    answer: "O Diagnóstico 360 é uma análise completa em 15 dias úteis que avalia 150+ pontos da sua operação, incluindo presença digital, processos internos, tecnologia e benchmarking com concorrentes. Segundo estudo da McKinsey, empresas que fazem diagnóstico completo obtêm 3.2x mais ROI em investimentos digitais."
  },
  {
    question: "Qual o investimento do Diagnóstico 360?",
    answer: "O investimento varia conforme o tamanho da empresa. Empresas de pequeno porte (R$1M-5M faturamento) investem em média R$15.000. Empresas de médio porte (R$5M-50M) investem em média R$35.000. Todos os diagnósticos incluem relatório executivo de 30+ páginas e roadmap estratégico de 90 dias."
  },
  {
    question: "Como funciona o acompanhamento pós-diagnóstico?",
    answer: "Oferecemos advisory execututivo por 6 meses com reuniões semanais, suporte WhatsApp ilimitado e otimização contínua. 95% dos nossos clientes atingem as metas estabelecidas no roadmap estratégico. O acompanhamento garante execução correta das recomendações."
  },
  {
    question: "A consultoria serve para empresas de qualquer tamanho?",
    answer: "Trabalhamos com empresas de pequeno, médio e grande porte com faturamento acima de R$1M/ano. Nossa abordagem é ideal para empresas em fase de expansão ou transformação que buscam clareza estratégica. Não recomendamos para startups early-stage sem produto validado."
  },
  {
    question: "Quais os resultados esperados após o diagnóstico?",
    answer: "Nossos clientes obtêm média de 40% de aumento em eficiência operacional, redução de 25% em custos processuais e roadmap com 23+ pontos de ação priorizados. Além disso, 89% reportam clareza estratégica para decisões de investimento e melhor alinhamento entre equipes."
  },
  {
    question: "Atendemos apenas empresas em Blumenau?",
    answer: "Embora sejamos baseados em Blumenau, SC, atendemos empresas em todo Santa Catarina e Brasil. O diagnóstico pode ser feito 100% remoto com reuniões online e acesso à documentação digital. Para empresas em SC, também oferecemos opção presencial."
  },
  {
    question: "Como começa o processo de consultoria?",
    answer: "Iniciamos com uma conversa inicial sem compromisso de 30 minutos para entender seus desafios. Em seguida, apresentamos proposta personalizada e, upon aprovação, iniciamos o diagnóstico em até 5 dias úteis. Todo o processo é transparente com entregas claras em cada etapa."
  }
];

function injectFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const scriptId = "faq-schema";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(faqSchema);
}

function removeFAQSchema() {
  document.getElementById("faq-schema")?.remove();
}

// Testimonials data for schema
const testimonialsData = [
  {
    author: "Roberto Silva",
    role: "CEO, Indústria Metalúrgica - Blumenau/SC",
    review: "O diagnóstico 360 identificou gargalos que sabíamos que existiam, mas não sabíamos como priorizar. Em 90 dias, reduzimos custos operacionais em 25% e aumentamos eficiência em 40%.",
    rating: 5
  },
  {
    author: "Mariana Costa",
    role: "Diretora de Operações, Varejo - Joinville/SC",
    review: "Finalmente uma consultoria que entrega um plano claro e executável. O roadmap estratégico foi essencial para alinhar nossa equipe e priorizar investimentos. Recomendo fortemente.",
    rating: 5
  },
  {
    author: "Carlos Mendes",
    role: "Fundador, Startup Tech - Florianópolis/SC",
    review: "A Schulz trouxe clareza estratégica que faltava para nossa expansão. A análise de processos e o diagnóstico completo nos ajudaram a escalar operação sem crescer a complexidade.",
    rating: 5
  }
];

function injectTestimonialsSchema() {
  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "mainEntity": {
      "@type": "Product",
      "name": "Diagnóstico 360 e Consultoria em Estratégia Digital",
      "description": "Diagnóstico completo em 15 dias com análise de 150+ pontos da operação, roadmap estratégico de 90 dias e acompanhamento executivo.",
      "brand": {
        "@type": "Organization",
        "name": "Schulz Estratégia Digital"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": testimonialsData.map((testimonial) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": testimonial.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue:": testimonial.rating.toString(),
          "bestRating": "5"
        },
        "reviewBody": testimonial.review,
        "publisher": {
          "@type": "Organization",
          "name": testimonial.role
        }
      }))
    }
  };

  const scriptId = "testimonials-schema";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(testimonialsSchema);
}

function removeTestimonialsSchema() {
  document.getElementById("testimonials-schema")?.remove();
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.45 3.44 1.31 4.94L2 22l5.39-1.47a9.84 9.84 0 0 0 4.65 1.18h.01c5.44 0 9.84-4.4 9.84-9.84A9.84 9.84 0 0 0 12.04 2Zm0 17.97h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.2.87.86-3.12-.2-.32a8.1 8.1 0 0 1-1.25-4.25 8.23 8.23 0 1 1 8.23 8.13Zm4.52-6.11c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.24-.64.8-.78.96-.14.16-.28.18-.52.06-.25-.13-1.03-.38-1.96-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.77-1.85-.2-.47-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.56 4.06 3.59.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.67-1.19.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

type NavigationProps = {
  linkPrefix?: string;
};

export function Header({ linkPrefix = "" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3" data-testid="logo-link">
            <img
              src="/logo.png"
              alt="Logomarca da Schulz Estratégia Digital"
              className="w-26 lg:w-30 h-auto object-contain"
            />            
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href={`${linkPrefix}#servicos`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-servicos">Serviços</a>
            <a href={`${linkPrefix}#como-funciona`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-como-funciona">Como Funciona</a>
            <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-blog">Blog</a>
            <a href="/sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-sobre">Sobre</a>
            <a href={`${linkPrefix}#contato`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-contato">Contato</a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="header-whatsapp-link"
            >
              <WhatsappIcon className="w-4 h-4 text-[#25D366]" />
              <span>+55 47 9704-2590</span>
            </a>
            <Button asChild className="rounded-full px-6" data-testid="cta-agendar-header">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Agendar Conversa
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              <a href={`${linkPrefix}#servicos`} className="text-sm font-medium py-2" data-testid="mobile-nav-servicos">Serviços</a>
              <a href={`${linkPrefix}#como-funciona`} className="text-sm font-medium py-2" data-testid="mobile-nav-como-funciona">Como Funciona</a>
              <a href="/blog" className="text-sm font-medium py-2" data-testid="mobile-nav-blog">Blog</a>
              <a href="/sobre" className="text-sm font-medium py-2" data-testid="mobile-nav-sobre">Sobre</a>
              <a href={`${linkPrefix}#contato`} className="text-sm font-medium py-2" data-testid="mobile-nav-contato">Contato</a>
              <Button asChild className="rounded-full w-full mt-2" data-testid="mobile-cta-agendar">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Agendar Conversa
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Dados, tecnologia e crescimento
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-foreground mb-6"
            >
              Transformamos sua empresa com{" "}
              <span className="gradient-text">estratégia digital</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Diagnóstico 360° completo em <strong>15 dias úteis</strong> com análise de <strong>150+ pontos</strong> da sua operação.
              Nossos clientes obtêm média de <strong>40% aumento em eficiência</strong> e roadmap estratégico com <strong>23+ ações priorizadas</strong>.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-10">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base" data-testid="cta-agendar-conversa">
                <a href={whatsappLink} target="_blank" rel="noreferrer">Agendar Conversa</a>
              </Button>
            </motion.div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="Consultoria profissional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a href="#problemas" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Saiba mais</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemasSection() {
  const problems = [
    {
      icon: Target,
      title: "Falta de direcionamento estratégico",
      description: "Sua empresa investe em marketing digital sem uma estratégia clara e mensurável."
    },
    {
      icon: BarChart3,
      title: "Processos desorganizados",
      description: "Operações fragmentadas que drenam recursos e reduzem a produtividade da equipe."
    },
    {
      icon: Zap,
      title: "Tecnologia desatualizada",
      description: "Sistemas legados que não conversam entre si e limitam o crescimento do negócio."
    }
  ];

  return (
    <section id="problemas" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Problemas comuns
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Você reconhece algum desses desafios?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Segundo Harvard Business Review, <strong>70% das transformações digitais falham</strong> por falta de estratégia clara.
            Nós ajudamos sua empresa a estar no grupo que sucesso.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicosSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Diagnóstico 360",
      description: "Análise completa em 15 dias úteis da sua presença digital, processos internos, tecnologia e operação. Segundo McKinsey, empresas com diagnóstico estratégico obtêm 3.2x mais ROI.",
      features: ["Auditoria de 150+ pontos", "Análise de 5+ concorrentes", "Mapeamento de 100% dos processos", "Relatório executivo de 30+ páginas"]
    },
    {
      icon: Lightbulb,
      title: "Estratégia Digital",
      description: "Roadmap estratégico personalizado com metas claras, prioridades definidas e KPIs mensuráveis. Nossos clientes obtêm média de 40% de aumento em eficiência operacional.",
      features: ["Roadmap de 90 dias", "23+ pontos de ação priorizados", "KPIs definidos", "Acompanhamento quinzenal"]
    },
    {
      icon: Users,
      title: "Advisory Executivo",
      description: "Acompanhamento contínuo por 6 meses pós-diagnóstico para garantir a execução correta da estratégia. 95% dos nossos clientes atingem metas estabelecidas.",
      features: ["Reuniões semanais", "Mentoria executiva", "Suporte WhatsApp ilimitado", "Otimização contínua"]
    },
    {
      icon: Shield,
      title: "Workshops de Capacitação",
      description: "Treinamentos personalizados para sua equipe dominar ferramentas digitais em 2-3 dias. Mais de 500 profissionais capacitados desde 2020.",
      features: ["Conteúdo 100% customizado", "Certificação digital", "Material de apoio em PDF", "Suporte pós-workshop de 30 dias"]
    }
  ];

  return (
    <section id="servicos" className="scroll-mt-24 py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como vamos gerar crescimento real para sua empresa
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Soluções completas de consultoria digital para empresas que buscam resultados reais.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ComoFuncionaSection() {
  const steps = [
    {
      number: "01",
      title: "Conversa inicial",
      description: "Entendemos seus desafios, objetivos e contexto. Uma conversa sem compromisso para alinhar expectativas."
    },
    {
      number: "02",
      title: "Diagnóstico completo",
      description: "Analisamos sua presença digital, processos, tecnologia e operação em profundidade."
    },
    {
      number: "03",
      title: "Plano de ação",
      description: "Entregamos um relatório executivo com achados, prioridades e um roadmap de 90 dias."
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Se desejar, oferecemos advisory contínuo para garantir a execução correta das recomendações."
    }
  ];

  return (
    <section id="como-funciona" className="scroll-mt-24 py-20 lg:py-28 bg-foreground text-white">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Como funciona
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
            Processo simples, resultados claros
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-white/70">
            Um processo estruturado que gera clareza e resultados mensuráveis para sua empresa.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-white/20" />
              )}
              <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <span className="text-4xl font-bold text-primary mb-4 block">{step.number}</span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EntregaveisSection() {
  const deliverables = [
    { icon: BarChart3, title: "Relatório executivo de 30+ páginas" },
    { icon: Target, title: "Análise de gaps e oportunidades" },
    { icon: Lightbulb, title: "Roadmap estratégico de 90 dias" },
    { icon: Users, title: "Matriz de priorização" },
    { icon: Zap, title: "Benchmarks do mercado" },
    { icon: Shield, title: "Recomendações de tecnologia" }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Entregáveis
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              O que você recebe ao final do diagnóstico
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Um diagnóstico completo com visão 360° da sua empresa, identificando exatamente onde 
              investir tempo e recursos para maximizar resultados.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-4"
          >
            {deliverables.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="flex items-center gap-4 bg-muted/50 rounded-xl p-5 border border-border/50"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ParaQuemSection() {
  const forWho = [
    "Empresas de pequeno, médio e grande porte",
    "Negócios com faturamento acima de R$ 1M/ano",
    "Empresas em fase de expansão ou transformação",
    "Lideranças que buscam clareza estratégica"
  ];

  const notForWho = [
    "Startups early-stage sem produto validado",
    "Empresas que buscam execução operacional",
    "Negócios que procuram vender ferramentas",
    "Quem espera resultados da noite pro dia"
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Para quem é
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossa abordagem faz sentido para sua empresa?
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ideal para</h3>
            </div>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-red-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Não é para</h3>
            </div>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Depoimentos
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Histórias reais de empresas que transformaram sua operação com nossa consultoria.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.review}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Perguntas Frequentes
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tire suas dúvidas sobre nossa consultoria
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns sobre Diagnóstico 360, estratégia digital e transformação empresarial.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-border/50 shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronIcon
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl p-12 lg:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para transformar sua empresa?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Agende uma conversa sem compromisso e descubra como podemos ajudar 
              sua empresa a alcançar resultados extraordinários.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base bg-white text-primary hover:bg-white/90" data-testid="cta-agendar-conversa-final">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Agendar Conversa
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-white/30 text-white hover:bg-white/10" data-testid="cta-whatsapp">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContatoSection() {
  return (
    <section id="contato" className="scroll-mt-24 py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Contato
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Vamos conversar sobre seu negócio
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Entre em contato conosco para agendar uma conversa inicial. 
              Estamos prontos para entender seus desafios e apresentar como podemos ajudar.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-90 transition-opacity"
                data-testid="contato-whatsapp-link"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <WhatsappIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground">+55 47 9704-2590</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground">contato@schulzdigital.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="font-medium text-foreground">Blumenau, SC - Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instragram</p>
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                    data-testid="contato-instagram-link"
                  >
                    @schulz.digital
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-border/50"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Seu nome"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="seu@email.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                <input 
                  type="text" 
                  id="company"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Nome da empresa"
                  data-testid="input-company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl h-12" data-testid="button-submit-contact">
                Enviar mensagem
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ linkPrefix = "" }: NavigationProps) {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logomarca da Schulz Estratégia Digital"
              className="w-24 h-auto object-contain opacity-90"
            />            
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href={`${linkPrefix}#servicos`} className="hover:text-foreground transition-colors">Serviços</a>
            <a href={`${linkPrefix}#como-funciona`} className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="/sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href={`${linkPrefix}#contato`} className="hover:text-foreground transition-colors">Contato</a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Schulz Estratégia Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    applySeoTags({
      title: "Schulz Estratégia Digital | Consultoria em Blumenau/SC",
      description:
        "Consultoria em estratégia digital em Blumenau, SC. Diagnóstico 360°, análise de processos e tecnologia para empresas de Santa Catarina. Roadmap estratégico em 15 dias.",
      canonicalPath: "/",
      type: "website",
    });

    injectFAQSchema();
    injectTestimonialsSchema();

    return () => {
      removeFAQSchema();
      removeTestimonialsSchema();
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToHash, 0);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemasSection />
        <ServicosSection />
        <ComoFuncionaSection />
        <EntregaveisSection />
        <ParaQuemSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
}
