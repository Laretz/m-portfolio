"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Code,
  Database,
  Server,
  Globe,
  GitBranch,
  TestTube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Componente para o botão de tema
const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
};

// Componente da Seção Hero/Sobre
const HeroSection = () => (
  <section
    id="hero"
    className="flex min-h-screen flex-col items-center justify-center p-8 text-center md:flex-row md:gap-12 md:text-left"
  >
    <Avatar className="h-40 w-40 md:h-64 md:w-64 ring-4 ring-primary/20">
      <AvatarImage
        src="profile.jpg"
        alt="Foto de perfil"
      />
      <AvatarFallback>LZ</AvatarFallback>
    </Avatar>
    <div className="mt-8 md:mt-0">
      <h1 className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Desenvolvedor Full Stack
      </h1>
      <p className="mt-2 text-xl md:text-2xl text-muted-foreground">
        Desenvolvimento voltado à performance, qualidade e boas práticas
      </p>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
        Olá! Sou Renato Ramon, tenho 28 anos e atuo como desenvolvedor com foco em back-end, 
        utilizando principalmente Node.js e TypeScript. No último ano, trabalhei com NestJS no desenvolvimento e evolução de APIs, 
        aproveitando sua arquitetura modular, injeção de dependência e suporte a validações e testes para construir aplicações 
        organizadas, escaláveis e de fácil manutenção.  Apesar do foco em back-end, também possuo experiência com 
        React e Next.js, atuando em alguns momentos como fullstack na construção de interfaces e integração com APIs.
      </p>
      <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
        <Badge variant="secondary">Node.js, NestJS & TypeScript</Badge>
        <Badge variant="secondary">PostgreSQL</Badge>
        <Badge variant="secondary">Prisma ORM</Badge>
        <Badge variant="secondary">Next.js</Badge>
      </div>
    </div>
  </section>
);

