import { useState } from "react";
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
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Building2,
  Lightbulb,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/professional_consulting_meeting_scene.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3" data-testid="logo-link">
            <img
              src="/logo.png"
              alt="Logomarca da KYNEXT"
              className="w-28 lg:w-32 h-auto object-contain"
            />            
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-servicos">Serviços</a>
            <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-como-funciona">Como Funciona</a>
            <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-sobre">Sobre</a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-contato">Contato</a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+55 11 99999-9999</span>
            </div>
            <Button className="rounded-full px-6" data-testid="cta-agendar-header">
              Agendar conversa
              <ArrowRight className="w-4 h-4 ml-2" />
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
              <a href="#servicos" className="text-sm font-medium py-2" data-testid="mobile-nav-servicos">Serviços</a>
              <a href="#como-funciona" className="text-sm font-medium py-2" data-testid="mobile-nav-como-funciona">Como Funciona</a>
              <a href="#sobre" className="text-sm font-medium py-2" data-testid="mobile-nav-sobre">Sobre</a>
              <a href="#contato" className="text-sm font-medium py-2" data-testid="mobile-nav-contato">Contato</a>
              <Button className="rounded-full w-full mt-2" data-testid="mobile-cta-agendar">
                Agendar conversa
                <ArrowRight className="w-4 h-4 ml-2" />
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
                Consultoria Digital Premiada no Brasil
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
              Avaliação completa de presença digital, processos, tecnologia e operação. 
              Entregamos um plano de ação claro com prioridades — sem complicação, com resultados.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="rounded-full px-8 h-12 text-base" data-testid="cta-solicitar-diagnostico">
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base" data-testid="cta-agendar-conversa">
                Agendar conversa
              </Button>
            </motion.div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
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
            A maioria das empresas enfrenta obstáculos similares. Nós ajudamos a superá-los.
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
      description: "Análise completa da sua presença digital, processos internos, tecnologia e operação. Identificamos gaps e oportunidades de melhoria.",
      features: ["Auditoria digital completa", "Análise de concorrência", "Mapeamento de processos", "Relatório executivo"]
    },
    {
      icon: Lightbulb,
      title: "Estratégia Digital",
      description: "Desenvolvemos um plano de ação personalizado com metas claras, prioridades definidas e indicadores de sucesso.",
      features: ["Roadmap estratégico", "KPIs definidos", "Cronograma de ação", "Acompanhamento mensal"]
    },
    {
      icon: Users,
      title: "Advisory Executivo",
      description: "Acompanhamento contínuo pós-diagnóstico para garantir a execução correta da estratégia definida.",
      features: ["Reuniões semanais", "Mentoria executiva", "Resolução de problemas", "Otimização contínua"]
    },
    {
      icon: Shield,
      title: "Workshops de Capacitação",
      description: "Treinamentos personalizados para sua equipe dominar as ferramentas e metodologias digitais.",
      features: ["Conteúdo customizado", "Certificação", "Material de apoio", "Suporte pós-workshop"]
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28">
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
            Como a KYNEXT pode ajudar sua empresa
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
    <section id="como-funciona" className="py-20 lg:py-28 bg-foreground text-white">
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
            <motion.div variants={fadeUp}>
              <Button size="lg" className="rounded-full px-8" data-testid="cta-conhecer-detalhes">
                Conhecer detalhes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
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
    "Empresas de médio e grande porte",
    "Negócios com faturamento acima de R$ 5M/ano",
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
            A KYNEXT é para sua empresa?
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

function SobreSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">anos de experiência</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre a KYNEXT
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Consultoria digital que entrega resultados, não promessas
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
              A KYNEXT nasceu da experiência de profissionais que passaram por grandes empresas 
              de tecnologia e consultoria. Sabemos que o mercado está cheio de "soluções milagrosas" 
              e promessas vazias.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa abordagem é diferente: fazemos diagnóstico profundo, entregamos clareza 
              sobre prioridades e criamos um plano executável. Não vendemos ferramentas, 
              não executamos o operacional. Entregamos estratégia e direção.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">360°</p>
                <p className="text-sm text-muted-foreground">Diagnóstico completo</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">90 dias</p>
                <p className="text-sm text-muted-foreground">Plano de ação</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base bg-white text-primary hover:bg-white/90" data-testid="cta-agendar-conversa-final">
                Agendar conversa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-white/30 text-white hover:bg-white/10" data-testid="cta-whatsapp">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
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
    <section id="contato" className="py-20 lg:py-28 bg-muted/30">
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">+55 11 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground">contato@kynext.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="font-medium text-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
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

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logomarca da KYNEXT"
              className="w-24 h-auto object-contain opacity-90"
            />            
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 KYNEXT. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
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
        <SobreSection />
        <CTASection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
}
