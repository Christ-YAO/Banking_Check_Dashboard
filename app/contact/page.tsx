import Image from "next/image";
import { Header } from "../_components/Header";
import { Section } from "../_components/Section";
import { Spacing } from "../_components/Spacing";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <Header />
      <Section className="h-[80vh] grid place-items-center">
        {/* <Spacing size="md" /> */}
        <Card className="flex items-center justify-evenly w-full sm:w-[90%] md:w-[70%] lg:w-[60%] m-auto py-6 group relative transition-all">
          <div className="w-44 absolute -top-20 -left-20 z-0">
            <img src="/images/white_cube2.png" alt="White_Cube" className="" />
          </div>
          <div className="w-44 absolute -top-20 -right-28 z-0">
            <img src="/images/dark_cube2.png" alt="White_Cube" className="" />
          </div>
          <div className="flex flex-col gap-6 py-4">
            <h2 className="font-bold font-mono text-3xl mb-4 text-blue-600">
              Contact Us
            </h2>

            <div className="">
              <p className="font-bold mb-2">Téléphone</p>
              <a
                href="tel:0000000000"
                className="hover:underline text-muted-foreground"
              >
                (+225) 0000000000
              </a>
            </div>
            <div className="w-4 h-1 bg-black group-hover:w-10 transition-all"></div>
            <div className="">
              <p className="font-bold mb-2">Fixe</p>
              <a
                href="tel:0000000000"
                className="hover:underline text-muted-foreground"
              >
                (+225) 0000000000
              </a>
            </div>
            <div className="w-4 h-1 bg-black group-hover:w-10 transition-all"></div>
            <div className="">
              <p className="font-bold mb-2">Courriel</p>
              <a
                href="mailto:example@mail.com"
                className="hover:underline text-muted-foreground"
              >
                example@mail.com
              </a>
            </div>
          </div>
          <div className="w-44 absolute -bottom-20 -left-20 z-0">
            <img src="/images/white_cube1.png" alt="White_Cube" className="" />
          </div>
          <div className="w-44 absolute -bottom-20 -right-28 z-0">
            <img src="/images/dark_cube1.png" alt="White_Cube" className="" />
          </div>
        </Card>
      </Section>
    </>
  );
}
