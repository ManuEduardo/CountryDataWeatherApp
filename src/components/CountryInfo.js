import Weather from "./Weather";
const CountryInfo = ({ nation }) => {
  const language = Object.values(nation.languages);

  return (
    <div className="rounded-2xl border-2 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl p-4 md:max-w-3xl m-3 md:mx-auto flex flex-col">
      <h1 className="font-serif text-5xl font-semibold text-slate-800 underline decoration-2  decoration-indigo-700 m-5  mx-auto drop-shadow-xl">
        {nation.name.common}
      </h1>
      <p className="font-sans text-2xl m-2 font-semibold text-slate-800">
        Capital: {nation.capital}
      </p>
      <p className="font-sans text-2xl m-2 font-semibold text-slate-800 proportional-nums">
        Population: {nation.population}
      </p>
      <h2 className="font-sans text-3xl m-2 mt-5 font-semibold text-slate-800">
        Languages:
      </h2>
      <ul className="mx-2 list-disc list-inside">
        {language.map((element) => (
          <li key={element} className="m-2">
            {element}
          </li>
        ))}
      </ul>
      <img
        alt="flag"
        src={nation.flags.png}
        className="mx-auto my-12 w-64 md:w-80 rounded-md shadow-lg hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 hover:shadow-white/75 delay-200"
      />
      <Weather capital={nation.capital} />
    </div>
  );
};

export default CountryInfo;
