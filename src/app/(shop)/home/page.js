

export default function Home() {
    return (
      <>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage:
          `url("/fondoHeroHome.webp")`,
        }}
      >
        <div className="hero-overlay max-h-72 bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-12 text-6xl font-bold text-warning-content">Hello word</h1>
            <p className="mb-5 text-base-content text-lg font-semibold">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            
          </div>
        </div>
      </div>
      </>
    );
  }
