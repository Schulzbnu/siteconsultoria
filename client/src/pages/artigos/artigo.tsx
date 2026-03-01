import type React from "react";
import { Link, useRoute } from "wouter";
import { Footer, Header } from "@/pages/home";
import { getPostBySlug } from "./index";
import NotFound from "@/pages/not-found";

const postDateMap: Record<string, string> = {
  "reestruturacao-amazon-transformacao-digital-estrategica": "2026-03-01",
  "diagnostico-360-guia-completo": "2026-02-26",
};

function AmazonRestructuringArticle() {
  return (
    <>
      <p>
        A <strong>Amazon</strong> passou por uma das maiores reestruturações de sua história recente — e os números ajudam a entender um movimento que vai muito além de corte de custos.
      </p>

      <p>
        Entre 2023 e 2024, a empresa anunciou aproximadamente <strong>27 mil demissões corporativas</strong> em diferentes rodadas.
        Em 2022, o quadro global da empresa havia ultrapassado <strong>1,5 milhão de funcionários</strong>, impulsionado pelo crescimento acelerado durante a pandemia.
      </p>

      <p>
        O problema não era falta de tecnologia.
        Não era falta de talento.
        Era complexidade acumulada.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Crescimento acelerado também gera burocracia</h2>
        <p>
          Após expandir rapidamente suas operações, a Amazon passou a enfrentar desafios típicos de estruturas inchadas:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Camadas excessivas de gestão</li>
          <li>Processos de decisão mais lentos</li>
          <li>Reuniões excessivas</li>
          <li>Menor autonomia nas equipes</li>
        </ul>

        <p>
          O CEO Andy Jassy declarou que a empresa precisava se tornar “mais enxuta” e reduzir camadas hierárquicas para recuperar agilidade e eficiência operacional.
        </p>

        <p>
          Ou seja: mesmo uma das empresas mais tecnológicas do mundo percebeu que tecnologia sozinha não resolve estrutura pesada.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">O verdadeiro problema: complexidade organizacional</h2>

        <p>
          Empresas não quebram por falta de ferramenta.
          Quebram por excesso de complexidade.
        </p>

        <p>Digitalizar um sistema desorganizado apenas acelera o caos.</p>

        <p>Muitas empresas acreditam que transformação digital significa:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Implementar um novo CRM</li>
          <li>Automatizar marketing</li>
          <li>Adotar inteligência artificial</li>
          <li>Trocar sistemas</li>
        </ul>

        <p>
          Mas, se o modelo operacional já está confuso, a tecnologia apenas torna os gargalos mais rápidos — e mais caros.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">O que a Amazon fez (e o que isso ensina)</h2>

        <p>A solução adotada foi estrutural:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Redução de camadas hierárquicas</li>
          <li>Maior autonomia para times</li>
          <li>Revisão de prioridades estratégicas</li>
          <li>Foco em eficiência operacional</li>
        </ul>

        <p>Primeiro simplificar. Depois acelerar.</p>

        <p>Essa é a lógica que sustenta qualquer transformação digital consistente.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Transformação digital começa antes do software</h2>

        <p>
          Transformação digital não é implementação tecnológica.
          É reestruturação estratégica.
        </p>

        <p>Antes de automatizar, é preciso:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Mapear processos</li>
          <li>Eliminar retrabalho</li>
          <li>Definir responsabilidades claras</li>
          <li>Estabelecer indicadores de desempenho</li>
        </ul>

        <p>Só então a tecnologia se torna uma alavanca real de crescimento.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">A pergunta que sua empresa precisa responder</h2>

        <p>Se sua empresa dobrasse de tamanho amanhã, sua estrutura aguentaria?</p>

        <p>Ou a complexidade atual já está limitando sua velocidade de crescimento?</p>
      </section>

      <footer className="pt-4 border-t border-border/60">
        <p>Quer descobrir exatamente onde está o gargalo que está limitando seu crescimento?</p>
        <p>
          <strong>📲 Fale conosco no WhatsApp e solicite o seu Diagnóstico 360.</strong>
        </p>
      </footer>
    </>
  );
}