// Componente para a Seção de Competências Técnicas
const TechnicalSkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Linguagens de Programação",
      skills: [
        "TypeScript/JavaScript",
        "C# (.NET)",
        "SQL",
        "HTML5/CSS3",
        "Python",
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend & APIs",
      skills: [
        "NestJS & Node.js",
        "Arquitetura Modular",
        "RESTful APIs",
        "JWT Authentication",
        "Validação com Zod",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Bancos de Dados & ORM",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Prisma ORM",
        "Migrations & Seeds",
        "Query Optimization",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend & UI",
      skills: [
        "React & Next.js",
        "React Native",
        "Tailwind CSS",
        "Shadcn/ui",
        "Responsive Design",
        "State Management",
      ],
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "DevOps & Ferramentas",
      skills: [
        "Git & GitHub",
        "Docker & Docker Compose",
        "CI/CD (GitHub Actions)",  
        "Deploy (Render)",
        "Ambientes (dev/staging/prod)",
        "ESLint",
      ],
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Testes & Qualidade",
      skills: [
        "Jest",
        "Testes Unitários",
        "Testes de Integração",
        "E2E(Supertest)",
        "TDD (conceitos)",
      ],
    },
  ];

  return (
    <section id="skills" className="container mx-auto p-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 md:text-5xl">
        Competências Técnicas
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tecnologias e ferramentas que utilizo para criar soluções robustas e
        escaláveis
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Componente da Seção de Projetos
const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Grade de Horários Acadêmicos",
      description:
        "Sistema para apoio à alocação semestral de turmas da UFRN, desenvolvido para reduzir conflitos e retrabalhos no processo de definição de horários. Permite o gerenciamento de disciplinas, professores, espaços físicos e horários, facilitando a organização acadêmica e a tomada de decisão da coordenação do curso. Inclui um módulo inicial de sugestão automática baseado em algoritmo genético, que analisa combinações viáveis e propõe distribuições de horário por turma.",
      image:
        "https://placehold.co/600x400/212121/FFFFFF?text=Sistema+Acadêmico",
      technologies: [
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Prisma",
        "Next.js",
        "Tailwind",
        "Algoritmos Genéticos",
      ],
      features: [
        "API RESTful com autenticação JWT",
        "Algoritmo genético para otimização de horários",
        "Interface responsiva com Next.js",
        "Validação robusta com Zod",
        "Testes unitários e de integração",
        "Documentação completa da API",
      ],
      links: [
        {
          label: "Frontend",
          url: "https://github.com/Laretz/frontend-sistema-academico-alocacoes",
        },
        {
          label: "Backend",
          url: "https://github.com/Laretz/backend-sistema-academico-alocacoes",
        },
      ],
    },
    {
      title: "BrainCode - Rede Social para Desenvolvedores",
      description:
        "Plataforma para desenvolvedores registrarem e compartilharem aprendizados técnicos, com organização em pastas e possibilidade de reutilização de soluções, como componentes e trechos de código criados ao longo de projetos.",
      image: "https://placehold.co/600x400/212121/FFFFFF?text=BrainCode+App",
      technologies: [
        "React Native",
        "Firebase/Firestore",
        "Expo",
        "TypeScript",
        "Zustand",
      ],
      features: [
        "Firebase completo (Auth + Firestore + Storage)",
        "Sistema de postagens e interações",
        "Cache com TanStack Query",
      ],
      links: [
        { label: "Repositório", url: "https://github.com/Laretz/braincode" },
      ],
    },
    {
      title: "Dashboard de Monitoramento de Rede",
      description:
        "Aplicação fullstack para monitoramento em tempo real de infraestrutura de rede com métricas avançadas e alertas automatizados.",
      image: "https://placehold.co/600x400/212121/FFFFFF?text=TelecomNova",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Prisma",
        "Express",
      ],
      features: [
        "Monitoramento em tempo real",
        "Dashboard interativo com gráficos",
        "Arquitetura RESTful",
        "Containerização com Docker",
      ],
      links: [
        { label: "Repositório", url: "https://github.com/Laretz/TelecomNova" },
      ],
    },
    {
      title: "NatalSportsCourts API",
      description:
        "API RESTful para gerenciamento de quadras esportivas públicas, com cadastro de quadras, controle de disponibilidade e agendamentos. O sistema permite que usuários compartilhem informações sobre o uso das quadras em tempo real, ajudando a identificar se há jogos acontecendo e qual esporte está sendo praticado.",
      image: "https://placehold.co/600x400/212121/FFFFFF?text=Sports+API",
      technologies: [
        "ASP.NET Core",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Swagger",
      ],
      features: [
        "CRUD completo de quadras",
        "Sistema de agendamentos",
        "Controle de disponibilidade",
        "Documentação automática",
        "Validação de dados robusta",
      ],
      links: [
        {
          label: "Repositório",
          url: "https://github.com/Laretz/NatalSportsCourts",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="container mx-auto p-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 md:text-5xl">
        Projetos em Destaque
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Seleção de projetos pessoais que demonstram minhas habilidades técnicas e
        capacidade de resolver problemas
      </p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">Tecnologias:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">
                  Principais Features:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap">
                {project.links.map((link, linkIndex) => (
                  <Button key={linkIndex} asChild variant="outline" size="sm">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Componente da Seção de Experiência
const ExperienceSection = () => (
  <section
    id="experience"
    className="container mx-auto p-8 py-16 md:py-24 bg-muted/30"
  >
    <h2 className="text-3xl font-bold text-center mb-12 md:text-5xl">
      Experiência & Formação
    </h2>
    <div className="max-w-3xl mx-auto space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-semibold">
              Desenvolvedor Backend — SeuBoné
            </h3>
            <Badge variant="secondary">2025 ~ 2026 - Presente</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
           Atuação no desenvolvimento e manutenção dos sistemas internos da empresa, com foco em back-end, 
           modelagem de dados e construção de APIs.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Desenvolvimento de APIs REST e definição de rotas</li>
            <li>• Modelagem de dados e criação de estruturas no banco de dados</li>
            <li>• Implementação e manutenção de regras de negócio no back-end</li>
            <li>• Integração entre sistemas internos</li>
            <li>• Construção de queries e endpoints para geração de métricas de negócio </li>
            <li>• Evolução contínua das aplicações com foco em organização e escalabilidad </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-semibold">
              Tecnólogo em Análise e Desenvolvimento de Sistemas — UFRN
            </h3>
             <Badge variant="secondary">2022 ~ 2026 </Badge>
          </div>
          <p className="text-muted-foreground">
            Formação em Análise e Desenvolvimento de Sistemas pela UFRN, com base em estruturas de dados, algoritmos e 
            engenharia de software. Ao longo do curso, desenvolvi projetos voltados à construção de APIs e sistemas completos. 
            Atualmente em fase final, com previsão de conclusão em 2026.1.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Componente da Seção de Contato
const ContactSection = () => (
  <section
    id="contact"
    className="container mx-auto p-8 py-16 text-center md:py-24"
  >
    <h2 className="text-3xl font-bold mb-4 md:text-5xl">Vamos Conversar?</h2>
    <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
      Estou sempre aberto a novas oportunidades e projetos interessantes. Entre
      em contato!
    </p>
    <div className="flex justify-center gap-4 mb-8">
      <Button asChild size="lg">
        <a href="mailto:renatophoenix123@gmail.com">Enviar Email</a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a
          href="https://www.linkedin.com/in/renato-ramon-4312b523b"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Button>
    </div>
    <div className="flex justify-center gap-6">
      <Button asChild variant="ghost" size="icon">
        <a
          href="https://github.com/Laretz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
            alt="GitHub"
            className="h-6 w-6 dark:invert"
          />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a
          href="https://linkedin.com/in/renato-ramon-4312b523b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6 dark:invert"
          />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a
          href="https://www.instagram.com/laretzz/?igsh=MTVweDVnd3Blc3lqcA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg"
            alt="LinkedIn"
            className="h-6 w-6 dark:invert"
          />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
    </div>
  </section>
);

// Componente Principal da Página
export default function PortfolioPage() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <TechnicalSkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ThemeToggle />
    </>
  );
}
