import Link from "next/link";
import { Section } from "./_components/Section";
import { Spacing } from "./_components/Spacing";
import { Check } from "lucide-react";
import { Header } from "./_components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen relative">
      <div className="w-44 absolute top-[43%] md:top-24 z-0 left-[31%] xl:left-[7%]">
        <img src="/images/white_cube2.png" alt="White_Cube" className="" />
      </div>
      <div className="w-full md:w-[40%] absolute top-[65%] -z-10 md:top-[37%] right-[7%]">
        <img
          src="/images/the_rockwell-removebg-preview.png"
          alt=""
          className=" brightness-0"
        />
      </div>
      <Header />
      {/* <Spacing size="sm" /> */}
      <Section className="flex flex-col md:flex-row gap-4 justify-between items-center mt-10 lg:mt-0 z-50">
        <div className="flex flex-col gap-8 flex-1 lg:flex-[2]">
          <div className="text-green-800 text-4xl sm:text-5xl font-extrabold">
            Gérez facilement vos finances pour vos besoins quotidiens.
          </div>
          <div className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            suscipit odit eveniet modi.
          </div>
          <Link
            href="/"
            title=""
            className="bg-green-800 text-white w-[200px] px-4 text-center text-xl py-4 rounded-xl hover:brightness-75 transition-all"
          >
            Télécharger App
          </Link>
        </div>
        <div className="flex-1 lg:flex-[3]">
          <img
            className="w-[80%] sm:w-[60%] md:w-[100%] lg:w-[75%] m-auto md:float-right"
            src="https://s3-alpha.figma.com/hub/file/2055541380/fa3f0d3f-4a3e-41f8-93ce-f3a74a45f353-cover.png"
            alt="Main-Image"
          />
        </div>
      </Section>
      <Spacing size="sm" />
      <Section className="flex flex-col lg:flex-row gap-x-4 gap-y-10 mt-10 lg:mt-0">
        <div className="flex flex-wrap gap-6 pr-10 justify-evenly lg:justify-start flex-1">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png"
            alt="VISA Logo"
            className="w-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
            alt="MasterCard Logo"
            className="w-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png"
            alt="Google Pay Logo"
            className="w-16"
          />
          <img
            src="https://logo-marque.com/wp-content/uploads/2022/03/Apple-Pay-Logo.png"
            alt="Apple Pay Logo"
            className="w-16"
          />
          <img
            src="https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225080_1280.png"
            alt="Bitcoin"
            className="w-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-banque-atlantique.png"
            alt="Atlasique"
            className="w-16"
          />
          <img
            src="https://akor2pret.com/wp-content/uploads/2023/07/societe-generale-logo.png"
            alt="SGCI"
            className="w-16"
          />
          <img
            src="https://bduci.com/wp-content/uploads/2021/08/Logo-BDUCI.png"
            alt="BDU"
            className="w-16"
          />
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:m-auto gap-16 lg:gap-4 lg:border-b pb-10">
          <div className="flex gap-4 items-start">
            <div className="font-extrabold text-green-700 p-2 rounded-full border border-green-700 grid place-items-center">
              <Check />
            </div>
            <div className="">
              <h4 className="text-lg font-extrabold text-green-800">
                Rapide et sécurisé
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="font-extrabold text-green-700 p-2 rounded-full border border-green-700 grid place-items-center">
              <Check />
            </div>
            <div className="">
              <h4 className="text-lg font-extrabold text-green-800">
                Gratuit
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <div className="w-44 absolute -bottom-8 z-0 right-[5%] hidden lg:block">
        <Image
          src="/images/dark_cube2.png"
          alt="Dark_Cube"
          className="w-full"
          width={100}
          height={100}
          priority
        />
      </div>
    </main>
  );
}

// 0102555618
