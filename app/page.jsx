import Image from "next/image";
import { RiFileUserLine, RiArchive2Fill, RiNumbersFill, RiMailOpenLine } from "react-icons/ri";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <>
      <section className="h-screen flex justify-center flex-col items-center lg:px-20 px-10 gap-8 animate-slide-in-top" id="s_1">
        <p className="lg:text-4xl text-3xl text-center font-semibold"><span className="lg:text-5xl text-4xl">[</span> Hola mi nombre es <span className="text-blue-300">David Acevedo,</span> Desarrollador full stack <span className="lg:text-5xl text-4xl">]</span></p>
        <p className="text-center lg:text-xl text-lg">&quot;Como desarrollador full stack, domino tanto el desarrollo del front-end como del back-end, lo que me capacita para construir aplicaciones completas y eficaces, abordando todos los aspectos necesarios para cumplir con los requerimientos de los clientes desde el concepto hasta la entrega final.&quot;</p>
      </section>
      <section className="lg:px-20 pt-28 px-10 animate-fade-in" id="s_2">
        <p className="border-white border-b-[2px] w-44 pb-2 flex items-center gap-3 mb-12 lg:text-xl text-lg"> <RiFileUserLine /> ACERCA DE MÍ</p>
        <div className="grid grid-cols-4">

          <div className="col-span-1 items-center hidden lg:flex">
            <Image className="rounded-md" src={'/imagenes/img_person.jpeg'} width={250} height={250}></Image>
          </div>
          <div className="lg:col-span-3 col-span-4 ">
            <div className="flex justify-center gap-12">
              <div className="text-center mb-12">
                <h1 className="lg:text-6xl text-5xl font-bold text-blue-300">5+</h1>
                <p>AÑOS DE EXPERICECIA</p>
              </div>
              <div className="text-center">
                <h1 className="lg:text-6xl text-5xl font-bold text-blue-300">10+</h1>
                <p>PROYECTOS DESARROLLADOS</p>
              </div>
            </div>
            <p className="lg:text-xl text-lg mb-10">¡Hola! Soy <span className="text-blue-300">David Acevedo</span>, Tecnólogo en ADSI (Análisis y Desarrollo de Sistemas de Información) con más de 5 años de experiencia en desarrollo web y un historial de más de 10 proyectos realizados a lo largo de mi carrera. Nací en Bucaramanga, Colombia, y actualmente me desempeño como desarrollador web para una compañía de energía. </p>
            <div>
              <p className="lg:text-xl text-lg">Trabajo con los siguientes lenguajes de programación:</p>
              <ul className="flex gap-3 my-3">
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/html.png'} width={40} height={40}></Image>
                  <p className="text-xs">HTML5</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/css.png'} width={40} height={40}></Image>
                  <p className="text-xs">CSS3</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/php.png'} width={40} height={40}></Image>
                  <p className="text-xs">PHP</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/javascript.png'} width={40} height={40}></Image>
                  <p className="text-xs">JAVASCRIPT</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/tailwincss.webp'} width={40} height={40}></Image>
                  <p className="text-xs">TAILWINCSS</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="lg:text-xl text-lg">Se usar los siguientes Frameworks:</p>
              <ul className="flex gap-3 my-3">
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/laravel.png'} width={40} height={40}></Image>
                  <p className="text-xs">LARAVEL</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/yii.png'} width={40} height={40}></Image>
                  <p className="text-xs">YII2</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/vuejs.png'} width={40} height={40}></Image>
                  <p className="text-xs">VUEJS</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/react.png'} width={40} height={40}></Image>
                  <p className="text-xs">REACTJS</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/nextjs.png'} width={40} height={40}></Image>
                  <p className="text-xs">NEXTJS</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="lg:text-xl text-lg">Y en base de datos:</p>
              <ul className="flex gap-3 my-3">
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/mysql.png'} width={40} height={40}></Image>
                  <p className="text-xs">MYSQL</p>
                </li>
                <li className="bg-[#33333375] p-2 rounded-lg flex flex-col justify-center items-center gap-1 w-20 hover:scale-105 transition-all">
                  <Image className="rounded-md" src={'/logos_web/postgresql.webp'} width={40} height={40}></Image>
                  <p className="text-xs">POSTGREST</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-20 px-10 pt-28" id="s_3">
        <p className="border-white border-b-[2px] w-44 pb-2 flex items-center gap-3 mb-12 lg:text-xl text-lg"> <RiArchive2Fill /> CURRICULUM</p>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="border-[1px] border-white p-6 rounded-lg">
            <strong className="">EDUCACIÓN</strong>
            <ul className="mt-10 flex flex-col gap-3">
              <li className="bg-[#9c9c9c25] p-3 rounded-md text-sm"><strong>2020 - POLI:</strong> Ingenieria de software ( 7 Semestre).</li>
              <li className="bg-[#9c9c9c25] p-3 rounded-md text-sm"><strong>2016-201 - SENA: </strong>Tecnologo en analisis y desarrollo de sistemas de información.</li>
              <li className="bg-[#9c9c9c25] p-3 rounded-md text-sm"><strong>2019 - SENA:</strong> Especializacion tecnologica en seguridad y base de datos.</li>
            </ul>
          </div>
          <div className="border-[1px] border-white p-6 rounded-lg lg:col-span-2">
            <strong className="">EXPERIENCIA</strong>
            <ul className="mt-10 flex flex-col gap-3">
              <li className="bg-[#9c9c9c25] p-3 rounded-md flex items-center">
                <span className="py-3 px-4 hidden lg:flex"><Image className="rounded-full" src={'/logos/wmsas.svg'} width={50} height={30}></Image></span>
                <div className="flex flex-col gap-1">
                  <strong className="text-lg">Desarrollador full stack</strong>
                  <span className="text-gray-500 text-sm">WM SAS. Contrato Temporal</span>
                  <p className="text-sm">may. 2021 - actualidad · 3 años 4 meses,may. 2021 - actualidad · 3 años 4 meses
                    Santander, Colombia</p>
                </div>
              </li>
              <li className="bg-[#9c9c9c25] p-3 rounded-md flex items-center">
                <span className="py-3 px-4 hidden lg:flex"><Image className="rounded-full" src={'/logos/eleganza.png'} width={50} height={30}></Image></span>
                <div className="flex flex-col gap-1">
                  <strong className="text-lg">Administrador pagina web</strong>
                  <span className="text-gray-500 text-sm">Eleganza · Freelance</span>
                  <p className="text-sm">may. 2024 - actualidad · 3 meses. Colombia</p>
                </div>
              </li>
              <li className="bg-[#9c9c9c25] p-3 rounded-md flex items-center">
                <span className="py-3 px-4 hidden lg:flex"><Image className="rounded-full" src={'/logos/elemento.png'} width={50} height={30}></Image></span>
                <div className="flex flex-col gap-1">
                  <strong className="text-lg">Desarrollador full stack</strong>
                  <span className="text-gray-500 text-sm">Agencia elemento · Freelance</span>
                  <p className="text-sm">mar. 2018 - actualidad · 6 años 6 meses. Colombia</p>
                </div>
              </li>
              <li className="bg-[#9c9c9c25] p-3 rounded-md flex items-center">
                <span className="py-3 px-4 hidden lg:flex"><Image className="rounded-full" src={'/logos/indra.jpeg'} width={50} height={30}></Image></span>
                <div className="flex flex-col gap-1">
                  <strong className="text-lg">Gestion de la configuracion</strong>
                  <span className="text-gray-500 text-sm">Indra · Jornada completa</span>
                  <p className="text-sm">jul. 2019 - sept. 2019 · 3 meses. Colombia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="lg:px-20 px-10 pt-28" id="s_3">
        <p className="border-white border-b-[2px] w-44 pb-2 flex items-center gap-3 mb-12 text-xl"> <RiNumbersFill /> PROYECTOS</p>
        <Projects />
      </section>
      <section className="lg:px-20 px-10 pt-28 pb-28" id="s_4">
        <p className="border-white border-b-[2px] w-44 pb-2 flex items-center gap-3 mb-12 text-xl"> <RiMailOpenLine /> CONTACTO</p>
        <div className="grid gap-2 lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:flex lg:justify-center hidden">
            <h1 className="text-4xl">¡Trabajemos juntos!</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>
              Si tienes alguna pregunta, inquietud o simplemente quieres charlar sobre un proyecto, no dudes en contactarme. Estoy aquí para ayudarte y espero poder colaborar contigo pronto.
            </h1>
            <div className="flex flex-col gap-2">
              <strong className="text-blue-300">Email:</strong> <a href='mailto:acevdo22@hotmail.com'> acevdo22@hotmail.com </a>
              <strong className="text-blue-300">Whatsapp:</strong> <a href='https://wa.me/573175600116
' target='_blank'> 3175600116 </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
