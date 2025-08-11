export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    seo: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    social: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    analytics: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    email: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    content: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    ppc: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    stats: {
      clients: string;
      roi: string;
      years: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
    social: {
      title: string;
    };
  };
  footer: {
    description: string;
    services: string;
    seo: string;
    social: string;
    ads: string;
    content: string;
    company: string;
    about: string;
    contact: string;
    blog: string;
    careers: string;
    copyright: string;
  };
}

export const translations: Record<string, Translations> = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre Nós",
      contact: "Contato",
    },
    home: {
      title: "Transforme seu negócio com Marketing Digital",
      subtitle: "Somos especialistas em escalar empresas através de estratégias digitais inovadoras, ROI comprovado e soluções personalizadas para cada cliente.",
      cta_primary: "Começar Agora",
      cta_secondary: "Ver Portfólio",
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Oferecemos soluções completas em marketing digital para impulsionar o crescimento do seu negócio",
      seo: {
        title: "SEO & Otimização",
        description: "Melhore sua visibilidade nos motores de busca e atraia mais clientes qualificados organicamente.",
        feature1: "✓ Auditoria técnica completa",
        feature2: "✓ Otimização de palavras-chave",
        feature3: "✓ Link building estratégico",
      },
      social: {
        title: "Gestão de Redes Sociais",
        description: "Construa uma presença forte nas redes sociais com conteúdo engajador e estratégias de crescimento.",
        feature1: "✓ Criação de conteúdo visual",
        feature2: "✓ Gestão de comunidades",
        feature3: "✓ Campanhas pagas otimizadas",
      },
      analytics: {
        title: "Analytics & Relatórios",
        description: "Tome decisões baseadas em dados com relatórios detalhados e insights acionáveis.",
        feature1: "✓ Dashboards personalizados",
        feature2: "✓ Análise de performance ROI",
        feature3: "✓ Relatórios automatizados",
      },
      email: {
        title: "Email Marketing",
        description: "Crie campanhas de email eficazes que convertem leads em clientes fiéis.",
        feature1: "✓ Automação de nutrição",
        feature2: "✓ Segmentação avançada",
        feature3: "✓ A/B testing otimizado",
      },
      content: {
        title: "Marketing de Conteúdo",
        description: "Desenvolva conteúdo valioso que educa, engaja e converte sua audiência.",
        feature1: "✓ Estratégia de conteúdo",
        feature2: "✓ Blog posts otimizados",
        feature3: "✓ Vídeos e infográficos",
      },
      ppc: {
        title: "Publicidade Paga (PPC)",
        description: "Maximize seu ROI com campanhas de anúncios pagos otimizadas e altamente segmentadas.",
        feature1: "✓ Google Ads & Facebook",
        feature2: "✓ Otimização contínua",
        feature3: "✓ Landing pages de alta conversão",
      },
    },
    about: {
      title: "Sobre a Ivox Scale",
      paragraph1: "Somos uma agência de marketing digital especializada em escalar negócios através de estratégias inovadoras e resultados mensuráveis. Com mais de 5 anos de experiência, já ajudamos centenas de empresas a alcançarem seus objetivos digitais.",
      paragraph2: "Nossa missão é democratizar o acesso às melhores práticas de marketing digital, oferecendo soluções personalizadas que se adaptam ao perfil e necessidades únicas de cada cliente.",
      paragraph3: "Utilizamos tecnologias de ponta, análise de dados avançada e uma abordagem estratégica para garantir que cada investimento em marketing digital gere o máximo retorno possível.",
      stats: {
        clients: "Clientes Atendidos",
        roi: "ROI Médio",
        years: "Anos de Experiência",
      },
    },
    contact: {
      title: "Fale Conosco",
      subtitle: "Pronto para transformar seu negócio? Entre em contato conosco e descubra como podemos ajudar.",
      form: {
        name: "Nome Completo",
        email: "Email",
        company: "Empresa (Opcional)",
        message: "Mensagem",
        submit: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      },
      info: {
        title: "Informações de Contato",
        email: "Email",
        phone: "Telefone",
        address: "Endereço",
      },
      social: {
        title: "Redes Sociais",
      },
    },
    footer: {
      description: "Transformamos negócios através de estratégias digitais inovadoras e resultados mensuráveis. Sua parceira em crescimento digital.",
      services: "Serviços",
      seo: "SEO",
      social: "Redes Sociais",
      ads: "Publicidade",
      content: "Conteúdo",
      company: "Empresa",
      about: "Sobre Nós",
      contact: "Contato",
      blog: "Blog",
      careers: "Carreiras",
      copyright: "© 2024 Ivox Scale. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
    },
    home: {
      title: "Transform your business with Digital Marketing",
      subtitle: "We specialize in scaling companies through innovative digital strategies, proven ROI and customized solutions for each client.",
      cta_primary: "Get Started",
      cta_secondary: "View Portfolio",
    },
    services: {
      title: "Our Services",
      subtitle: "We offer complete digital marketing solutions to boost your business growth",
      seo: {
        title: "SEO & Optimization",
        description: "Improve your search engine visibility and attract more qualified customers organically.",
        feature1: "✓ Complete technical audit",
        feature2: "✓ Keyword optimization",
        feature3: "✓ Strategic link building",
      },
      social: {
        title: "Social Media Management",
        description: "Build a strong social media presence with engaging content and growth strategies.",
        feature1: "✓ Visual content creation",
        feature2: "✓ Community management",
        feature3: "✓ Optimized paid campaigns",
      },
      analytics: {
        title: "Analytics & Reports",
        description: "Make data-driven decisions with detailed reports and actionable insights.",
        feature1: "✓ Custom dashboards",
        feature2: "✓ ROI performance analysis",
        feature3: "✓ Automated reporting",
      },
      email: {
        title: "Email Marketing",
        description: "Create effective email campaigns that convert leads into loyal customers.",
        feature1: "✓ Nurturing automation",
        feature2: "✓ Advanced segmentation",
        feature3: "✓ Optimized A/B testing",
      },
      content: {
        title: "Content Marketing",
        description: "Develop valuable content that educates, engages, and converts your audience.",
        feature1: "✓ Content strategy",
        feature2: "✓ Optimized blog posts",
        feature3: "✓ Videos and infographics",
      },
      ppc: {
        title: "Paid Advertising (PPC)",
        description: "Maximize your ROI with optimized and highly targeted paid ad campaigns.",
        feature1: "✓ Google Ads & Facebook",
        feature2: "✓ Continuous optimization",
        feature3: "✓ High-conversion landing pages",
      },
    },
    about: {
      title: "About Ivox Scale",
      paragraph1: "We are a digital marketing agency specialized in scaling businesses through innovative strategies and measurable results. With over 5 years of experience, we've helped hundreds of companies achieve their digital goals.",
      paragraph2: "Our mission is to democratize access to digital marketing best practices, offering customized solutions that adapt to each client's unique profile and needs.",
      paragraph3: "We use cutting-edge technologies, advanced data analysis, and a strategic approach to ensure that every digital marketing investment generates maximum possible return.",
      stats: {
        clients: "Clients Served",
        roi: "Average ROI",
        years: "Years of Experience",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to transform your business? Contact us and discover how we can help.",
      form: {
        name: "Full Name",
        email: "Email",
        company: "Company (Optional)",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We will contact you soon.",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        address: "Address",
      },
      social: {
        title: "Social Media",
      },
    },
    footer: {
      description: "We transform businesses through innovative digital strategies and measurable results. Your partner in digital growth.",
      services: "Services",
      seo: "SEO",
      social: "Social Media",
      ads: "Advertising",
      content: "Content",
      company: "Company",
      about: "About Us",
      contact: "Contact",
      blog: "Blog",
      careers: "Careers",
      copyright: "© 2024 Ivox Scale. All rights reserved.",
    },
  },
};
