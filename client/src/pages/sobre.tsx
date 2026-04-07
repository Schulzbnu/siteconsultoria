import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Linkedin,
  Mail,
  MapPin,
  Award,
  Users,
  Target,
  Lightbulb,
  Shield,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/pages/home";
import { applySeoTags } from "@/lib/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const whatsappMessage = "Olá, vim do site e gostaria de saber mais sobre a história da Schulz.";
const whatsappLink = `https://wa.me/554797042590?text=${encodeURIComponent(whatsappMessage)}`;

const teamMembers = [
  {
    name: "Equipe Schulz Digital",
    role: "Consultores de Estratégia Digital",
    bio: "Nossa equipe é formada por consultores com mais de 15 anos de experiência em transformação digital, gestão de processos e estratégia empresarial. Já ajudamos mais de 200 empresas em Santa Catarina a alcançar resultados extraordinários através de diagnóstico estratégico e planejamento estruturado.",
    expertise: ["Diagnóstico 360", "Transformação Digital", "Gestão de Processos", "Estratégia e Inovação"]
  }
];

const stats = [
  { icon: Users, number: "200+", label: "Empresas atendidas em SC" },
  { icon: Award, number: "95%", label: "Clientes que atingem metas" },
  { icon: Target, number: "40%", label: "Média de aumento em eficiência" },
  { icon: BarChart3, number: "15", label: "Anos de experiência" }
];

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada recomendação é baseada em dados e orientada a gerar impacto real no seu negócio em até 90 dias."
  },
  {
    icon: Shield,
    title: "Transparência Total",
    description: "Processo claro, entregas definidas e comunicação honesta. Sem promessas vazias ou jargões complicados."
  },
  {
    icon: Lightbulb,
    title: "Inovação Prática",
    description: "Trazemos o que funciona no mercado, adaptado para sua realidade. Tecnologia que resolve, não que impressiona."
  },
  {
    icon: Users,
    title: "Parceria de Longo Prazo",
    description: "Não entregamos apenas relatórios. Acompanhamos a execução e garantimos que as mudanças aconteçam."
  }
];

const timeline = [
  {
    year: "2020",
    title: "Fundação",
    description: "Nascemos em Blumenau com a missão de ajudar empresas catarinenses a navegar a transformação digital de forma estratégica."
  },
  {
    year: "2021",
    title: "Expansão",
    description: "Atendemos 50+ empresas em toda Santa Catarina, consolidando metodologia de Diagnóstico 360."
  },
  {
    year: "2023",
    title: "Maturidade",
    description: "Lançamos framework próprio de análise e atingimos marca de 150 empresas atendidas com 95% de satisfação."
  },
  {
    year: "2024",
    title: "Liderança",
    description: "Reconhecidos como referência em consultoria digital em SC, com foco em empresas de médio porte."
  }
];

function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 lg:pb-24">
      <div className="max-w-[1120px]mx-auto px-5 lg:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Sobre Nós
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Estratégia que{" "}
            <span className="gradient-text">transforma empresas</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Desde 2020, ajudamos empresas em Santa Catarina a alcançar crescimento sustentável através de
            diagnóstico estratégico, análise de processos e transformação digital baseada em dados.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nossa História
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nascemos para resolver um problema real
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Em 2020, percebemos um padrão preocupante: empresas investindo pesado em tecnologia,
                marketing e ferramentas digitais sem ver resultados consistentes.
              </p>
              <p>
                O problema não era falta de tecnologia — era falta de estratégia. Empresas digitalizando
                processos desorganizados, automatizando ineficiências e implementando ferramentas sem
                um plano claro.
              </p>
              <p>
                Criamos a Schulz Estratégia Digital com uma missão simples: <strong>ajudar empresas a
                fazerem as escolhas certas antes de investirem em tecnologia</strong>.
              </p>
              <p>
                Desde então, já ajudamos mais de <strong>200 empresas em Santa Catarina</strong> a
                identificarem gargalos, priorizarem investimentos e alcançarem crescimento sustentável.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-foreground mb-8">
              Nossa Jornada
            </motion.h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
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
            Nossos Valores
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que nos move
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Princípios que guiam cada projeto e cada relação com nossos clientes.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossa Equipe
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pessoas que transformam negócios
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Consultores experientes, focados em resultados e apaixonados por estratégia.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm mb-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
          className="bg-primary rounded-3xl p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vamos conversar sobre seu negócio?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Agende uma conversa sem compromisso e descubra como podemos ajudar sua empresa
            a alcançar resultados extraordinários.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base bg-white text-primary hover:bg-white/90">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Agendar Conversa
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Sobre() {
  useEffect(() => {
    applySeoTags({
      title: "Sobre Nós | Schulz Estratégia Digital - Blumenau/SC",
      description: "Conheça a história da Schulz Estratégia Digital. Desde 2020 ajudando empresas em Santa Catarina com diagnóstico 360, transformação digital e consultoria em processos.",
      canonicalPath: "/sobre",
      type: "website",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
