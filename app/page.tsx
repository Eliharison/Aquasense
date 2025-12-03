import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-primary-dark">
        {/* Navbar */}
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/">
            <Image
              src="/imgs/image-logo-bar.svg"
              alt="Logo-Aquasense"
              width={150}
              height={40}
              priority
            />
          </Link>
          <Link href="/download">
            <button className="hidden sm:block bg-white text-primary-dark font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors cursor-pointer">
              Baixar App
            </button>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">E se Você...</h1>
              <p className="text-lg text-white/90">
                Mergulhar na experiência de cultivar suas plantas enquanto
                observa cada crescimento com precisão e tranquilidade,
                conectando-se intimamente com a natureza através da tecnologia.
              </p>
              <Link href="/download">
                <button className="bg-white text-primary-dark font-medium py-3 px-8 rounded hover:bg-gray-100 transition-colors cursor-pointer">
                  Baixar App
                </button>
              </Link>
            </div>
            <div className="hidden md:block md:w-1/2">
              <Image
                src="/imgs/image-header.svg"
                alt="Image Aquaponia"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Section 1 - Desempenho otimizado */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <Image
                src="/imgs/image-general-features.svg"
                alt="Caracteristicas-Gerais"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Desempenho otimizado
              </h2>
              <p className="text-gray-600 text-lg">
                Monitore o crescimento das suas plantas em tempo real com nosso
                sistema. Tenha acesso a dados precisos e atualizados, permitindo
                ajustes rápidos e eficazes para otimizar a saúde e produtividade
                das suas plantas.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Feedback Rapido */}
        <section className="py-16 md:py-24 px-4 bg-gray-light">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Feedback Rápido
              </h2>
              <p className="text-gray-600 text-lg">
                O sistema Aquasense fornece feedback em tempo real sobre o
                desempenho das suas plantas, permitindo que você tome decisões
                rápidas e eficazes para manter a saúde e produtividade das suas
                plantas.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/imgs/image-fast-feedback.svg"
                alt="Feedback-Rapido"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 3 - Exporte seus Dados */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <Image
                src="/imgs/image-data-export.svg"
                alt="Exportação de dados"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Exporte os seus Dados
              </h2>
              <p className="text-gray-600 text-lg">
                Permitimos que você exporte os dados de desempenho das suas
                plantas em formato de arquivo para análise posterior ou
                compartilhamento com outros profissionais.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - Equilibrio da natureza */}
        <section className="py-16 md:py-24 px-4 bg-gray-light">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Equilíbrio da natureza com eficiência
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Fornecemos dados precisos e atualizados sobre o desempenho das
              suas plantas, permitindo que você tome decisões rápidas e eficazes
              para manter a saúde e produtividade das suas plantas, sem
              prejudicar o equilíbrio da natureza.
            </p>
            <Image
              src="/imgs/image-balance.svg"
              alt="Equilibrio"
              width={800}
              height={500}
              className="w-full max-w-4xl mx-auto h-auto"
            />
          </div>
        </section>

        {/* Section 5 - CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Vamos melhorar seu cultivo?
            </h2>
            <Link href="/download">
              <button className="bg-primary text-white font-medium py-3 px-8 rounded-lg text-lg hover:bg-primary-dark transition-colors cursor-pointer">
                Baixar Agora
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-dark text-gray-text py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/imgs/image-logo-footer.svg"
                alt="logo"
                width={150}
                height={50}
              />
            </div>

            {/* Tecnologias */}
            <div className="text-center md:text-left">
              <h6 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Tecnologias
              </h6>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-text">
                    TypeScript
                  </span>
                </li>
                <li>
                  <span className="text-gray-text">
                    Next.js
                  </span>
                </li>
                <li>
                  <span className="text-gray-text">
                    Kotlin
                  </span>
                </li>
                <li>
                  <span className="text-gray-text">
                    MongoDB
                  </span>
                </li>
              </ul>
            </div>

            {/* Navegação */}
            <div className="text-center md:text-left">
              <h6 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Navegação
              </h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-link transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-link transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-600 opacity-50 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left text-sm">
              <p>
                Copyright &copy; 2025 All Rights Reserved by{" "}
                <a href="#" className="hover:text-link">
                  Technote
                </a>
                .
              </p>
              <p>
                Some arts designed by{" "}
                <a
                  href="https://www.freepik.com/"
                  className="hover:text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freepik
                </a>
                .
              </p>
            </div>

            <div className="flex items-center">
              <a
                href="https://linktr.ee/aquasensepi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-dark hover:bg-purple-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
