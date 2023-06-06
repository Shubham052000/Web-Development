import { montserrat, pacifico, raleway } from "./layout";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className={`${montserrat.className} mb-4 text-2xl`}>
        Hello World montserrat
      </h1>
      <h1 className={`${pacifico.className} mb-4 text-2xl`}>
        Hello World pacifico
      </h1>
      <h1 className={`${raleway.className} mb-4 text-2xl`}>
        Hello World raleway
      </h1>
      Raleway
      <h1 className={`${raleway.className} mb-4 text-2xl tracking-widest`}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={`${raleway.className} mb-4 text-2xl tracking-widest`}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
    </div>
  );
}
