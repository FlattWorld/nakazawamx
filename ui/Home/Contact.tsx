import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative isolate bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <svg
                className="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                viewBox="0 0 1155 678"
                aria-hidden="true"
              >
                <path
                  fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                  fillOpacity=".2"
                  d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
                />
                <defs>
                  <linearGradient
                    id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                    x1="1155.49"
                    x2="-78.208"
                    y1="677.823"
                    y2="203.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4F46E5" />
                    <stop offset={1} stopColor="#80CAFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2
              id="contacto"
              className="text-3xl font-bold tracking-tight text-white"
            >
              Contacto
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Agenda una cita de Lunes a Viernes en Torre Médica Sanatorio
              Toluca. Tambien puedes agendar usando{" "}
              <a
                className="underline hover:text-white"
                target="_blank"
                href="https://www.doctoralia.com.mx/jose-luis-nakazawa-toriz/medico-general/toluca-de-lerdo"
              >
                doctoralia
              </a>
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Direccion</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    href="https://goo.gl/maps/8n41Hhm1bYhSxvqF8"
                    target="_blank"
                  >
                    Torre Médica Sanatorio Toluca, Calle Rodolfo Sanchez 621
                    esq. Tollocan.
                    <br />
                    Toluca de Lerdo
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Teléfono</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:(722) 168-2541">
                    722 168 2541
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:docnakazawa@gmail.com"
                  >
                    docnakazawa@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
            <div className="text-gray-300 mt-4">
              <span className="mt-6">Redes Sociales</span>
              <ul className="flex gap-4 mt-3">
                <li>
                  <a
                    className="flex flex-col items-center gap-2 hover:text-white"
                    target="_blank"
                    href="https://www.doctoralia.com.mx/jose-luis-nakazawa-toriz/medico-general/toluca-de-lerdo"
                  >
                    <span>Doctoralia</span>
                    <Image
                      src="/icon-doctoralia.svg"
                      width={24}
                      height={24}
                      alt="icono doctoralia"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center gap-2 hover:text-white"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100082974152559"
                  >
                    <span>Facebook</span>
                    <Image
                      src="/facebook.png"
                      width={28}
                      height={28}
                      alt="icono doctoralia"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.3846929325544!2d-99.66773133528365!3d19.275620783836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89e43bb7a4ab%3A0xc2dfd44637df5257!2sDr.%20Jos%C3%A9%20Luis%20Nakazawa%20Toriz%2C%20M%C3%A9dico%20general!5e0!3m2!1sen!2smx!4v1679873567685!5m2!1sen!2smx"
              className="flex w-full h-80 md:h-[450px]"
              // width="600"
              // height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