function Diagnostico360Article() {
  return (
    <>
      <p>
        Se a sua empresa investe em tecnologia, marketing e processos internos, mas ainda não
        vê resultados consistentes, o problema não está nas ferramentas — está na <strong>falta de visão estratégica</strong> que
        revela onde estão os gargalos que impedem o crescimento.
      </p>

      <p>
        O <strong>Diagnóstico 360</strong> é uma análise completa que identifica pontos de melhoria na
        sua presença digital, processos internos, operação e tecnologia. Neste artigo, você
        vai entender o que é, por que ele é fundamental e como ele pode <strong>impulsionar seus resultados reais</strong>.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">O que é o Diagnóstico 360?</h2>
        <p>Diagnóstico 360 é uma auditoria digital estratégica que analisa de forma integrada:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Presença digital</li>
          <li>Processos internos</li>
          <li>Tecnologia e integrações</li>
          <li>Concorrência</li>
          <li>Operação e modelo de gestão</li>
        </ul>
        <p>
          Esse tipo de avaliação vai além de verificar se uma ferramenta está funcionando —
          ele revela <strong>gaps, conflitos e oportunidades</strong> que normalmente passam despercebidos no dia a dia.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Por que sua empresa precisa de um Diagnóstico 360?
        </h2>
        <p>
          Empresas que não param para analisar sua estrutura digital frequentemente cometem
          os mesmos erros repetidas vezes: investem em anúncios, ferramentas ou campanhas sem
          saber se a base está sólida para suportar esse crescimento.
        </p>
        <p>Sem um diagnóstico estratégico, você pode estar:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Repetindo processos ineficientes</li>
          <li>Investindo em tecnologia que não entrega resultados</li>
          <li>Perca de oportunidades de mercado</li>
          <li>Tomando decisões com base em achismos</li>
        </ul>
        <p>
          Um Diagnóstico 360 ajuda a <strong>organizar prioridades, eliminar desperdícios e criar um plano de ação claro</strong>,
          alinhado aos objetivos do seu negócio.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">O que analisamos no Diagnóstico 360</h2>

        <h3 className="text-xl font-semibold text-foreground">Presença Digital</h3>
        <p>
          Avaliação completa da sua visibilidade online, incluindo website, redes sociais,
          conteúdo e posicionamento digital.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Processos Internos</h3>
        <p>
          Mapeamento de etapas operacionais e fluxos de trabalho para identificar gargalos e
          desperdícios de tempo ou recursos.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Tecnologia e Integrações</h3>
        <p>
          Verificação de uso de ferramentas e sistemas para garantir que estão integrados e
          potencializando os resultados da operação.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Concorrência</h3>
        <p>
          Comparativo estratégico com os principais concorrentes para entender onde você está
          posicionado no mercado e quais oportunidades competitivas existem.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Relatório Executivo</h3>
        <p>Entrega de um relatório com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Principais gaps identificados</li>
          <li>Oportunidades de melhoria</li>
          <li>Recomendações estratégicas</li>
          <li>Plano de ação com prioridades</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Benefícios de fazer um Diagnóstico 360</h2>
        <p>
          Um Diagnóstico 360 não é apenas um relatório técnico — ele <strong>transforma a forma como sua empresa vê o próprio negócio</strong>,
          oferecendo clareza estratégica para decisões mais inteligentes. Alguns resultados que
          você pode alcançar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aumento de eficiência operacional</li>
          <li>Melhor desempenho de campanhas digitais</li>
          <li>Uso mais estratégico de tecnologia</li>
          <li>Redução de desperdícios</li>
          <li>Decisões baseadas em dados e não em achismos</li>
        </ul>
      </section>

      <footer className="pt-4 border-t border-border/60">
        <p>Quer descobrir exatamente onde está o gargalo que está limitando seu crescimento?</p>
        <p>
          <strong>📲 Fale conosco no WhatsApp e solicite o seu Diagnóstico 360.</strong>
        </p>
      </footer>
    </>
  );
}

const articleContentBySlug: Record<string, React.ReactNode> = {
  "reestruturacao-amazon-transformacao-digital-estrategica": <AmazonRestructuringArticle />,
  "diagnostico-360-guia-completo": <Diagnostico360Article />,
};

export default function Artigo() {
  const [match, params] = useRoute<{ slug: string }>("/blog/:slug");

  if (!match || !params?.slug) {
    return <NotFound />;
  }

  const post = getPostBySlug(params.slug);

  if (!post) {
    return <NotFound />;
  }

  const articleContent = articleContentBySlug[post.slug];

  if (!articleContent) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header linkPrefix="/" />
      <main className="py-24 lg:py-32">
        <article className="max-w-3xl mx-auto px-5 lg:px-6">
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              Publicado em <time dateTime={postDateMap[post.slug] ?? ""}>{post.publishedAt}</time>
            </p>
          </header>

          <div className="space-y-6 text-muted-foreground leading-relaxed">{articleContent}</div>

          <div className="mt-12 pt-8 border-t border-border/60">
            <Link href="/blog" className="text-primary font-medium hover:underline underline-offset-4">
              ← Voltar para o blog
            </Link>
          </div>
        </article>
      </main>
      <Footer linkPrefix="/" />
    </div>
  );
}
