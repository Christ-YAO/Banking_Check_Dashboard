'use client'

import { SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SaveCheckForm from "@/app/ui/check/save-form";
import CheckTable from "@/app/ui/check/table";
import Search from "@/app/ui/check/search";
import { useState } from "react";

export default function Page() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Suivi des chèques</h1>
      <Breadcrumb className="text-black mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Etat chèques</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Search setSearchValue={setSearchValue} />
      <CheckTable />
    </main>
  );
}
