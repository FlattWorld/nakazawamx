import { Container } from "@/ui";
import Contact from "./Contact";
import Blog from "./Blog";
import heroImg from "@/public/hero2.jpg";
import Image from "next/image";
import { postMetadata } from "@/utils/types";

export default function HomePage({ homePosts }: { homePosts: postMetadata[] }) {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <main>
      <div
        className="h-[80vh] w-full bg-cover flex justify-center bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="w-full text-white max-w-7xl px-8 flex flex-col relative">
          <h1 className="pt-12 text-3xl lg:text-5xl text-center font-semibold sr-only">
            Consultorio médico
          </h1>
          <span className="text-xs lg:text-base mx-auto sr-only">
            Dr. José Luis Nakazawa Toriz (UNAM). Cédula - 2649537
          </span>
          <a
            className="absolute bottom-24 right-24 bg-indigo-500 flex p-2 rounded"
            href="#contacto"
          >
            Agendar Cita{" "}
            <Image
              src="/stethos.svg"
              alt="icono estetoscopio"
              width={28}
              height={28}
              className="text-white"
            />
          </a>
        </div>
      </div>
      <Container className="bg-white">
        <h2 className="py-8 text-3xl lg:text-5xl text-center font-semibold w-full">
          Sobre mi
        </h2>
        <div className="flex flex-col items-center gap-2 my-4">
          <Image
            className="rounded-lg"
            src="/naka.jpeg"
            width={300}
            height={300}
            alt="foto doctor"
          />
          <ul className="space-y-4 md:w-2/3 my-2">
            <li>
              Egresado de la facultad de Medicina de la
              <b className="font-semibold">
                {" "}
                Universidad Nacional Autónoma de México{" "}
              </b>
              (UNAM). Cédula Profesional: 2649537
            </li>
            <li>
              Internado médico en el Hospital general de Zona numero 1 del
              Instituto Mexicano del Seguro Social en Saltillo Coahuila en donde
              obtuve el{" "}
              <b className="font-semibold">
                {" "}
                primer lugar de mi generación del 1° de enero al 31 de diciembre
                de 1996.
              </b>
            </li>

            <li>
              Actualmente trabajo en la Secretaria de Salud otorgando servicio
              médico sábados, domingos y días festivos desde hace 25 años en la
              consulta externa.
            </li>
            <li>
              Trabaje en la consulta externa en el ISSEMYM de Valle de Bravo de
              16/07/2010 al 31/12/2011
            </li>
            <li>
              Fui{" "}
              <b className="font-semibold">
                coordinador del Centro de Atención a la salud
              </b>{" "}
              en el DIF municipal de Valle de Bravo del 01/02/2016 al 01/01/2020
              en donde fui nombrado como empleado del año en el 2016
            </li>
            <li>
              Tengo{" "}
              <b className="font-semibold">
                {" "}
                certificación en medicina general{" "}
              </b>{" "}
              por el Consejo Nacional de Medicina General AC y Consejo de
              Medicina General del estado de México Diciembre 2001.
            </li>
            <li>{`${getDate() - 1996} años de práctica médica`}</li>
          </ul>
          <a
            className="flex ml-auto border-2 border-black p-2 rounded hover:bg-white hover:bg-opacity-20"
            href="#contacto"
          >
            Agendar Cita{" "}
            <Image
              className="text-black"
              src="/stethos.svg"
              alt="icono estetoscopio"
              width={28}
              height={28}
            />
          </a>
        </div>
      </Container>
      <Contact></Contact>
      <Blog posts={homePosts} />
    </main>
  );
}
