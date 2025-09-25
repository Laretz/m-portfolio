'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Code, Database, Server, Globe, GitBranch, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Componente para o botão de tema
const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
  <section id="hero" className="flex min-h-screen flex-col items-center justify-center p-8 text-center md:flex-row md:gap-12 md:text-left">
    <Avatar className="h-40 w-40 md:h-64 md:w-64 ring-4 ring-primary/20">
      <AvatarImage src="https://avatars.githubusercontent.com/u/43372223?v=4" alt="Sua foto" />
      <AvatarFallback>LZ</AvatarFallback>
    </Avatar>
    <div className="mt-8 md:mt-0">
      <h1 className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Desenvolvedor Full Stack
      </h1>
      <p className="mt-2 text-xl md:text-2xl text-muted-foreground">
        Foco em APIs e Otimização
      </p>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
        Experiência em construção de APIs escaláveis, bancos de dados. 
        Especializado em Node.js, TypeScript e boas práticas de desenvolvimento orientado a performance e qualidade.
      </p>
      <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
        <Badge variant="secondary">Node.js</Badge>
        <Badge variant="secondary">TypeScript</Badge>
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
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend & APIs",
      skills: [
        "Node.js & Fastify",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Bcrypt & Segurança",
        "Validação com Zod"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Bancos de Dados & ORM",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Prisma ORM",
        "MongoDB",
        "Migrations & Seeds",
        "Query Optimization"
      ]
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
        "State Management"
      ]
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "DevOps & Ferramentas",
      skills: [
        "Git & GitHub",
        "Docker & Docker Compose",
        "CI/CD Pipelines",
        "ESLint",
        "Metodologias Ágeis"
      ]
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Testes & Qualidade",
      skills: [
        "Vitest & Jest",
        "Testes Unitários",
        "Testes de Integração",
        "TDD/BDD",
        "Supertest",
        "Code Coverage"
      ]
    }
  ];

  return (
    <section id="skills" className="container mx-auto p-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 md:text-5xl">Competências Técnicas</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tecnologias e ferramentas que utilizo para criar soluções robustas e escaláveis
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
                  <li key={skillIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
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
       description: "Sistema completo para gestão acadêmica com algoritmo genético para otimização automática de horários. Inclui gestão de turmas, salas, professores, disciplinas e alocações inteligentes.",
       image: "https://placehold.co/600x400/212121/FFFFFF?text=Sistema+Acadêmico",
      technologies: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Prisma", "Next.js", "Tailwind", "Algoritmos Genéticos"],
      features: [
        "API RESTful com autenticação JWT",
        "Algoritmo genético para otimização de horários",
        "Interface responsiva com Next.js",
        "Validação robusta com Zod",
        "Testes unitários e de integração",
        "Documentação completa da API"
      ],
      links: [
        { label: "Frontend", url: "https://github.com/Laretz/frontend-sistema-academico-alocacoes" },
        { label: "Backend", url: "https://github.com/Laretz/backend-sistema-academico-alocacoes" }
      ]
    },
    {
       title: "Dashboard de Monitoramento de Rede",
       description: "Aplicação fullstack para monitoramento em tempo real de infraestrutura de rede com métricas avançadas e alertas automatizados.",
       image: "https://placehold.co/600x400/212121/FFFFFF?text=TelecomNova",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Prisma", "Express"],
      features: [
        "Monitoramento em tempo real",
        "Dashboard interativo com gráficos",
        "Arquitetura RESTful",
        "Containerização com Docker"
      ],
      links: [
        { label: "Repositório", url: "https://github.com/Laretz/TelecomNova" }
      ]
    },
    {
       title: "Nearby - Marketplace Local",
       description: "Aplicativo mobile para descoberta de estabelecimentos locais com sistema de cupons e geolocalização.",
       image: "https://placehold.co/600x400/212121/FFFFFF?text=Nearby+App",
      technologies: ["React Native", "Node.js", "Expo", "TypeScript", "Axios"],
      features: [
        "Geolocalização em tempo real",
        "Sistema de cupons digitais",
        "Interface nativa multiplataforma",
        "Integração com mapas",
        "Notificações push"
      ],
      links: [
        { label: "Repositório", url: "https://github.com/Laretz/Nearby" }
      ]
    },
    {
       title: "NatalSportsCourts API",
       description: "API RESTful para gerenciamento de quadras esportivas públicas com sistema de agendamentos e controle de disponibilidade.",
       image: "https://placehold.co/600x400/212121/FFFFFF?text=Sports+API",
      technologies: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Swagger"],
      features: [
        "CRUD completo de quadras",
        "Sistema de agendamentos",
        "Controle de disponibilidade",
        "Documentação automática",
        "Validação de dados robusta"
      ],
      links: [
        { label: "Repositório", url: "https://github.com/Laretz/NatalSportsCourts" }
      ]
    }
  ];

  return (
    <section id="projects" className="container mx-auto p-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 md:text-5xl">Projetos em Destaque</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Seleção de projetos que demonstram minhas habilidades técnicas e capacidade de resolver problemas complexos
      </p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
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
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">Principais Features:</h4>
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
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
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
  <section id="experience" className="container mx-auto p-8 py-16 md:py-24 bg-muted/30">
    <h2 className="text-3xl font-bold text-center mb-12 md:text-5xl">Experiência & Formação</h2>
    <div className="max-w-3xl mx-auto space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-semibold">Desenvolvedor Backend — Seu Bone</h3>
            <Badge variant="secondary">2025 - Presente</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Desenvolvimento de sistemas acadêmicos complexos com foco em otimização de algoritmos e arquiteturas escaláveis.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Criação e manutenção de APIs RESTful</li>
            <li>• Integração com bancos de dados</li>
            <li>• Colaboração em equipe utilizando metodologias ágeis</li>
            <li>• Manutenção e implementação de novas funcionalidades</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-semibold">Tecnólogo em Análise e Desenvolvimento de Sistemas — UFRN</h3>
            <Badge variant="outline">2022 - 2025</Badge>
          </div>
          <p className="text-muted-foreground">
             Formação sólida em desenvolvimento de software, com foco em estruturas de dados, algoritmos e engenharia de software. Estou em fase de conclusão do curso, com previsão de formatura em 2025.2.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Componente da Seção de Contato
const ContactSection = () => (
  <section id="contact" className="container mx-auto p-8 py-16 text-center md:py-24">
    <h2 className="text-3xl font-bold mb-4 md:text-5xl">Vamos Conversar?</h2>
    <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
      Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
    </p>
    <div className="flex justify-center gap-4 mb-8">
      <Button asChild size="lg">
        <a href="mailto:renatophoenix123@gmail.com">
          Enviar Email
        </a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href="https://www.linkedin.com/in/renato-ramon-4312b523b" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </Button>
    </div>
    <div className="flex justify-center gap-6">
      <Button asChild variant="ghost" size="icon">
        <a href="https://github.com/Laretz" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" alt="GitHub" className="h-6 w-6 dark:invert" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a href="https://linkedin.com/in/renato-ramon-4312b523b" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6 dark:invert" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a href="https://www.instagram.com/laretzz/?igsh=MTVweDVnd3Blc3lqcA%3D%3D" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg" alt="LinkedIn" className="h-6 w-6 dark:invert" />
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
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <ThemeToggle />
    </>
  );
}
